import React, { useEffect, useMemo, useState } from "react";

import {
  ArrowTopRightOnSquareIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  EyeIcon,
  LinkIcon,
  PaintBrushIcon,
  PhotoIcon,
  PresentationChartLineIcon,
  Squares2X2Icon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const categories = [
  {
    id: "all",
    label: "All Projects",
    Icon: Squares2X2Icon,
  },
  {
    id: "saas",
    label: "SaaS UI Concepts",
    Icon: PresentationChartLineIcon,
  },
  {
    id: "b2b",
    label: "B2B Dashboard UI",
    Icon: BriefcaseIcon,
  },
  {
    id: "uiux",
    label: "UI/UX Figma",
    Icon: DevicePhoneMobileIcon,
  },
  {
    id: "web",
    label: "Web Development",
    Icon: CodeBracketIcon,
  },
  {
    id: "graphic",
    label: "Graphic Design",
    Icon: PaintBrushIcon,
  },
];

const projects = [
  {
    slug: "cloudflow-saas-dashboard",
    title: "CloudFlow SaaS Dashboard",
    category: "saas",
    type: "SaaS UI Concept",
    description:
      "A clean SaaS dashboard UI concept focused on analytics, subscriptions, user activity, and business growth screens.",
    tags: ["UI/UX", "Dashboard", "Analytics", "React"],
    Icon: ChartBarIcon,
    featured: true,
    liveUrl: "https://yaswanth-portfoy.vercel.app/#cloudflow-saas-dashboard",
    caseStudy: {
      role: "UI/UX Designer + Frontend Developer",
      tools: ["Figma", "React", "Tailwind CSS"],
      goal:
        "To design a clear dashboard experience where users can quickly understand product metrics, revenue, and user performance.",
      focus: [
        "Simple dashboard layout with strong visual hierarchy",
        "Clean cards for business metrics and reports",
        "Minimal interface suitable for SaaS product design",
      ],
      outcome:
        "Created a professional SaaS-style product interface concept that can be converted into a working analytics dashboard.",
    },
  },
  {
    slug: "teamops-b2b-crm-platform",
    title: "TeamOps B2B CRM Platform",
    category: "b2b",
    type: "B2B Dashboard UI",
    description:
      "A B2B CRM interface concept for managing clients, leads, sales pipelines, and team activities in a structured way.",
    tags: ["UI/UX", "CRM", "B2B", "Figma"],
    Icon: UserGroupIcon,
    featured: true,
    liveUrl: "https://yaswanth-portfoy.vercel.app/#teamops-b2b-crm-platform",
    caseStudy: {
      role: "UI/UX Designer",
      tools: ["Figma", "Wireframes", "Design System"],
      goal:
        "To create a business-friendly CRM dashboard that helps teams track leads, deals, clients, and follow-ups easily.",
      focus: [
        "Lead and client management screens",
        "Clean sales pipeline structure",
        "Readable table, card, and filter-based layouts",
      ],
      outcome:
        "Designed a B2B-style CRM product interface that shows understanding of enterprise dashboards and workflow-based UI design.",
    },
  },
  {
    slug: "fintrack-admin-console",
    title: "FinTrack Admin Console",
    category: "saas",
    type: "SaaS Admin UI",
    description:
      "A finance dashboard concept with billing, invoices, subscriptions, reports, and admin-level management screens.",
    tags: ["Finance UI", "Admin Panel", "Reports", "Dashboard"],
    Icon: PresentationChartLineIcon,
    liveUrl: "https://yaswanth-portfoy.vercel.app/#fintrack-admin-console",
    caseStudy: {
      role: "UI/UX Designer",
      tools: ["Figma", "React", "Tailwind CSS"],
      goal:
        "To design an admin console that makes finance data, billing activity, and reports easy to read and manage.",
      focus: [
        "Finance summary cards",
        "Invoice and billing management layout",
        "Report-focused dashboard structure",
      ],
      outcome:
        "Created a clean admin dashboard concept suitable for fintech, SaaS, and internal business tools.",
    },
  },
  {
    slug: "procurehub-vendor-portal",
    title: "ProcureHub Vendor Portal",
    category: "b2b",
    type: "Business Portal UI",
    description:
      "A vendor portal interface for managing quotations, purchase requests, approvals, and supplier communication.",
    tags: ["Vendor Portal", "B2B", "UX Flow", "Enterprise"],
    Icon: BriefcaseIcon,
    liveUrl: "https://yaswanth-portfoy.vercel.app/#procurehub-vendor-portal",
    caseStudy: {
      role: "UI/UX Designer",
      tools: ["Figma", "User Flow", "Wireframing"],
      goal:
        "To create a structured business portal where vendors and internal teams can manage purchase-related workflows.",
      focus: [
        "Approval flow design",
        "Quotation and request management",
        "Enterprise-friendly navigation and UI hierarchy",
      ],
      outcome:
        "Designed a B2B portal concept that shows workflow thinking and business-process-based interface design.",
    },
  },
  {
    slug: "banking-app-figma-design",
    title: "Banking App Figma Design",
    category: "uiux",
    type: "Mobile App UI",
    description:
      "A mobile banking app UI design with wallet screens, transactions, cards, analytics, and clean user flows.",
    tags: ["Figma", "Mobile UI", "Fintech", "Prototype"],
    Icon: DevicePhoneMobileIcon,
    liveUrl: "https://yaswanth-portfoy.vercel.app/#banking-app-figma-design",
    caseStudy: {
      role: "UI/UX Designer",
      tools: ["Figma", "Prototype", "Mobile UI"],
      goal:
        "To design a mobile-first banking experience that feels simple, secure, and easy to understand.",
      focus: [
        "Wallet and balance overview",
        "Transaction history screens",
        "Card management and quick actions",
      ],
      outcome:
        "Created a polished mobile banking UI concept with clear navigation and modern fintech-style visual design.",
    },
  },
  {
    slug: "food-delivery-app-ui-kit",
    title: "Food Delivery App UI Kit",
    category: "uiux",
    type: "UI/UX Design",
    description:
      "A food ordering app UI kit covering onboarding, restaurant listing, food details, cart, checkout, and order tracking.",
    tags: ["Figma", "UI Kit", "App Design", "UX Flow"],
    Icon: PaintBrushIcon,
    liveUrl: "https://yaswanth-portfoy.vercel.app/#food-delivery-app-ui-kit",
    caseStudy: {
      role: "UI/UX Designer",
      tools: ["Figma", "Components", "Prototype"],
      goal:
        "To create a complete mobile app design system for a simple and smooth food ordering experience.",
      focus: [
        "Restaurant and menu listing",
        "Cart and checkout flow",
        "Order tracking and delivery status screens",
      ],
      outcome:
        "Built a complete UI kit concept that can be used as a base for a food delivery mobile application.",
    },
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    category: "web",
    type: "Web Development",
    description:
      "A responsive portfolio website with sections for profile, services, works, blog, contact form, and theme support.",
    tags: ["React", "Tailwind", "Responsive", "Portfolio"],
    Icon: CodeBracketIcon,
    liveUrl: "https://yaswanth-portfoy.vercel.app/#works",
    caseStudy: {
      role: "Frontend Developer + UI Designer",
      tools: ["React", "Tailwind CSS", "Vercel"],
      goal:
        "To build a clean personal portfolio website that presents skills, services, projects, and contact details professionally.",
      focus: [
        "Responsive page structure",
        "Light and dark theme support",
        "Reusable sections and clean UI components",
      ],
      outcome:
        "Developed a personal portfolio website that works as a digital profile for job, freelance, and project opportunities.",
    },
  },
  {
    slug: "ecommerce-landing-page",
    title: "E-Commerce Landing Page",
    category: "web",
    type: "Frontend Website",
    description:
      "A product-focused landing page concept with hero section, product highlights, pricing cards, reviews, and CTA sections.",
    tags: ["Landing Page", "React", "Tailwind", "E-Commerce"],
    Icon: CodeBracketIcon,
    liveUrl: "https://yaswanth-portfoy.vercel.app/#ecommerce-landing-page",
    caseStudy: {
      role: "Frontend Developer",
      tools: ["React", "Tailwind CSS", "Responsive Design"],
      goal:
        "To create a landing page layout that can promote products clearly and guide users toward conversion.",
      focus: [
        "Hero and CTA layout",
        "Product highlight sections",
        "Responsive pricing and review cards",
      ],
      outcome:
        "Created a conversion-focused landing page concept suitable for product-based websites and online stores.",
    },
  },
  {
    slug: "brand-identity-design",
    title: "Brand Identity Design",
    category: "graphic",
    type: "Graphic Design",
    description:
      "A brand identity concept including logo direction, typography, color palette, social creatives, and visual style guide.",
    tags: ["Branding", "Logo", "Visual Identity", "Design"],
    Icon: PaintBrushIcon,
    liveUrl: "https://yaswanth-portfoy.vercel.app/#brand-identity-design",
    caseStudy: {
      role: "Graphic Designer",
      tools: ["Photoshop", "Illustrator", "Canva"],
      goal:
        "To create a simple and consistent visual identity that helps a brand look clean, recognizable, and professional.",
      focus: [
        "Logo and brand direction",
        "Typography and color system",
        "Social media and digital brand usage",
      ],
      outcome:
        "Designed a brand identity concept that can be extended across websites, social media, and marketing assets.",
    },
  },
  {
    slug: "social-media-creative-pack",
    title: "Social Media Creative Pack",
    category: "graphic",
    type: "Creative Design",
    description:
      "A social media creative pack with promotional posts, carousel layouts, campaign creatives, and branded templates.",
    tags: ["Social Media", "Canva", "Photoshop", "Creatives"],
    Icon: PhotoIcon,
    liveUrl: "https://yaswanth-portfoy.vercel.app/#social-media-creative-pack",
    caseStudy: {
      role: "Graphic Designer",
      tools: ["Canva", "Photoshop", "Illustrator"],
      goal:
        "To design reusable social media creatives that help promote services, campaigns, and brand communication.",
      focus: [
        "Post and carousel design",
        "Consistent brand layout",
        "Marketing-friendly visual templates",
      ],
      outcome:
        "Created a reusable creative pack suitable for social media campaigns, branding, and promotional content.",
    },
  },
];

function CountUpNumber({ end = 10, suffix = "+" }) {
  const [value, setValue] = useState(1);

  useEffect(() => {
    let current = 1;
    setValue(1);

    const timer = setInterval(() => {
      current += 1;
      setValue(current);

      if (current >= end) {
        clearInterval(timer);
      }
    }, 120);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {value}
      {value >= end ? suffix : ""}
    </>
  );
}

function ProjectPreview({ project, isDark, large = false }) {
  const Icon = project.Icon;

  const previewBg = isDark
    ? "bg-[#020617] border-white/10"
    : "bg-[#f8fafc] border-gray-200";

  const mutedBlock = isDark ? "bg-white/10" : "bg-gray-200";
  const strongBlock = isDark ? "bg-white/20" : "bg-gray-300";

  return (
    <div className={`rounded-3xl border p-5 ${previewBg}`}>
      <div className="mb-6 flex items-center justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
            isDark ? "bg-white text-[#020617]" : "bg-[#050816] text-white"
          }`}
        >
          <Icon className="h-6 w-6" />
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${
            isDark
              ? "border-white/10 text-gray-300"
              : "border-gray-200 text-gray-600"
          }`}
        >
          {project.type}
        </span>
      </div>

      <div
        className={`rounded-2xl border p-4 ${
          isDark ? "border-white/10 bg-white/5" : "border-gray-200 bg-white"
        }`}
      >
        <div className="mb-4 flex items-center gap-2">
          <div className={`h-2.5 w-2.5 rounded-full ${strongBlock}`} />
          <div className={`h-2.5 w-2.5 rounded-full ${mutedBlock}`} />
          <div className={`h-2.5 w-2.5 rounded-full ${mutedBlock}`} />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-1 space-y-2">
            <div className={`h-3 rounded-full ${strongBlock}`} />
            <div className={`h-3 w-3/4 rounded-full ${mutedBlock}`} />
            <div className={`h-3 w-1/2 rounded-full ${mutedBlock}`} />
            <div
              className={`${
                large ? "h-24" : "h-16"
              } mt-4 rounded-2xl ${mutedBlock}`}
            />
          </div>

          <div className="col-span-2 space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div
                className={`${
                  large ? "h-16" : "h-12"
                } rounded-2xl ${mutedBlock}`}
              />
              <div
                className={`${
                  large ? "h-16" : "h-12"
                } rounded-2xl ${strongBlock}`}
              />
              <div
                className={`${
                  large ? "h-16" : "h-12"
                } rounded-2xl ${mutedBlock}`}
              />
            </div>

            <div
              className={`${
                large ? "h-28" : "h-20"
              } rounded-2xl p-3 ${mutedBlock}`}
            >
              <div className="flex h-full items-end gap-2">
                <div className={`h-6 flex-1 rounded-t-lg ${strongBlock}`} />
                <div className={`h-10 flex-1 rounded-t-lg ${strongBlock}`} />
                <div className={`h-16 flex-1 rounded-t-lg ${strongBlock}`} />
                <div className={`h-9 flex-1 rounded-t-lg ${strongBlock}`} />
                <div className={`h-20 flex-1 rounded-t-lg ${strongBlock}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudyModal({ project, isDark, onClose }) {
  if (!project) return null;

  const headingText = isDark ? "text-white" : "text-[#050816]";
  const paragraphText = isDark ? "text-gray-300" : "text-gray-600";
  const modalBg = isDark
    ? "bg-[#020617] text-white"
    : "bg-white text-[#050816]";
  const borderColor = isDark ? "border-white/10" : "border-gray-200";
  const cardBg = isDark ? "bg-white/5" : "bg-gray-50";

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-black/60 px-4 py-6 backdrop-blur-md sm:py-8">
      <style>
        {`
          .hide-popup-scrollbar {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .hide-popup-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <div
        className={`
          hide-popup-scrollbar relative max-h-[92vh] w-full max-w-6xl
          overflow-y-auto overscroll-contain rounded-[28px] border p-5 shadow-2xl
          sm:rounded-[32px] sm:p-6 md:p-8
          ${modalBg} ${borderColor}
        `}
      >
        <button
          onClick={onClose}
          className={`
            sticky left-full top-0 z-20 mb-4 flex h-10 w-10 items-center justify-center
            rounded-full border backdrop-blur transition hover:scale-105
            ${isDark ? "bg-[#020617]/90" : "bg-white/90"} ${borderColor}
          `}
          aria-label="Close case study"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ProjectPreview project={project} isDark={isDark} large />

          <div className="pr-0 lg:pr-4">
            <div
              className={`mb-4 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${borderColor}`}
            >
              {project.type}
            </div>

            <h2
              className={`text-3xl font-extrabold leading-tight sm:text-4xl ${headingText}`}
            >
              {project.title}
            </h2>

            <p className={`mt-4 leading-relaxed ${paragraphText}`}>
              {project.description}
            </p>

            <div
              className={`mt-6 rounded-3xl border p-5 ${cardBg} ${borderColor}`}
            >
              <h3 className={`text-lg font-bold ${headingText}`}>
                Case Study Overview
              </h3>

              <p className={`mt-3 leading-relaxed ${paragraphText}`}>
                {project.caseStudy.goal}
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div
                className={`rounded-3xl border p-5 ${cardBg} ${borderColor}`}
              >
                <h4 className={`font-bold ${headingText}`}>My Role</h4>
                <p className={`mt-2 text-sm ${paragraphText}`}>
                  {project.caseStudy.role}
                </p>
              </div>

              <div
                className={`rounded-3xl border p-5 ${cardBg} ${borderColor}`}
              >
                <h4 className={`font-bold ${headingText}`}>Tools Used</h4>
                <p className={`mt-2 text-sm ${paragraphText}`}>
                  {project.caseStudy.tools.join(", ")}
                </p>
              </div>
            </div>

            <div
              className={`mt-6 rounded-3xl border p-5 ${cardBg} ${borderColor}`}
            >
              <h4 className={`font-bold ${headingText}`}>Design Focus</h4>

              <ul className={`mt-3 space-y-2 text-sm ${paragraphText}`}>
                {project.caseStudy.focus.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`mt-6 rounded-3xl border p-5 ${cardBg} ${borderColor}`}
            >
              <h4 className={`font-bold ${headingText}`}>Outcome</h4>
              <p className={`mt-2 text-sm leading-relaxed ${paragraphText}`}>
                {project.caseStudy.outcome}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition hover:scale-105 ${
                  isDark
                    ? "bg-white text-[#020617]"
                    : "bg-[#050816] text-white"
                }`}
              >
                Open Live Link
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>

              <button
                onClick={onClose}
                className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 font-semibold transition hover:scale-105 ${borderColor}`}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Works({ theme = "light", setPage }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const isDark = theme === "dark";
  const githubUrl = "https://github.com/yash-b6k";

  const pageBg = isDark ? "bg-[#020617] text-white" : "bg-white text-[#050816]";
  const cardBg = isDark
    ? "bg-[#0f172a] border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
    : "bg-white border-gray-200 shadow-[0_14px_45px_rgba(15,23,42,0.06)]";
  const subtleCardBg = isDark
    ? "bg-[#0f172a] border-white/10"
    : "bg-[#f8fafc] border-gray-200";
  const headingText = isDark ? "text-white" : "text-[#050816]";
  const paragraphText = isDark ? "text-gray-300" : "text-gray-600";
  const chipBg = isDark
    ? "bg-white/10 text-gray-200 border-white/10"
    : "bg-gray-100 text-gray-700 border-gray-200";
  const primaryBtn = isDark
    ? "bg-white text-[#020617] hover:bg-gray-200"
    : "bg-[#050816] text-white hover:bg-black";
  const outlineBtn = isDark
    ? "border-white/20 text-white hover:bg-white hover:text-[#020617]"
    : "border-gray-300 text-[#050816] hover:bg-[#050816] hover:text-white";

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const featuredProjects = projects.filter((project) => project.featured);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleHireClick = () => {
    if (setPage) {
      setPage("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      className={`w-full px-4 py-20 transition-colors duration-300 sm:px-6 lg:px-8 ${pageBg}`}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`relative overflow-hidden rounded-[36px] border px-6 py-16 md:px-12 lg:px-16 ${cardBg}`}
        >
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div
                className={`mb-5 inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium ${
                  isDark
                    ? "border-white/10 bg-white/5 text-gray-300"
                    : "border-gray-200 bg-gray-50 text-gray-700"
                }`}
              >
                Selected Portfolio Works
              </div>

              <h1
                className={`text-5xl font-extrabold leading-tight md:text-6xl ${headingText}`}
              >
                My Works & Projects
              </h1>

              <p
                className={`mt-6 max-w-2xl text-lg leading-relaxed ${paragraphText}`}
              >
                A minimal collection of SaaS products, B2B platforms, UI/UX
                Figma designs, responsive websites, and graphic design projects
                created with clean structure, usability, and business goals in
                mind.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("project-categories")}
                  className={`rounded-full px-7 py-3 font-semibold transition duration-300 hover:scale-105 ${primaryBtn}`}
                >
                  View Project Categories
                </button>

                <button
                  onClick={handleHireClick}
                  className={`rounded-full border px-7 py-3 font-semibold transition duration-300 hover:scale-105 ${outlineBtn}`}
                >
                  Hire Me / Discuss Work
                </button>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectPreview
                  key={project.title}
                  project={project}
                  isDark={isDark}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          <div className={`rounded-3xl border p-6 text-center ${subtleCardBg}`}>
            <h3 className={`text-4xl font-extrabold ${headingText}`}>
              <CountUpNumber end={10} suffix="+" />
            </h3>
            <p className={`mt-2 text-sm font-medium ${paragraphText}`}>
              Completed Project Concepts
            </p>
          </div>

          {[
            ["5", "Work Categories"],
            ["UI", "Clean Interfaces"],
            ["UX", "User-Focused Flow"],
          ].map(([value, label]) => (
            <div
              key={label}
              className={`rounded-3xl border p-6 text-center ${subtleCardBg}`}
            >
              <h3 className={`text-4xl font-extrabold ${headingText}`}>
                {value}
              </h3>
              <p className={`mt-2 text-sm font-medium ${paragraphText}`}>
                {label}
              </p>
            </div>
          ))}
        </div>

        <div id="project-categories" className="mt-20 scroll-mt-28 text-center">
          <h2 className={`text-4xl font-extrabold md:text-5xl ${headingText}`}>
            Project Categories
          </h2>

          <p className={`mx-auto mt-4 max-w-2xl ${paragraphText}`}>
            These categories connect my UI/UX design, frontend development, and
            graphic design work into practical portfolio project types.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.Icon;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1 ${
                    isActive
                      ? isDark
                        ? "border-white bg-white text-[#020617]"
                        : "border-[#050816] bg-[#050816] text-white"
                      : isDark
                      ? "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
                      : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              id={project.slug}
              key={project.title}
              className={`group overflow-hidden rounded-[32px] border p-5 transition-all duration-500 hover:-translate-y-2 ${cardBg}`}
            >
              <ProjectPreview project={project} isDark={isDark} />

              <div className="p-3 pt-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-bold ${chipBg}`}
                  >
                    {project.type}
                  </span>

                  <ArrowTopRightOnSquareIcon
                    className={`h-5 w-5 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                </div>

                <h3 className={`text-2xl font-extrabold ${headingText}`}>
                  {project.title}
                </h3>

                <p className={`mt-3 leading-relaxed ${paragraphText}`}>
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-2 text-xs font-semibold ${chipBg}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`flex items-center gap-2 font-bold transition duration-300 hover:gap-3 ${
                      isDark ? "text-white" : "text-[#050816]"
                    }`}
                  >
                    <EyeIcon className="h-4 w-4" />
                    View Case Study
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 font-bold transition duration-300 hover:gap-3 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <LinkIcon className="h-4 w-4" />
                    Live Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-24 rounded-[36px] border p-8 md:p-12 ${cardBg}`}>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div
                className={`mb-4 inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold ${
                  isDark
                    ? "border-white/10 bg-white/5 text-gray-300"
                    : "border-gray-200 bg-gray-50 text-gray-700"
                }`}
              >
                My Design Process
              </div>

              <h2
                className={`text-4xl font-extrabold leading-tight md:text-5xl ${headingText}`}
              >
                How I Build Better Digital Experiences
              </h2>

              <p className={`mt-5 leading-relaxed ${paragraphText}`}>
                I focus on understanding the project goal first, then create
                user flows, clean visuals, responsive layouts, and final
                interfaces that feel simple and useful.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                [
                  "01",
                  "Understand Requirement",
                  "Study the goal, target users, content, features, and expected result.",
                ],
                [
                  "02",
                  "Create UI/UX Structure",
                  "Prepare layout, user flow, wireframe, hierarchy, and important sections.",
                ],
                [
                  "03",
                  "Design & Develop",
                  "Create clean screens, responsive layouts, reusable components, and visual polish.",
                ],
                [
                  "04",
                  "Improve & Deliver",
                  "Improve spacing, readability, responsiveness, performance, and final experience.",
                ],
              ].map(([step, title, text]) => (
                <div
                  key={step}
                  className={`rounded-3xl border p-6 ${subtleCardBg}`}
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold ${
                      isDark
                        ? "bg-white text-[#020617]"
                        : "bg-[#050816] text-white"
                    }`}
                  >
                    {step}
                  </div>

                  <h3 className={`text-xl font-bold ${headingText}`}>
                    {title}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-relaxed ${paragraphText}`}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2
            className={`mx-auto max-w-4xl text-3xl font-extrabold leading-tight md:text-4xl ${headingText}`}
          >
            I am currently building new projects and learning backend
            development to expand my skill set beyond frontend.
          </h2>

          <p className={`mx-auto mt-8 max-w-3xl text-xl ${paragraphText}`}>
            Visit my github to see some of the latest projects{" "}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold underline underline-offset-4 ${
                isDark ? "text-white" : "text-[#050816]"
              }`}
            >
              Github
            </a>
          </p>
        </div>

        <footer
          className={`mt-24 flex flex-col gap-4 border-t py-8 text-sm md:flex-row md:items-center md:justify-between ${
            isDark
              ? "border-white/10 text-gray-400"
              : "border-gray-200 text-gray-500"
          }`}
        >
          <p>© 2025 Y9-G-K7. All rights reserved.</p>
          <p>
            Designed & Built with{" "}
            <span className={isDark ? "text-[#ff0000]" : "text-[#ff0000]"}>
              ♥
            </span>
          </p>
        </footer>
      </div>

      <CaseStudyModal
        project={selectedProject}
        isDark={isDark}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}