import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function Contact({ theme }) {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 10000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const isDark = theme === "dark";

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_ghg18du",
        "template_6zqhsui",
        e.target,
        "aDyjLYVNKwhlpzstn"
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        () => setStatus("error")
      );
  };

  return (
    <div className="relative w-full min-h-screen p-8 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-7xl mx-auto">
        {/* Left Side */}
        <div className="flex flex-col justify-center text-black dark:text-white">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Let's Work Together
          </h2>
          <p
            className={`text-lg mb-8 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            I'm always open to collaborating on exciting projects,
            freelancing opportunities, or creative ideas, and ready to
            work with you anytime to bring your vision to life.
          </p>
          <p className="text-sm italic mb-6 text-gray-300 dark:text-gray-400">
            I usually reply within 24 hours.
          </p>
          <a
            href="https://wa.me/918501050535?text=Hello%20Yaswanth%2C%20I%20Want%20to%20Discuss%20with%20you!"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full sm:w-auto px-8 py-3 font-semibold rounded-lg border-2 ${
              theme === "dark"
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-white text-white hover:bg-white hover:text-black"
            } transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mb-8`}
          >
            Get in touch
          </a>
        </div>

        {/* Right Side (Form) */}
        <div>
          <form
            onSubmit={sendEmail}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/10 dark:bg-black/20 backdrop-blur-sm p-8 rounded-xl shadow-xl"
          >
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter a valid email address"
                required
                className="w-full px-4 py-3 rounded-md bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
                className="w-full px-4 py-3 rounded-md bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className={`block text-sm font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="e.g. Job Opportunity, Freelance Opportunity : "
                required
                className="w-full px-4 py-3 rounded-md bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className={`block text-sm font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Message
              </label>
              <textarea
                name="message"
                rows="6"
                placeholder="Enter your message"
                required
                className="w-full px-4 py-3 rounded-md bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            <div className="sm:col-span-2 flex flex-col items-end">
              <button
                type="submit"
                className={`w-full px-8 py-3 font-semibold rounded-lg shadow-md transition-all duration-300 hover:scale-105 border
                  ${
                    isDark
                      ? "bg-white text-black hover:bg-black hover:text-white border-white"
                      : "bg-white text-black hover:bg-white hover:text-black border-white"
                  }`}
              >
                Send Message
              </button>

              {status === "sending" && (
                <p className="mt-3 text-blue-400">Sending message...</p>
              )}
              {status === "success" && (
                <p className="mt-3 text-green-400">
                  Message sent successfully ✅
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-red-400">Failed to send message ❌</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
