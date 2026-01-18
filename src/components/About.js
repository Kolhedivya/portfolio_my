import { motion } from "framer-motion";
import { FaReact, FaBeer, FaGithub, FaLinkedin, FaAngular } from "react-icons/fa";
import { SiTypescript, SiGraphql } from "react-icons/si";
import { MdWork, MdContactMail, MdArrowDownward, MdDownload } from "react-icons/md";
import { TbBrandRedux } from "react-icons/tb";


function About() {
    return (
        <motion.section
            id="about"
            className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-ink via-prussian to-dusk text-center text-alabaster px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            {/* Name & Title */}
            <h1 className="text-5xl font-bold mb-2">Divya Kolhe</h1>
            <h2 className="text-xl text-lavender mb-4">ReactJS / UI Developer</h2>
            <p className="text-alabaster max-w-xl mb-6">
                Crafting exceptional digital experiences with modern web technologies. Passionate about building scalable, accessible, and user-friendly interfaces.
            </p>

            {/* Tech Stack Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <span className="bg-lavender text-ink px-4 py-2 rounded-full font-semibold flex items-center gap-2"><FaReact /> React</span>
                <span className="bg-lavender text-ink px-4 py-2 rounded-full font-semibold flex items-center gap-2"><SiTypescript /> TypeScript</span>
                <span className="bg-lavender text-ink px-4 py-2 rounded-full font-semibold flex items-center gap-2"><FaBeer /> Firebase</span>
                <span className="bg-lavender text-ink px-4 py-2 rounded-full font-semibold flex items-center gap-2"><FaAngular /> Angular</span>
                <span className="bg-lavender text-ink px-4 py-2 rounded-full font-semibold flex items-center gap-2">< TbBrandRedux /> Redex</span>
                <span className="bg-lavender text-ink px-4 py-2 rounded-full font-semibold flex items-center gap-2"><SiGraphql /> GraphQL</span>
            </div>
            {/* Call-to-Action Buttons */}
            <div className="flex gap-6 mb-8">
                <a
                    href="#featured"
                    className="bg-alabaster text-ink px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-lavender transition"
                >
                    <MdWork /> View My Work
                </a>
                <a
                    href="#contact"
                    className="bg-lavender text-ink px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-alabaster transition"
                >
                    <MdContactMail /> Get in Touch
                </a>
                <a
                    href="/resume.pdf"
                    download
                    className="bg-prussian text-alabaster px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-dusk transition"
                >
                    <MdDownload /> Download CV
                </a>

            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-2xl text-lavender mb-6">
                <a href="https://github.com/Kolhedivya" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/in/divya-kolhe-383049165" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>

            {/* Scroll Prompt */}
            <div className="text-lavender flex flex-col items-center animate-bounce">
                <MdArrowDownward className="text-3xl" />
                <span className="text-sm mt-1">Scroll to explore</span>
            </div>
        </motion.section>

    );
}

export default About;