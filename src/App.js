import React, { useState, useEffect } from "react";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";

import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";

import FeaturedProjects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      window.localStorage.setItem("portfolio-theme", next);
      return next;
    });
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10">
        <About theme={theme} />
        <Experience theme={theme} />
        <Education theme={theme} />
        <FeaturedProjects theme={theme} />
        <Contact theme={theme} />
      </main>
    </div>
  );
}

export default App;
