import { PaintBrushIcon, IdentificationIcon, WindowIcon, DevicePhoneMobileIcon, ChartBarIcon, CameraIcon } from "@heroicons/react/24/outline";

export default function WhatIDo() {
  const services = [
    {
      title: "UI/UX DESIGN",
      icon: <PaintBrushIcon className="w-8 h-8 text-black dark:text-white" />,
      description: "Designing intuitive and engaging interfaces that enhance user experience and usability.",
    },
    {
      title: "BRAND IDENTITY",
      icon: <IdentificationIcon className="w-8 h-8 text-black dark:text-white" />,
      description: "Crafting unique and memorable brand elements that stand out and communicate values.",
    },
    {
      title: "WEB DESIGN",
      icon: <WindowIcon className="w-8 h-8 text-black dark:text-white" />,
      description: "Building modern, responsive websites that are visually appealing and functional.",
    },
    {
      title: "MOBILE APPS",
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-black dark:text-white" />,
      description: "Creating mobile-friendly applications tailored for both Android and iOS platforms.",
    },
    {
      title: "ANALYTICS",
      icon: <ChartBarIcon className="w-8 h-8 text-black dark:text-white" />,
      description: "Providing insights through data analysis to improve decision-making and strategy.",
    },
    {
      title: "PHOTOGRAPHY",
      icon: <CameraIcon className="w-8 h-8 text-black dark:text-white" />,
      description: "Capturing professional images to complement creative and digital projects.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-18 text-center">
        What I <span className="text-yellow-500 dark:text-yellow-400">Do</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-900">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2 light:text-black">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
