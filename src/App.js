import React from "react";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";

import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";

import FeaturedProjects from "./components/Projects";
import Contact from "./components/Contact";



function App() {
  return (
    <div className="font-sans text-gray-800">
      <ScrollProgress />   {/* Progress bar */}
      <Navbar />
      <About />
      <Experience />
      <Education />

      <FeaturedProjects />
      <Contact />
    </div>
  );
}

export default App;
