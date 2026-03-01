import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaGithub, FaLinkedin, FaAngular } from "react-icons/fa";
import { SiTypescript, SiGraphql, SiFirebase } from "react-icons/si";
import { MdWork, MdContactMail, MdArrowDownward, MdDownload } from "react-icons/md";
import { TbBrandRedux } from "react-icons/tb";
import BackgroundParticles from "./BackgroundParticles";

function About({ theme }) {
    const isLight = theme === "light";

    return (
        <motion.section
            id="about"
            className={`relative overflow-hidden min-h-screen pt-28 flex flex-col justify-center items-center text-center px-4 sm:px-6 ${isLight ? "section-gradient-1 text-black" : "bg-black text-yellow-50"
                }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            {/* Dark mode: particle background like the reference */}
            {!isLight && <BackgroundParticles />}

            {/* Light mode: soft animated background orbs */}
            {isLight && (
                <>
                    <motion.div
                        className="pointer-events-none absolute -top-32 -right-32 w-72 h-72 rounded-full bg-orange-400/40 blur-3xl"
                        initial={{ opacity: 0, scale: 0.8, x: 40, y: -40 }}
                        animate={{ opacity: 1, scale: [1, 1.05, 1], x: [40, 10, 40], y: [-40, -10, -40] }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="pointer-events-none absolute bottom-[-120px] left-[-80px] w-80 h-80 rounded-full bg-yellow-300/40 blur-3xl"
                        initial={{ opacity: 0, scale: 0.9, x: -40, y: 40 }}
                        animate={{ opacity: 1, scale: [1, 1.08, 1], x: [-40, -5, -40], y: [40, 10, 40] }}
                        transition={{
                            duration: 14,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    />
                </>
            )}

            <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-12">
                <div className="flex-1">
                    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs uppercase tracking-[0.2em] mb-4 border ${isLight
                        ? "border-orange-400 bg-white/70 text-orange-500"
                        : "border-lavender/40 bg-ink/40 text-lavender/80"
                        }`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${isLight ? "bg-orange-500" : "bg-emerald-400"}`} />
                        Available for frontend roles
                    </div>

                    {/* Name & Title */}
                    <h1 className={`text-3xl sm:text-5xl font-bold mb-3 ${isLight ? "text-black" : "text-alabaster"}`}>
                        Divya Kolhe
                    </h1>
                    <h2
                        className={`text-base sm:text-xl mb-5 ${isLight ? "text-orange-600" : "text-lavender"}`}
                    >
                        Senior Frontend Engineer · React & Angular
                    </h2>
                    <p
                        className={`text-sm sm:text-base max-w-xl mb-8 ${isLight ? "text-black/80" : "text-alabaster/80"
                            }`}
                    >
                        Crafting performant, accessible, and user-focused interfaces with modern JavaScript,
                        design systems, and clean architecture. Over 7 years of experience shipping products
                        for large-scale enterprises.
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-10">
                        <span className="bg-alabaster text-ink px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm">
                            <FaReact /> React
                        </span>
                        <span className="bg-ink/70 border border-lavender/40 text-alabaster px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                            <SiTypescript /> TypeScript
                        </span>
                        <span className="bg-ink/70 border border-lavender/40 text-alabaster px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                            <FaAngular /> Angular
                        </span>
                        <span className="bg-ink/70 border border-lavender/40 text-alabaster px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                            <TbBrandRedux /> Redux
                        </span>
                        <span className="bg-ink/70 border border-lavender/40 text-alabaster px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                            <SiFirebase /> Firebase
                        </span>
                        <span className="bg-ink/70 border border-lavender/40 text-alabaster px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                            <SiGraphql /> GraphQL
                        </span>
                    </div>

                    {/* Call-to-Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-10">
                        <a
                            href="#featured"
                            className={`inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base shadow-md transition
      ${isLight
                                    ? "bg-orange-500 text-white hover:bg-orange-600"
                                    : "bg-transparent border border-gray-600 text-gray-200 hover:bg-gray-800"}`}
                        >
                            <MdWork /> View Selected Work
                        </a>

                        <a
                            href="#contact"
                            className={`inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base shadow-md transition
      ${isLight
                                    ? "bg-orange-500 text-white hover:bg-orange-600"
                                    : "bg-transparent border border-gray-600 text-gray-200 hover:bg-gray-800"}`}
                        >
                            <MdContactMail /> Contact Me
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className={`inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base shadow-md transition
      ${isLight
                                    ? "bg-orange-500 text-white hover:bg-orange-600"
                                    : "bg-transparent border border-gray-600 text-gray-200 hover:bg-gray-800"}`}
                        >
                            <MdDownload /> Download CV
                        </a>
                    </div>


                    {/* Social Icons */}
                    <div
                        className={`flex justify-center gap-5 text-2xl mb-6 ${isLight ? "text-orange-500" : "text-lavender"}`}
                    >
                        <a
                            href="https://github.com/Kolhedivya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-colors ${isLight ? "hover:text-black" : "hover:text-alabaster"}`}
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/divya-kolhe-383049165"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-colors ${isLight ? "hover:text-black" : "hover:text-alabaster"}`}
                        >
                            <FaLinkedin />
                        </a>
                    </div>

                    {/* Scroll Prompt */}
                    <div
                        className={`flex flex-col items-center animate-bounce mt-4 ${isLight ? "text-orange-500" : "text-lavender"
                            }`}
                    >
                        <MdArrowDownward className="text-3xl" />
                        <span className="text-xs mt-1 tracking-wide uppercase">
                            Scroll to explore
                        </span>
                    </div>
                </div>

            </div>
        </motion.section>
    );
}

export default About;