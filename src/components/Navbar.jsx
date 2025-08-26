import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

export default function Navbar({ theme, toggleTheme, setPage, currentPage, isContactPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDarkMode = theme === "dark";

  const linkClasses =
    "uppercase font-semibold no-underline hover:no-underline transition-all duration-500 ease-out hover:scale-110 hover:text-yellow-400";

  const handleLinkClick = (page) => {
    setPage(page);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full backdrop-blur-md z-50 shadow-lg dark:shadow-2xl dark:shadow-gray-800/50 transition-colors duration-300
          ${
            isContactPage
              ? "bg-transparent"
              : theme === "dark"
              ? "bg-black/60"
              : "bg-white/70"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#"
            onClick={() => handleLinkClick("home")}
            className={`text-xl font-bold transition-all duration-300 ease-out hover:scale-125  ${
              theme === "dark"
                ? "text-white hover:text-white"
                : "text-black hover:text-black"
            }`}
          >
            Y9-G-K7
          </a>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex items-center gap-8 lg:gap-12 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {["about", "what_i_do", "works", "blog", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => handleLinkClick(item)}
                className={`${linkClasses} ${
                  currentPage === item ? "text-yellow-400" : ""
                }`}
              >
                {item.replace(/_/g, " ")}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-0 bg-transparent transition-all duration-300 ease-out hover:scale-125"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <SunIcon className="h-7 w-7 text-yellow-600 transition-all duration-300 ease-out hover:text-yellow-400 hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.9)]" />
              ) : (
                <MoonIcon className="h-7 w-7 text-gray-500 transition-all duration-300 ease-out  hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
              )}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="transition-all duration-300 ease-out hover:scale-125"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <SunIcon className="h-6 w-6 text-yellow-300 transition-all duration-300 ease-out hover:text-yellow-400 hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.9)]" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-800 transition-all duration-300 ease-out hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
              )}
            </button>
            <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Bars3Icon
                className={`h-8 w-8 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40"
        />
      )}

      {/* Glass Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 
        bg-white/10 dark:bg-black/20 
        backdrop-blur-xl  
        shadow-lg z-[60] transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <XMarkIcon className="h-8 w-8 text-white" />
          </button>
        </div>

        <nav className="flex flex-col gap-8 px-6 text-center text-white">
          {["about", "what_i_do", "works", "blog", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => handleLinkClick(item)}
              className={`${linkClasses} ${
                currentPage === item ? "text-yellow-400" : ""
              }`}
            >
              {item.replace(/_/g, " ")}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
