import React from "react";
import { PaintBrushIcon, IdentificationIcon, WindowIcon, DevicePhoneMobileIcon, ChartBarIcon, CameraIcon } from "@heroicons/react/24/outline";

export default function WhatIDo() {
  const services = [
    {
      title: "UI/UX DESIGN",
      icon: <PaintBrushIcon className="w-8 h-8 text-yellow-500" />,
      description: "Designing intuitive and engaging interfaces that enhance user experience and usability.",
    },
    {
      title: "BRAND IDENTITY",
      icon: <IdentificationIcon className="w-8 h-8 text-red-500" />,
      description: "Crafting unique and memorable brand elements that stand out and communicate values.",
    },
    {
      title: "WEB DESIGN",
      icon: <WindowIcon className="w-8 h-8 text-blue-500" />,
      description: "Building modern, responsive websites that are visually appealing and functional.",
    },
    {
      title: "MOBILE APPS",
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-green-500" />,
      description: "Creating mobile-friendly applications tailored for both Android and iOS platforms.",
    },
    {
      title: "ANALYTICS",
      icon: <ChartBarIcon className="w-8 h-8 text-purple-500" />,
      description: "Providing insights through data analysis to improve decision-making and strategy.",
    },
    {
      title: "PHOTOGRAPHY",
      icon: <CameraIcon className="w-8 h-8 text-black-400" />,
      description: "Capturing professional images to complement creative and digital projects.",
    },
    // New cards
    {
      title: "DESIGNER",
      icon: <PaintBrushIcon className="w-8 h-8 text-orange-500" />,
      description: "Creating visual concepts and digital designs that communicate ideas effectively.",
    },
    {
      title: "WEB DEVELOPER",
      icon: <WindowIcon className="w-8 h-8 text-cyan-500" />,
      description: "Developing modern and responsive websites and applications using latest technologies.",
    },
    {
      title: "SOCIAL MEDIA HANDLER",
      icon: <ChartBarIcon className="w-8 h-8 text-teal-500" />,
      description: "Managing social media accounts to enhance online presence and engagement.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        What I <span className="text-yellow-500">Do</span>
      </h2>

      {/* Gradient line under heading */}
      <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-12" />

      {/* Services grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-3 hover:shadow-2xl cursor-pointer"
          >
            {/* Circular background remains same, icon color customized */}
            <div className="p-4 mb-4 rounded-full bg-gray-100 dark:bg-gray-900">
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}