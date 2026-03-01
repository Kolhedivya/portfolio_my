import { motion } from "framer-motion";

function Education({ theme }) {
    const isLight = theme === "light";
    const coreSkills = [
        { name: "CSS & Sass ", level: 95 },
        { name: "JavaScript", level: 95 },
        { name: "Bootstrap & Tailwindcss", level: 80 },
        { name: "Angular", level: 70 },
        { name: "React", level: 70 },
        { name: "React Native", level: 70 },
    ];

    const additionalSkills = [

        "Git",
        "GitHub",
        "GitHub Copilot",
        "JIRA",
        "Vite",
        "Babel",
        "AJAX",
        "JSON",
        "Firebase",
        "RESTful APIs",
        "Open API Integration",
        "Redux",
    ];

    return (
        <motion.section
            id="expertise"
            className={`${isLight ? "section-gradient-1 text-black" : "bg-black text-yellow-50"} px-4 sm:px-6 py-16`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="max-w-5xl mx-auto">
                <div className="mb-10 text-center">
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-3 ${isLight ? "text-black" : "text-alabaster"}`}>
                        Technical Expertise
                    </h2>
                    <p
                        className={`text-sm sm:text-base max-w-2xl mx-auto ${isLight ? "text-black/80" : "text-alabaster/80"
                            }`}
                    >
                        A balanced mix of core frontend skills and supporting technologies used to
                        ship production-ready experiences.
                    </p>
                </div>

                {/* Core Skills with Progress Bars */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {coreSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="bg-black/60 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-orange-400/50 text-white"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-between mb-2 text-sm">
                                <span className="font-medium text-white">{skill.name}</span>
                                <span className="font-semibold text-white">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-black rounded-full h-2 overflow-hidden">
                                <motion.div
                                    className="bg-orange-400 h-2 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Technologies */}
                <div className="bg-black/60 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-orange-400/50 text-white">
                    <h3 className="text-2xl font-semibold mb-4">
                        Additional Technologies
                    </h3>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-white">
                        {additionalSkills.map((tech, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
                                <span>{tech}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.section>
    );
}

export default Education;