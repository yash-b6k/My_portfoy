import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const rateLimits = new Map();

app.use(express.json());

const getClientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  return (forwarded ? forwarded.split(",")[0] : req.socket.remoteAddress) || "unknown";
};

const validateEmail = (value) => {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

const rateLimitMiddleware = (req, res, next) => {
  const ip = getClientIp(req);
  const now = Date.now();
  const entries = rateLimits.get(ip) || [];
  const recent = entries.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      error: "Too many requests. Please wait and try again later.",
    });
  }

  recent.push(now);
  rateLimits.set(ip, recent);
  next();
};

app.post("/api/send-email", rateLimitMiddleware, async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (typeof name !== "string" || name.trim().length === 0) {
    return res.status(400).json({ error: "Name is required." });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  if (typeof subject !== "string" || subject.trim().length === 0) {
    return res.status(400).json({ error: "Subject is required." });
  }

  if (typeof message !== "string" || message.trim().length === 0) {
    return res.status(400).json({ error: "Message is required." });
  }

  if (message.length > 2000) {
    return res.status(400).json({ error: "Message is too long." });
  }

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return res.status(500).json({
      error: "Email service is not configured. Please set environment variables.",
    });
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: name,
          from_email: email,
          subject,
          message,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      console.error("EmailJS service error", response.status, errorText);
      return res.status(502).json({
        error: "Unable to send message at this time. Please try again later.",
      });
    }

    res.status(200).json({ ok: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Email send failure:", error);
    res.status(500).json({
      error: "Server error while sending email. Please try again later.",
    });
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
}

const port = process.env.PORT || 5174;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
