import { motion } from "framer-motion";

function Experience() {
    const timeline = [
        {
            year: "2019",
            title: "System Engineer Trainee",
            company: "Infosys Ltd",
            points: [
                "Rebuilt legacy UI with Angular 7+ and SCSS",
                "Implemented lazy loading & modular architecture",
            ],
        },
        {
            year: "2019 – 2022",
            title: "Systems Engineer",
            company: "Infosys Ltd",
            points: [
                "Developed 20+ responsive UI components using Angular",
                "Improved test coverage by 30% with Jasmine & Karma",
                "Enhanced UX, boosting satisfaction scores by 25%",
            ],
        },
        {
            year: "2022 – Present",
            title: "Sr. Systems Engineer",
            company: "Tata Consultancy Services",
            points: [
                "Delivered 15+ UI features using React & Spring Boot",
                "Reduced page load time by 40% via optimization",
                "Implemented secure authentication with OAuth & JWT",
                "Mentored junior developers and reviewed code quality",
            ],
        },
    ];

    return (
        <motion.section
            id="experience"
            className="section-gradient-2 p-12 text-alabaster"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl sm:text-md font-bold text-lavender mb-12 text-center">📈 Career Timeline</h2>

            <div className="overflow-x-auto">
                <div className="flex flex-col md:flex-row gap-8 md:overflow-x-auto">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-ink border border-lavender rounded-xl p-6 w-full md:min-w-[280px] shadow-lg hover:scale-105 transition-transform"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-sm text-lavender mb-1">{item.year}</div>
                            <h3 className="text-xl font-bold text-alabaster">{item.title}</h3>
                            <p className="text-dusk text-sm mb-3">{item.company}</p>
                            <ul className="list-disc ml-4 text-sm text-alabaster">
                                {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default Experience;