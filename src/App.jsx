import { useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatIDo from "./pages/WhatIDo";
import Works from "./pages/Works";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const THEME_STORAGE_KEY = "theme";
const THEME_VERSION_KEY = "theme_version";
const CURRENT_THEME_VERSION = "v3";

const validPages = ["home", "about", "what_i_do", "works", "blog", "contact"];

export default function App() {
  const [theme, setTheme] = useState("light");
  const [page, setPage] = useState("home");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";

      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      localStorage.setItem(THEME_VERSION_KEY, CURRENT_THEME_VERSION);

      return newTheme;
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const savedThemeVersion = localStorage.getItem(THEME_VERSION_KEY);

    if (savedThemeVersion !== CURRENT_THEME_VERSION) {
      localStorage.setItem(THEME_STORAGE_KEY, "light");
      localStorage.setItem(THEME_VERSION_KEY, CURRENT_THEME_VERSION);
      setTheme("light");
      return;
    }

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    } else {
      localStorage.setItem(THEME_STORAGE_KEY, "light");
      localStorage.setItem(THEME_VERSION_KEY, CURRENT_THEME_VERSION);
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(theme);

    localStorage.setItem(THEME_STORAGE_KEY, theme);
    localStorage.setItem(THEME_VERSION_KEY, CURRENT_THEME_VERSION);
  }, [theme]);

  useEffect(() => {
    const hashPage = window.location.hash.replace("#", "");

    if (validPages.includes(hashPage)) {
      setPage(hashPage);
    }
  }, []);

  useEffect(() => {
    if (validPages.includes(page)) {
      window.location.hash = page;
    }
  }, [page]);

  const renderPage = () => {
    const commonProps = {
      theme,
      setPage,
    };

    const pages = {
      home: <Home {...commonProps} />,
      about: <About {...commonProps} />,
      what_i_do: <WhatIDo {...commonProps} />,
      works: <Works {...commonProps} />,
      blog: <Blog {...commonProps} />,
      contact: <Contact {...commonProps} />,
    };

    return pages[page] || pages.home;
  };

  const appBg =
    theme === "dark" ? "bg-[#020617] text-white" : "bg-white text-[#050816]";

  return (
    <div className={`min-h-screen transition-colors duration-300 ${appBg}`}>
      <Layout
        theme={theme}
        toggleTheme={toggleTheme}
        page={page}
        setPage={setPage}
      >
        {renderPage()}
      </Layout>

      <SpeedInsights />
    </div>
  );
}