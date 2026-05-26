import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import html5Logo from "../assets/html5.png";
import css3Logo from "../assets/CSS3.png";
import javascriptLogo from "../assets/Javascript.png";
import reactLogo from "../assets/React.png";
import tailwindLogo from "../assets/Tailwindcss.png";

import nodejsLogo from "../assets/nodejs.png";
import expressjsLogo from "../assets/expressjs.png";
import pythonLogo from "../assets/Python.png";
import restapisLogo from "../assets/restapi.png";

import gitLogo from "../assets/git.png";
import githubLogo from "../assets/Github.png";
import vscodeLogo from "../assets/vscode.png";
import postmanLogo from "../assets/postman.png";
import vercelLogo from "../assets/vercel.png";
import dockerLogo from "../assets/docker.png";

import figmaLogo from "../assets/figma.png";
import adobeXdLogo from "../assets/adobeXd.png";
import photoshopLogo from "../assets/photoshop.png";
import illustratorLogo from "../assets/illustrator.png";
import canvaLogo from "../assets/canva.png";
import framerLogo from "../assets/framer.png";

import {
  PaintBrushIcon,
  IdentificationIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  CameraIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  CodeBracketIcon,
  CommandLineIcon,
  MegaphoneIcon,
  BoltIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const EMAILJS_SERVICE_ID = "service_1do23j9";
const EMAILJS_TEMPLATE_ID = "template_f47cd9i";
const EMAILJS_PUBLIC_KEY = "aDyjLYVNKwhlpzstn";

export default function WhatIDo({ setPage }) {
  const [activeTestimonialPage, setActiveTestimonialPage] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formMessageType, setFormMessageType] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    discussionType: "",
    message: "",
  });

  const services = [
    {
      title: "UI/UX DESIGN",
      Icon: PaintBrushIcon,
      iconColor: "text-yellow-500",
      glow: "rgba(234, 179, 8, 0.28)",
      description:
        "Designing clean, modern, and user-friendly interfaces that make digital products easy to use.",
      points: ["Wireframing", "UI Design", "User Experience"],
    },
    {
      title: "RESPONSIVE DESIGN",
      Icon: DevicePhoneMobileIcon,
      iconColor: "text-green-500",
      glow: "rgba(34, 197, 94, 0.28)",
      description:
        "Creating layouts that work smoothly across mobile, tablet, laptop, and desktop screen sizes.",
      points: ["Mobile First", "Cross-Browser", "Adaptive Layouts"],
    },
    {
      title: "WEB DEVELOPMENT",
      Icon: CodeBracketIcon,
      iconColor: "text-cyan-500",
      glow: "rgba(6, 182, 212, 0.28)",
      description:
        "Building fast, responsive, and scalable websites using modern frontend technologies.",
      points: ["Frontend Development", "Reusable Components", "Clean Code"],
    },
    {
      title: "PERFORMANCE OPTIMIZATION",
      Icon: RocketLaunchIcon,
      iconColor: "text-purple-500",
      glow: "rgba(168, 85, 247, 0.28)",
      description:
        "Improving website speed, loading time, and overall user experience for better results.",
      points: ["Speed Optimization", "SEO Friendly", "Best Practices"],
    },
    {
      title: "BACKEND & APIs",
      Icon: ServerStackIcon,
      iconColor: "text-indigo-500",
      glow: "rgba(99, 102, 241, 0.28)",
      description:
        "Developing secure backend systems and APIs that power modern web applications.",
      points: ["RESTful APIs", "Database Design", "Server Logic"],
    },
    {
      title: "VERSION CONTROL",
      Icon: CommandLineIcon,
      iconColor: "text-gray-700 dark:text-gray-300",
      glow: "rgba(107, 114, 128, 0.28)",
      description:
        "Using Git and GitHub to manage code versions, branches, and collaboration smoothly.",
      points: ["Git & GitHub", "Branch Management", "Team Workflow"],
    },
    {
      title: "BRAND IDENTITY",
      Icon: IdentificationIcon,
      iconColor: "text-red-500",
      glow: "rgba(239, 68, 68, 0.28)",
      description:
        "Creating visual brand elements that make businesses look unique and professional.",
      points: ["Logo Design", "Brand Style", "Visual Identity"],
    },
    {
      title: "ANALYTICS",
      Icon: ChartBarIcon,
      iconColor: "text-blue-500",
      glow: "rgba(59, 130, 246, 0.28)",
      description:
        "Analyzing data and user behavior to support better product and business decisions.",
      points: ["Data Insights", "Reports", "Tracking"],
    },
    {
      title: "SOCIAL MEDIA HANDLING",
      Icon: MegaphoneIcon,
      iconColor: "text-teal-500",
      glow: "rgba(20, 184, 166, 0.28)",
      description:
        "Managing social media content to improve online presence and engagement.",
      points: ["Content Planning", "Post Scheduling", "Engagement"],
    },
    {
      title: "MOBILE APP DESIGN",
      Icon: DevicePhoneMobileIcon,
      iconColor: "text-emerald-500",
      glow: "rgba(16, 185, 129, 0.28)",
      description:
        "Designing smooth mobile app screens with modern layouts and user flows.",
      points: ["App Screens", "User Flows", "Mobile UI"],
    },
    {
      title: "PHOTOGRAPHY",
      Icon: CameraIcon,
      iconColor: "text-pink-500",
      glow: "rgba(236, 72, 153, 0.28)",
      description:
        "Capturing and editing creative visuals for branding and digital projects.",
      points: ["Creative Shoots", "Image Editing", "Visual Content"],
    },
    {
      title: "MODERN UI SYSTEMS",
      Icon: BoltIcon,
      iconColor: "text-orange-500",
      glow: "rgba(249, 115, 22, 0.28)",
      description:
        "Creating reusable design systems with consistent visual patterns.",
      points: ["Design System", "Components", "Consistency"],
    },
  ];

  const combinedTechStack = [
    { name: "HTML5", logo: html5Logo },
    { name: "CSS3", logo: css3Logo },
    { name: "JavaScript", logo: javascriptLogo },
    { name: "React", logo: reactLogo },
    { name: "Tailwind CSS", logo: tailwindLogo },
    { name: "Node.js", logo: nodejsLogo },
    { name: "Express.js", logo: expressjsLogo, invert: true },
    { name: "Python", logo: pythonLogo },
    { name: "REST APIs", logo: restapisLogo },
  ];

  const toolsAndPlatforms = [
    { name: "Git", logo: gitLogo },
    { name: "GitHub", logo: githubLogo, invert: true },
    { name: "VS Code", logo: vscodeLogo },
    { name: "Postman", logo: postmanLogo },
    { name: "Vercel", logo: vercelLogo, invert: true },
    { name: "Docker", logo: dockerLogo },
  ];

  const uiUxTools = [
    { name: "Figma", logo: figmaLogo },
    { name: "Adobe XD", logo: adobeXdLogo },
    { name: "Photoshop", logo: photoshopLogo },
    { name: "Illustrator", logo: illustratorLogo },
    { name: "Canva", logo: canvaLogo },
    { name: "Framer", logo: framerLogo, invert: true },
  ];

  const quickLinks = [
    { label: "About Me", page: "about" },
    { label: "What I Do", page: "what_i_do" },
    { label: "My Works", page: "works" },
    { label: "Blog", page: "blog" },
    { label: "Contact", page: "contact" },
  ];

  const footerServices = [
    "UI/UX Designer",
    "Web Developer",
    "Figma Mobile App Designs",
    "Graphic Designing",
    "Responsive Website Design",
    "Brand Identity Design",
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Founder, TechNova",
      avatar: "https://i.pravatar.cc/100?img=11",
      text: "Amazing work! The design is clean, modern, and exactly what I was looking for.",
    },
    {
      name: "Sarah Williams",
      role: "Marketing Head",
      avatar: "https://i.pravatar.cc/100?img=20",
      text: "Very professional and responsive. Delivered the project on time with excellent quality.",
    },
    {
      name: "David Miller",
      role: "CEO, Startify",
      avatar: "https://i.pravatar.cc/100?img=33",
      text: "Great communication and attention to detail. Will work together again for sure.",
    },
    {
      name: "Emily Carter",
      role: "Product Manager",
      avatar: "https://i.pravatar.cc/100?img=47",
      text: "The interface was simple, sharp, and very easy for our users to understand.",
    },
    {
      name: "Michael Brown",
      role: "Startup Founder",
      avatar: "https://i.pravatar.cc/100?img=52",
      text: "A smooth experience from idea to final delivery. The design quality was impressive.",
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      avatar: "https://i.pravatar.cc/100?img=25",
      text: "Understood the requirement clearly and created a clean digital presence for my brand.",
    },
    {
      name: "Daniel Lee",
      role: "Creative Director",
      avatar: "https://i.pravatar.cc/100?img=15",
      text: "Great visual sense and strong attention to spacing, layout, and details.",
    },
    {
      name: "Nisha Reddy",
      role: "Freelance Client",
      avatar: "https://i.pravatar.cc/100?img=32",
      text: "The website felt modern, responsive, and professional across all devices.",
    },
    {
      name: "Ryan Cooper",
      role: "Agency Partner",
      avatar: "https://i.pravatar.cc/100?img=59",
      text: "Reliable, creative, and easy to communicate with throughout the project.",
    },
  ];

  const testimonialPages = [
    testimonials.slice(0, 3),
    testimonials.slice(3, 6),
    testimonials.slice(6, 9),
  ];

  const goToPreviousTestimonials = () => {
    setActiveTestimonialPage((prev) => Math.max(prev - 1, 0));
  };

  const goToNextTestimonials = () => {
    setActiveTestimonialPage((prev) =>
      Math.min(prev + 1, testimonialPages.length - 1)
    );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showFormMessage = (message, type) => {
    setFormMessage(message);
    setFormMessageType(type);
  };

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9+\-\s()]{7,15}$/;

    if (!formData.fullName.trim()) {
      return "Please enter your full name.";
    }

    if (!emailPattern.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      return "Please enter your phone number.";
    }

    if (!phonePattern.test(formData.phone.trim())) {
      return "Please enter a valid phone number. Use only numbers, spaces, +, -, or brackets.";
    }

    if (!formData.discussionType) {
      return "Please select a discussion type.";
    }

    if (formData.message.trim().length < 5) {
      return "Please write at least 5 characters in the message.";
    }

    return "";
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setFormMessage("");
    setFormMessageType("");

    const validationError = validateForm();

    if (validationError) {
      showFormMessage(validationError, "error");
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      showFormMessage(
        "Email service is not configured properly. Please check EmailJS Service ID, Template ID, and Public Key.",
        "error"
      );
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      to_email: "yashrajb6k@gmail.com",
      from_name: formData.fullName.trim(),
      from_email: formData.email.trim(),
      phone_number: formData.phone.trim(),
      discussion_type: formData.discussionType,
      message: formData.message.trim(),
    };

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      console.log("Email sent successfully:", response);

      showFormMessage(
        "Details submitted successfully. I will get back to you soon.",
        "success"
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        discussionType: "",
        message: "",
      });

      setTimeout(() => {
        setIsFormOpen(false);
        setFormMessage("");
        setFormMessageType("");
      }, 1800);
    } catch (error) {
      console.error("EmailJS sending failed:", error);

      showFormMessage(
        error?.text ||
          "Something went wrong while sending the details. Please check your EmailJS service ID, template ID, public key, and template variables.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white px-4 py-20 text-[#050816] transition-colors duration-300 dark:bg-[#020617] dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex flex-wrap items-end justify-center gap-3 text-center">
            <h2 className="text-5xl font-extrabold text-[#050816] dark:text-white">
              What I <span className="text-yellow-500">Do</span>
            </h2>

            <span className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#050816] dark:text-gray-200">
              (service.s)
            </span>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-[#050816] dark:text-gray-200">
            I design and build responsive digital experiences for businesses,
            job opportunities, and freelance projects.
            <br />I am ready to take the next step forward and available for
            web development, UI/UX design, freelancing roles, and professional
            job opportunities.
          </p>

          <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.Icon;

            return (
              <div
                key={index}
                style={{ "--icon-glow": service.glow }}
                className="
                  group rounded-[30px] bg-white p-8
                  shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                  transition-all duration-500
                  hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  dark:bg-white/5 dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                "
              >
                <div
                  className="
                    mb-6 flex h-20 w-20 items-center justify-center
                    rounded-full bg-gray-50
                    shadow-lg transition-all duration-500
                    group-hover:shadow-[0_0_25px_var(--icon-glow)]
                    dark:bg-white/10
                  "
                >
                  <Icon className={`h-9 w-9 ${service.iconColor}`} />
                </div>

                <h3 className="mb-4 text-xl font-bold text-[#050816] dark:text-white">
                  {service.title}
                </h3>

                <p className="mb-7 leading-relaxed text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.points.map((point, i) => (
                    <div
                      key={i}
                      className="
                        flex items-center gap-1 rounded-full
                        bg-purple-50 px-3 py-2 text-xs font-medium text-[#050816]
                        dark:bg-white/10 dark:text-gray-200
                      "
                    >
                      <CheckCircleIcon className="h-4 w-4 text-purple-500 dark:text-purple-300" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <div className="mt-28">
          <h2 className="mb-16 text-center text-5xl font-extrabold text-[#050816] dark:text-white">
            My Tech <span className="text-yellow-500">Stack</span>{" "}
            <span className="text-[#050816] dark:text-white">&</span>{" "}
            <span className="text-yellow-500">Tools</span>
          </h2>

          {/* Frontend & Backend */}
          <div className="mb-14">
            <h3 className="mb-6 text-center text-2xl font-bold text-[#050816] dark:text-white">
              Frontend & Backend
            </h3>

            <div
              className="
                relative overflow-hidden rounded-[32px] bg-[#050505] px-8 py-10
                shadow-[0_0_45px_rgba(0,0,0,0.10)]
                dark:shadow-[0_0_45px_rgba(255,255,255,0.08)]
                before:absolute before:-left-20 before:top-1/2 before:h-40 before:w-40
                before:-translate-y-1/2 before:rounded-full before:bg-white/10 before:blur-3xl
                after:absolute after:-right-20 after:top-1/2 after:h-40 after:w-40
                after:-translate-y-1/2 after:rounded-full after:bg-white/10 after:blur-3xl
              "
            >
              <div className="absolute inset-x-0 top-0 mx-auto h-[2px] w-52 bg-gradient-to-r from-transparent via-white/90 to-transparent" />

              <div className="relative z-10 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9">
                {combinedTechStack.map((tool) => (
                  <div
                    key={tool.name}
                    className="group flex flex-col items-center"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className={`h-12 w-12 object-contain transition duration-300 group-hover:scale-110 ${
                        tool.invert ? "invert brightness-0" : ""
                      }`}
                    />

                    <span className="mt-3 text-center text-sm text-gray-200">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="mb-14">
            <h3 className="mb-6 text-center text-2xl font-bold text-[#050816] dark:text-white">
              Tools & Platforms
            </h3>

            <div
              className="
                relative overflow-hidden rounded-[32px] bg-[#050505] px-8 py-10
                shadow-[0_0_45px_rgba(0,0,0,0.10)]
                dark:shadow-[0_0_45px_rgba(255,255,255,0.08)]
                before:absolute before:-left-20 before:top-1/2 before:h-40 before:w-40
                before:-translate-y-1/2 before:rounded-full before:bg-white/10 before:blur-3xl
                after:absolute after:-right-20 after:top-1/2 after:h-40 after:w-40
                after:-translate-y-1/2 after:rounded-full after:bg-white/10 after:blur-3xl
              "
            >
              <div className="absolute inset-x-0 top-0 mx-auto h-[2px] w-52 bg-gradient-to-r from-transparent via-white/90 to-transparent" />

              <div className="relative z-10 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {toolsAndPlatforms.map((tool) => (
                  <div
                    key={tool.name}
                    className="group flex flex-col items-center"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className={`h-12 w-12 object-contain transition duration-300 group-hover:scale-110 ${
                        tool.invert ? "invert brightness-0" : ""
                      }`}
                    />

                    <span className="mt-3 text-center text-sm text-gray-200">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* UI UX */}
          <div>
            <h3 className="mb-6 text-center text-2xl font-bold text-[#050816] dark:text-white">
              UI/UX Designer Tools
            </h3>

            <div
              className="
                relative overflow-hidden rounded-[32px] bg-[#050505] px-8 py-10
                shadow-[0_0_45px_rgba(0,0,0,0.10)]
                dark:shadow-[0_0_45px_rgba(255,255,255,0.08)]
                before:absolute before:-left-20 before:top-1/2 before:h-40 before:w-40
                before:-translate-y-1/2 before:rounded-full before:bg-white/10 before:blur-3xl
                after:absolute after:-right-20 after:top-1/2 after:h-40 after:w-40
                after:-translate-y-1/2 after:rounded-full after:bg-white/10 after:blur-3xl
              "
            >
              <div className="absolute inset-x-0 top-0 mx-auto h-[2px] w-52 bg-gradient-to-r from-transparent via-white/90 to-transparent" />

              <div className="relative z-10 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {uiUxTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="group flex flex-col items-center"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className={`h-12 w-12 object-contain transition duration-300 group-hover:scale-110 ${
                        tool.invert ? "invert brightness-0" : ""
                      }`}
                    />

                    <span className="mt-3 text-center text-sm text-gray-200">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-28">
          <div
            className="
              relative overflow-hidden rounded-[32px]
              bg-gradient-to-r from-[#0b1220] via-[#111827] to-[#581c87]
              px-8 py-10 shadow-[0_20px_60px_rgba(88,28,135,0.35)]
              md:px-14
            "
          >
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div>
                <h2 className="text-4xl font-bold text-white">
                  Let's Build Something{" "}
                  <span className="text-yellow-400">Amazing</span> Together
                </h2>

                <p className="mt-4 max-w-xl text-gray-300">
                  Have a project idea, freelance requirement, or job
                  opportunity? I am ready to discuss and take the next step.
                </p>
              </div>

              <button
                onClick={() => setIsFormOpen(true)}
                className="
                  rounded-full bg-gradient-to-r from-purple-500 to-pink-500
                  px-8 py-4 font-semibold text-white
                  transition duration-300 hover:scale-105
                "
              >
                Contact Me →
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-28">
          <h2 className="mb-14 text-center text-5xl font-extrabold text-[#050816] dark:text-white">
            What <span className="text-purple-500">Clients</span> Say
          </h2>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeTestimonialPage * 100}%)`,
              }}
            >
              {testimonialPages.map((page, pageIndex) => (
                <div
                  key={pageIndex}
                  className="grid min-w-full grid-cols-1 gap-8 md:grid-cols-3"
                >
                  {page.map((item, index) => (
                    <div
                      key={index}
                      className="
                        rounded-[28px] bg-white p-8
                        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                        dark:bg-white/5 dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                      "
                    >
                      <div className="mb-5 flex text-yellow-400">
                        ★ ★ ★ ★ ★
                      </div>

                      <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                        "{item.text}"
                      </p>

                      <div className="mt-8 flex items-center gap-4">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />

                        <div>
                          <h4 className="font-bold text-[#050816] dark:text-white">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            {activeTestimonialPage > 0 && (
              <button
                onClick={goToPreviousTestimonials}
                className="text-[#050816] transition hover:-translate-x-1 dark:text-white"
                aria-label="Previous testimonials"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
            )}

            <div className="flex items-center gap-2">
              {testimonialPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonialPage(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    activeTestimonialPage === index
                      ? "w-8 bg-purple-500"
                      : "w-3 bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial page ${index + 1}`}
                />
              ))}
            </div>

            {activeTestimonialPage < testimonialPages.length - 1 && (
              <button
                onClick={goToNextTestimonials}
                className="text-[#050816] transition hover:translate-x-1 dark:text-white"
                aria-label="Next testimonials"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-28 overflow-hidden rounded-[32px] bg-[#050816] px-8 py-14 text-white shadow-2xl">
          <div className="grid gap-14 md:grid-cols-4">
            <div>
              <h2 className="text-3xl font-extrabold">Y9-G-K7</h2>

              <p className="mt-5 leading-relaxed text-gray-400">
                Crafting digital experiences that inspire, engage, and deliver
                results.
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-xl font-semibold">Quick Links</h3>

              <ul className="space-y-3 text-gray-400">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => {
                        setPage(link.page);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="transition duration-300 hover:text-white"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-xl font-semibold">Services</h3>

              <ul className="space-y-3 text-gray-400">
                {footerServices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-xl font-semibold">Get In Touch</h3>

              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="mailto:yashrajb6k@gmail.com"
                    className="transition duration-300 hover:text-white"
                  >
                    yashrajb6k@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918501050535"
                    className="transition duration-300 hover:text-white"
                  >
                    +91 8501050535
                  </a>
                </li>
                <li>Visakhapatnam, Andhra Pradesh</li>
              </ul>

              <button
                onClick={() => setIsFormOpen(true)}
                className="
                  mt-6 rounded-full border border-purple-500
                  px-6 py-3 text-sm font-medium
                  transition duration-300 hover:bg-purple-600
                "
              >
                Let's Talk →
              </button>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>© 2025 Y9-G-K7. All rights reserved.</p>
            <p>Designed & Built with ❤️</p>
          </div>
        </footer>
      </div>

      {/* Contact Form Popup */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-[28px] bg-white p-7 shadow-2xl dark:bg-[#050816]">
            <button
              onClick={() => {
                setIsFormOpen(false);
                setFormMessage("");
                setFormMessageType("");
              }}
              className="absolute right-5 top-5 text-gray-700 transition hover:scale-110 dark:text-white"
              aria-label="Close contact form"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>

            <h2 className="mb-2 text-3xl font-bold text-[#050816] dark:text-white">
              Let's Talk
            </h2>

            <p className="mb-7 text-sm text-gray-600 dark:text-gray-300">
              Share your details, job opportunity, freelance requirement, or
              business discussion. I will receive the details through email.
            </p>

            {formMessage && (
              <div
                className={`mb-5 rounded-xl px-4 py-3 text-sm font-medium ${
                  formMessageType === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {formMessage}
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Full Name
                  </label>

                  <input
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-purple-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Email
                  </label>

                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-purple-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Phone Number
                  </label>

                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-purple-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Discussion Type
                  </label>

                  <select
                    required
                    name="discussionType"
                    value={formData.discussionType}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-purple-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  >
                    <option value="">Select one</option>
                    <option value="Need to hire me">Need to hire me</option>
                    <option value="Offering me a job">Offering me a job</option>
                    <option value="Freelancing project">
                      Freelancing project
                    </option>
                    <option value="Business discussion">
                      Business discussion
                    </option>
                    <option value="Collaboration">Collaboration</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
                  What do you want to discuss?
                </label>

                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Tell me about your business, project, job opportunity, or freelancing requirement..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-purple-500 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500
                  px-6 py-3 font-semibold text-white
                  transition duration-300 hover:scale-[1.01]
                  disabled:cursor-not-allowed disabled:opacity-70
                "
              >
                {isSubmitting ? "Submitting..." : "Submit Details"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}