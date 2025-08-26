import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatIDo from "./pages/WhatIDo";
import Works from "./pages/Works";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function App() {
  const [theme, setTheme] = useState("light"); // Default
  const [page, setPage] = useState("home");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const renderPage = () => {
    const pages = {
      home: <Home theme={theme} />,
      about: <About theme={theme} setPage={setPage} />,
      what_i_do: <WhatIDo theme={theme} />,
      works: <Works theme={theme} />,
      blog: <Blog theme={theme} />,
      contact: <Contact theme={theme} />,
    };
    return pages[page] || pages.home;
  };

  return (
    <Layout theme={theme} toggleTheme={toggleTheme} page={page} setPage={setPage}>
      {renderPage()}
    </Layout>
  );
}
