import React from "react";
import html5Logo from "../assets/html5.png";
import css3Logo from "../assets/CSS3.png";
import javascriptLogo from "../assets/Javascript.png";
import reactLogo from "../assets/React.png";
import tailwindLogo from "../assets/tailwindcss.png";

import nodejsLogo from "../assets/nodejs.png";
import expressjsLogo from "../assets/expressjs.png";
import pythonLogo from "../assets/python.png";
import restapisLogo from "../assets/restapi.png";

import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import vscodeLogo from "../assets/vscode.png";
import postmanLogo from "../assets/postman.png";
import vercelLogo from "../assets/vercel.png";
import netlifyLogo from "../assets/netlify.png";

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
} from "@heroicons/react/24/outline";

export default function WhatIDo() {
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
      iconColor: "text-gray-800",
      glow: "rgba(107, 114, 128, 0.28)",
      description:
        "Using Git and GitHub to manage code versions, branches, and team collaboration smoothly.",
      points: ["Git & GitHub", "Branch Management", "Team Workflow"],
    },
    {
      title: "BRAND IDENTITY",
      Icon: IdentificationIcon,
      iconColor: "text-red-500",
      glow: "rgba(239, 68, 68, 0.28)",
      description:
        "Creating visual brand elements that make businesses look unique, clear, and professional.",
      points: ["Logo Design", "Brand Style", "Visual Identity"],
    },
    {
      title: "ANALYTICS",
      Icon: ChartBarIcon,
      iconColor: "text-blue-500",
      glow: "rgba(59, 130, 246, 0.28)",
      description:
        "Analyzing data and user behavior to support better product, design, and business decisions.",
      points: ["Data Insights", "Reports", "Tracking"],
    },
    {
      title: "SOCIAL MEDIA HANDLING",
      Icon: MegaphoneIcon,
      iconColor: "text-teal-500",
      glow: "rgba(20, 184, 166, 0.28)",
      description:
        "Managing social media content to improve online presence, reach, and audience engagement.",
      points: ["Content Planning", "Post Scheduling", "Engagement"],
    },
    {
      title: "MOBILE APP DESIGN",
      Icon: DevicePhoneMobileIcon,
      iconColor: "text-emerald-500",
      glow: "rgba(16, 185, 129, 0.28)",
      description:
        "Designing simple and smooth mobile app screens with clear user flows and modern layouts.",
      points: ["App Screens", "User Flows", "Mobile UI"],
    },
    {
      title: "PHOTOGRAPHY",
      Icon: CameraIcon,
      iconColor: "text-pink-500",
      glow: "rgba(236, 72, 153, 0.28)",
      description:
        "Capturing and editing creative visuals that support personal branding and digital projects.",
      points: ["Creative Shoots", "Image Editing", "Visual Content"],
    },
    {
      title: "MODERN UI SYSTEMS",
      Icon: BoltIcon,
      iconColor: "text-orange-500",
      glow: "rgba(249, 115, 22, 0.28)",
      description:
        "Creating consistent design systems with reusable sections, components, and visual patterns.",
      points: ["Design System", "Components", "Consistency"],
    },
  ];

  const techStack = [
    {
      category: "Frontend",
      tools: [
        { name: "HTML5", logo: html5Logo },
        { name: "CSS3", logo: css3Logo },
        { name: "JavaScript", logo: javascriptLogo },
        { name: "React", logo: reactLogo },
        { name: "Tailwind CSS", logo: tailwindLogo },
      ],
    },
    {
      category: "Backend",
      tools: [
        { name: "Node.js", logo: nodejsLogo },
        { name: "Express.js", logo: expressjsLogo },
        { name: "Python", logo: pythonLogo },
        { name: "REST APIs", logo: restapisLogo },
      ],
    },
  ];

  const toolsAndPlatforms = [
    { name: "Git", logo: gitLogo },
    { name: "GitHub", logo: githubLogo },
    { name: "VS Code", logo: vscodeLogo },
    { name: "Postman", logo: postmanLogo },
    { name: "Vercel", logo: vercelLogo },
    { name: "Netlify", logo: netlifyLogo },
  ];

  const uiUxTools = [
    { name: "Figma", logo: figmaLogo },
    { name: "Adobe XD", logo: adobeXdLogo },
    { name: "Photoshop", logo: photoshopLogo },
    { name: "Illustrator", logo: illustratorLogo },
    { name: "Canva", logo: canvaLogo },
    { name: "Framer", logo: framerLogo },
  ];

  return (
    <section className="w-full bg-transparent px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Heading */}
        <div className="-translate-y-8 transform md:-translate-y-10">
          <h2 className="mb-4 text-center text-4xl font-bold text-current md:text-5xl">
            What I <span className="text-yellow-500">Do</span>
          </h2>

          <div className="mx-auto mb-6 h-[1px] w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.Icon;

            return (
              <div
                key={index}
                style={{ "--icon-glow": service.glow }}
                className="
                  group flex min-h-[390px] flex-col rounded-[30px]
                  bg-white px-8 py-10 text-center
                  shadow-[0_14px_40px_rgba(0,0,0,0.08)]
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:scale-[1.015]
                  hover:shadow-[0_24px_60px_rgba(0,0,0,0.13)]
                "
              >
                <div
                  className="
                    mx-auto mb-6 flex h-20 w-20 items-center justify-center
                    rounded-full bg-white/70
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_8px_20px_rgba(0,0,0,0.07)]
                    ring-1 ring-white/70 backdrop-blur-xl
                    transition-all duration-500 ease-out
                    group-hover:scale-105
                    group-hover:shadow-[0_0_18px_var(--icon-glow),inset_0_1px_0_rgba(255,255,255,0.9)]
                  "
                >
                  <Icon
                    className={`h-9 w-9 ${service.iconColor} transition-transform duration-500 group-hover:scale-105`}
                  />
                </div>

                <h3 className="mb-4 text-xl font-bold tracking-wide text-gray-900">
                  {service.title}
                </h3>

                <p className="mx-auto mb-8 max-w-[310px] text-[15px] leading-relaxed text-gray-600">
                  {service.description}
                </p>

                <div className="mt-auto flex flex-wrap justify-center gap-2.5">
                  {service.points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className="
                        flex items-center gap-1.5 rounded-full
                        bg-gray-50 px-3.5 py-2 text-xs font-medium text-gray-700
                        shadow-sm transition-all duration-300
                        group-hover:bg-purple-50 group-hover:text-gray-900
                      "
                    >
                      <CheckCircleIcon className="h-3.5 w-3.5 flex-shrink-0 text-purple-500" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Section */}
        <div className="mt-24">
          <h2 className="mb-4 text-center text-4xl font-bold text-current md:text-5xl">
            My Tech <span className="text-yellow-500">Stack</span>{" "}
            <span className="text-black">&</span>{" "}
            <span className="text-yellow-500">Tools</span>
          </h2>

          <div className="mx-auto mb-12 h-[1px] w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

          {/* Frontend and Backend Card */}
          <div
            className="
              relative mx-auto w-full overflow-hidden rounded-2xl
              border border-purple-500/20 bg-[#0b1220]/95 px-6 py-7
              shadow-[0_0_35px_rgba(168,85,247,0.18)]
              before:absolute before:left-1/2 before:top-0 before:h-[2px] before:w-40
              before:-translate-x-1/2 before:bg-gradient-to-r
              before:from-transparent before:via-purple-500 before:to-transparent
            "
          >
            <h3 className="mb-8 text-center text-2xl font-bold text-purple-400">
              Tech Stack
            </h3>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">
              {techStack.map((section, sectionIndex) => (
                <div
                  key={section.category}
                  className={`
                    px-2 text-center md:px-8
                    ${
                      sectionIndex === 1
                        ? "md:border-l md:border-slate-600/60"
                        : ""
                    }
                  `}
                >
                  <h4 className="mb-6 text-lg font-semibold text-white">
                    {section.category}
                  </h4>

                  <div className="flex flex-wrap items-center justify-center gap-6">
                    {section.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="
                          group/tool flex w-20 flex-col items-center gap-2
                          rounded-xl p-2 transition-all duration-300
                          hover:-translate-y-1 hover:bg-white/5
                        "
                      >
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="
                            h-10 w-10 object-contain
                            transition-transform duration-300
                            group-hover/tool:scale-110
                          "
                        />

                        <span className="text-xs font-medium text-gray-200">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms Card */}
          <div
            className="
              relative mx-auto mt-10 w-full overflow-hidden rounded-[30px]
              border border-purple-500/20 bg-[#0b1220]/95 px-8 py-8
              shadow-[0_0_35px_rgba(168,85,247,0.18)]
              before:absolute before:left-1/2 before:top-0 before:h-[2px] before:w-40
              before:-translate-x-1/2 before:bg-gradient-to-r
              before:from-transparent before:via-purple-500 before:to-transparent
            "
          >
            <h3 className="mb-8 text-center text-2xl font-bold text-purple-400">
              Tools & Platforms
            </h3>

            <div className="grid grid-cols-2 place-items-center gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {toolsAndPlatforms.map((tool) => (
                <div
                  key={tool.name}
                  className="
                    group/tool flex w-24 flex-col items-center gap-2
                    rounded-xl p-2 transition-all duration-300
                    hover:-translate-y-1 hover:bg-white/5
                  "
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="
                      h-11 w-11 object-contain
                      transition-transform duration-300
                      group-hover/tool:scale-110
                    "
                  />

                  <span className="text-xs font-medium text-gray-200">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* UI/UX Designer Tools Card */}
          <div
            className="
              relative mx-auto mt-10 w-full overflow-hidden rounded-[30px]
              border border-purple-500/20 bg-[#0b1220]/95 px-8 py-8
              shadow-[0_0_35px_rgba(168,85,247,0.18)]
              before:absolute before:left-1/2 before:top-0 before:h-[2px] before:w-40
              before:-translate-x-1/2 before:bg-gradient-to-r
              before:from-transparent before:via-purple-500 before:to-transparent
            "
          >
            <h3 className="mb-8 text-center text-2xl font-bold text-purple-400">
              UI/UX Designer Tools
            </h3>

            <div className="grid grid-cols-2 place-items-center gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {uiUxTools.map((tool) => (
                <div
                  key={tool.name}
                  className="
                    group/tool flex w-24 flex-col items-center gap-2
                    rounded-xl p-2 transition-all duration-300
                    hover:-translate-y-1 hover:bg-white/5
                  "
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="
                      h-11 w-11 object-contain
                      transition-transform duration-300
                      group-hover/tool:scale-110
                    "
                  />

                  <span className="text-xs font-medium text-gray-200">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}