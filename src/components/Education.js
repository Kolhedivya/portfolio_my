import { motion } from "framer-motion";

function Education() {
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
            className="section-gradient-1 p-12 text-alabaster"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl font-bold text-lavender mb-12 text-center">
                🛠 Technical Expertise
            </h2>

            {/* Core Skills with Progress Bars */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {coreSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="bg-ink p-4 rounded-xl shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex justify-between mb-1 text-sm">
                            <span>{skill.name}</span>
                            <span className="text-lavender">{skill.level}%</span>
                        </div>
                        <motion.div className="w-full bg-dusk rounded-full h-2"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1 }}
                        >
                            <div className="bg-lavender h-2 rounded-full"></div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Additional Technologies */}
            <div className="bg-ink p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-lavender mb-4">
                    🧩 Additional Technologies
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-sm text-alabaster list-disc ml-4">
                    {additionalSkills.map((tech, i) => (
                        <li key={i}>{tech}</li>
                    ))}
                </ul>
            </div>
        </motion.section >



    );
}

export default Education;