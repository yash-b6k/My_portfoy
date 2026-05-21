import React from "react";
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

  return (
    <section className="w-full bg-transparent px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Heading */}
        <h2 className="mb-4 text-center text-4xl font-bold text-current md:text-5xl">
          What I <span className="text-yellow-500">Do</span>
        </h2>

        {/* Gradient Line */}
        <div className="mx-auto mb-6 h-[1px] w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        

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
                {/* Glass Icon Bubble */}
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

                {/* Card Title */}
                <h3 className="mb-4 text-xl font-bold tracking-wide text-gray-900">
                  {service.title}
                </h3>

                {/* Card Description */}
                <p className="mx-auto mb-8 max-w-[310px] text-[15px] leading-relaxed text-gray-600">
                  {service.description}
                </p>

                {/* Bullet Points - Pill Style */}
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
      </div>
    </section>
  );
}