import React, { useMemo, useState } from "react";

import {
  ArrowTopRightOnSquareIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  PhotoIcon,
  PresentationChartLineIcon,
  SparklesIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const categories = [
  {
    id: "all",
    label: "All Projects",
    Icon: Squares2X2Icon,
  },
  {
    id: "saas",
    label: "SaaS Projects",
    Icon: PresentationChartLineIcon,
  },
  {
    id: "b2b",
    label: "B2B Projects",
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
    label: "Graphic Designing",
    Icon: PaintBrushIcon,
  },
];

const projects = [
  {
    title: "CloudFlow SaaS Dashboard",
    category: "saas",
    type: "SaaS Product",
    description:
      "A modern SaaS analytics dashboard for tracking revenue, users, subscriptions, and growth metrics.",
    tags: ["SaaS", "Dashboard", "Analytics", "React"],
    accent: "from-violet-500 via-purple-500 to-fuchsia-500",
    Icon: ChartBarIcon,
    featured: true,
  },
  {
    title: "TeamOps B2B CRM Platform",
    category: "b2b",
    type: "B2B Platform",
    description:
      "A B2B CRM interface for managing leads, client pipelines, deal stages, and sales team performance.",
    tags: ["B2B", "CRM", "Sales", "UI Design"],
    accent: "from-blue-500 via-cyan-500 to-teal-400",
    Icon: UserGroupIcon,
    featured: true,
  },
  {
    title: "FinTrack Admin Console",
    category: "saas",
    type: "SaaS Admin",
    description:
      "A finance management SaaS console with subscription tracking, invoices, billing, and reports.",
    tags: ["Finance", "Admin Panel", "SaaS", "Reports"],
    accent: "from-emerald-500 via-green-500 to-lime-400",
    Icon: PresentationChartLineIcon,
  },
  {
    title: "ProcureHub Vendor Portal",
    category: "b2b",
    type: "B2B Portal",
    description:
      "A vendor management portal for enterprise teams to handle quotations, approvals, and purchase requests.",
    tags: ["B2B", "Vendor Portal", "Enterprise", "UX"],
    accent: "from-indigo-500 via-blue-500 to-sky-400",
    Icon: BriefcaseIcon,
  },
  {
    title: "Banking App Figma Design",
    category: "uiux",
    type: "Mobile App UI",
    description:
      "A clean Figma mobile banking app design with wallet, transactions, cards, analytics, and user flows.",
    tags: ["Figma", "Mobile App", "Fintech", "Prototype"],
    accent: "from-orange-500 via-amber-500 to-yellow-400",
    Icon: DevicePhoneMobileIcon,
  },
  {
    title: "Food Delivery App UI Kit",
    category: "uiux",
    type: "UI/UX Design",
    description:
      "A complete food ordering app UI kit with onboarding, restaurant listing, cart, checkout, and tracking screens.",
    tags: ["Figma", "UI Kit", "App Design", "UX Flow"],
    accent: "from-rose-500 via-pink-500 to-red-400",
    Icon: PaintBrushIcon,
  },
  {
    title: "Portfolio Website",
    category: "web",
    type: "Frontend Website",
    description:
      "A responsive personal portfolio website with smooth sections, dark mode, project showcase, and contact form.",
    tags: ["React", "Tailwind", "Responsive", "Portfolio"],
    accent: "from-slate-700 via-gray-800 to-black",
    Icon: CodeBracketIcon,
  },
  {
    title: "E-Commerce Landing Page",
    category: "web",
    type: "Web Development",
    description:
      "A conversion-focused e-commerce landing page with product highlights, pricing cards, reviews, and CTA sections.",
    tags: ["Landing Page", "React", "Tailwind", "E-Commerce"],
    accent: "from-cyan-500 via-blue-500 to-indigo-500",
    Icon: CodeBracketIcon,
  },
  {
    title: "Brand Identity Design",
    category: "graphic",
    type: "Graphic Design",
    description:
      "A full brand identity system including logo, typography, color palette, social banners, and visual style guide.",
    tags: ["Branding", "Logo", "Visual Identity", "Design"],
    accent: "from-yellow-500 via-orange-500 to-red-500",
    Icon: SparklesIcon,
  },
  {
    title: "Social Media Creative Pack",
    category: "graphic",
    type: "Creative Design",
    description:
      "A professional social media design pack with promotional posts, carousel designs, and campaign creatives.",
    tags: ["Social Media", "Canva", "Photoshop", "Creatives"],
    accent: "from-pink-500 via-purple-500 to-indigo-500",
    Icon: PhotoIcon,
  },
];

function ProjectMockup({ project }) {
  const Icon = project.Icon;

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.accent} p-5 text-white shadow-xl`}
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
      <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-black/20 blur-2xl" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
            <Icon className="h-6 w-6 text-white" />
          </div>

          <div className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">
            {project.type}
          </div>
        </div>

        <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-md">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-300" />
            <div className="h-3 w-3 rounded-full bg-yellow-300" />
            <div className="h-3 w-3 rounded-full bg-green-300" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1 space-y-2">
              <div className="h-3 rounded-full bg-white/70" />
              <div className="h-3 w-3/4 rounded-full bg-white/40" />
              <div className="h-3 w-1/2 rounded-full bg-white/40" />
              <div className="mt-4 h-16 rounded-2xl bg-white/20" />
            </div>

            <div className="col-span-2 space-y-3">
              <div className="grid grid-cols-3 gap-2">
                <div className="h-12 rounded-2xl bg-white/25" />
                <div className="h-12 rounded-2xl bg-white/20" />
                <div className="h-12 rounded-2xl bg-white/25" />
              </div>

              <div className="h-20 rounded-2xl bg-white/20 p-3">
                <div className="flex h-full items-end gap-2">
                  <div className="h-6 flex-1 rounded-t-lg bg-white/40" />
                  <div className="h-10 flex-1 rounded-t-lg bg-white/60" />
                  <div className="h-14 flex-1 rounded-t-lg bg-white/50" />
                  <div className="h-8 flex-1 rounded-t-lg bg-white/40" />
                  <div className="h-16 flex-1 rounded-t-lg bg-white/70" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between text-sm">
          <span className="font-semibold">{project.title}</span>
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

export default function Works({ setPage }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="w-full bg-transparent px-4 py-20 text-gray-900 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HERO SECTION */}
        <div className="relative overflow-hidden rounded-[36px] bg-white px-6 py-16 shadow-[0_20px_70px_rgba(15,23,42,0.08)] dark:bg-[#050816] md:px-12 lg:px-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-50 px-4 py-2 text-sm font-semibold text-yellow-700 dark:border-yellow-400/20 dark:bg-yellow-400/10 dark:text-yellow-300">
                <SparklesIcon className="h-4 w-4" />
                Selected Portfolio Works
              </div>

              <h1 className="text-5xl font-extrabold leading-tight text-gray-950 dark:text-white md:text-6xl">
                My <span className="text-yellow-500">Works</span> &{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                A curated collection of SaaS products, B2B platforms, UI/UX
                Figma designs, responsive websites, and graphic design projects
                created with clean design, strong usability, and business goals
                in mind.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setActiveCategory("saas")}
                  className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-500/25 transition duration-300 hover:scale-105"
                >
                  Explore Projects
                </button>

                <button
                  onClick={() => {
                    if (setPage) {
                      setPage("contact");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="rounded-full border border-gray-300 px-7 py-3 font-semibold text-gray-800 transition duration-300 hover:border-purple-500 hover:text-purple-600 dark:border-white/20 dark:text-white dark:hover:border-purple-400"
                >
                  Work With Me
                </button>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectMockup key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.06)] dark:bg-white/5">
            <h3 className="text-4xl font-extrabold text-purple-500">10+</h3>
            <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
              Project Concepts
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.06)] dark:bg-white/5">
            <h3 className="text-4xl font-extrabold text-yellow-500">5</h3>
            <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
              Work Categories
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.06)] dark:bg-white/5">
            <h3 className="text-4xl font-extrabold text-cyan-500">UI</h3>
            <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
              Clean Interfaces
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.06)] dark:bg-white/5">
            <h3 className="text-4xl font-extrabold text-pink-500">UX</h3>
            <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
              User-Focused Flow
            </p>
          </div>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-extrabold text-gray-950 dark:text-white md:text-5xl">
            Project <span className="text-yellow-500">Categories</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            Filter my work based on product type, design category, or
            development area.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.Icon;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                      : "bg-white text-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:text-purple-600 dark:bg-white/5 dark:text-gray-200"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-[32px] bg-white p-5 shadow-[0_12px_45px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,0,0,0.14)] dark:bg-white/5"
            >
              <ProjectMockup project={project} />

              <div className="p-3 pt-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-purple-600 dark:bg-purple-500/10 dark:text-purple-300">
                    {project.type}
                  </span>

                  <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-purple-500" />
                </div>

                <h3 className="text-2xl font-extrabold text-gray-950 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700 dark:bg-white/10 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="mt-6 flex items-center gap-2 font-bold text-purple-600 transition duration-300 group-hover:gap-3 dark:text-purple-300">
                  View Case Study
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* PROCESS SECTION */}
        <div className="mt-24 rounded-[36px] bg-[#050816] p-8 text-white shadow-2xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                <SparklesIcon className="h-4 w-4" />
                My Design Process
              </div>

              <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
                How I Build Better Digital Experiences
              </h2>

              <p className="mt-5 leading-relaxed text-gray-300">
                I focus on understanding the business goal first, then design
                clean user flows, create polished interfaces, and build
                responsive experiences that feel smooth across devices.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                  01
                </div>
                <h3 className="text-xl font-bold">Understand Requirement</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  Study the business, users, goals, competitors, and required
                  features.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-400 text-black">
                  02
                </div>
                <h3 className="text-xl font-bold">Create UI/UX Structure</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  Prepare wireframes, user flows, sections, and visual
                  hierarchy.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-black">
                  03
                </div>
                <h3 className="text-xl font-bold">Design & Develop</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  Build modern screens, responsive layouts, and reusable
                  components.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-400 text-black">
                  04
                </div>
                <h3 className="text-xl font-bold">Polish & Deliver</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  Improve spacing, responsiveness, performance, and final user
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 overflow-hidden rounded-[36px] bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 p-8 text-white shadow-[0_24px_80px_rgba(168,85,247,0.35)] md:p-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-4xl font-extrabold">
                Have a project idea?
              </h2>

              <p className="mt-3 max-w-2xl text-white/90">
                I can help with SaaS dashboards, B2B platforms, Figma UI/UX
                designs, responsive websites, and graphic design work.
              </p>
            </div>

            <button
              onClick={() => {
                if (setPage) {
                  setPage("contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="rounded-full bg-white px-8 py-4 font-bold text-purple-600 shadow-xl transition duration-300 hover:scale-105"
            >
              Let’s Talk →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}