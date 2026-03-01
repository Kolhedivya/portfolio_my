import React, { useState } from "react";
import { motion } from "framer-motion";

function Experience({ theme }) {
    const isLight = theme === "light";
    const [activeIndex, setActiveIndex] = useState(null);
    const timeline = [
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
            year: "2019",
            title: "System Engineer Trainee",
            company: "Infosys Ltd",
            points: [
                "Rebuilt legacy UI with Angular 7+ and SCSS",
                "Implemented lazy loading & modular architecture",
            ],
        },
    ];

    return (
        <motion.section
            id="experience"
            className={`${isLight ? "section-gradient-2 text-black" : "bg-black text-yellow-50"} px-4 sm:px-6 py-16`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="max-w-5xl mx-auto">
                <div className="mb-10 text-center">
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-3 ${isLight ? "text-black" : "text-alabaster"}`}>
                        Career Timeline
                    </h2>
                    <p
                        className={`text-sm sm:text-base max-w-2xl mx-auto ${isLight ? "text-black/80" : "text-alabaster/80"
                            }`}
                    >
                        Progression from trainee to senior engineer, leading UI initiatives and
                        delivering production-quality experiences for global clients.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical timeline line (desktop) */}
                    <div
                        className={`hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 ${isLight ? "bg-black/30" : "bg-orange-400/50"
                            }`}
                    />

                    {/* Mobile: stacked cards */}
                    <div className="space-y-6 md:hidden">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-black/60 backdrop-blur-sm border border-orange-400/50 rounded-xl p-5 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-baseline justify-between gap-3 mb-2">
                                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                                    <span className="text-xs font-medium tracking-wide text-orange-200">
                                        {item.year}
                                    </span>
                                </div>
                                <p className="text-xs text-orange-100 mb-1">{item.company}</p>
                                <ul className="list-disc ml-4 text-xs text-white space-y-1.5 mt-1">
                                    {item.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Desktop: cards only on the left of the line (like the reference) */}
                    {/* Desktop: alternating cards left and right */}
                    <div className="hidden md:block space-y-12">
                        {timeline.map((item, index) => {
                            const isLeft = index % 2 === 0; // even index → left, odd → right
                            return (
                                <div key={index} className="relative flex items-center">
                                    {/* Card */}
                                    <motion.div
                                        className={`w-1/2 p-6 shadow-lg rounded-xl border border-orange-400/50 backdrop-blur-sm 
            ${isLeft ? "pr-10 mr-auto bg-black/60" : "pl-10 ml-auto bg-black/60"}`}
                                        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.15 }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-orange-200 mb-1">
                                            {item.year} · {item.company}
                                        </p>
                                        <ul className="list-disc ml-4 text-sm text-white space-y-1.5">
                                            {item.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    {/* Timeline node */}
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-4 flex items-center justify-center 
            ${isLight ? "bg-white border-black/40 text-black" : "bg-black border-orange-400 text-yellow-50"}`}
                                    >
                                        <span className="text-[11px] font-semibold text-center leading-tight">
                                            {item.year}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Experience;