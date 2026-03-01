import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact({ theme }) {
    const isLight = theme === "light";

    return (
        <motion.section
            id="contact"
            className={`${isLight ? "section-gradient-3 text-ink" : "bg-black text-yellow-50"} px-4 sm:px-6 py-16 text-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="max-w-3xl mx-auto">
                <h2
                    className={`text-3xl sm:text-4xl font-bold mb-4 ${isLight ? "text-prussian" : "text-yellow-50"}`}
                >
                    Let’s Connect
                </h2>
                <p
                    className={`text-sm sm:text-base mb-6 ${isLight ? "text-ink/80" : "text-yellow-50/80"
                        }`}
                >
                    Open to frontend opportunities, technical leadership, and collaboration on
                    modern web products.
                </p>

                <div
                    className={`inline-flex flex-col items-center gap-2 rounded-xl px-5 py-3 shadow-sm mb-8 ${isLight ? "bg-white/70" : "bg-yellow-50/10 border border-yellow-50/30"
                        }`}
                >
                    <span
                        className={`text-xs uppercase tracking-[0.2em] ${isLight ? "text-dusk" : "text-yellow-50/70"
                            }`}
                    >
                        Primary email
                    </span>
                    <a
                        href="mailto:divyakolhe1996@gmail.com"
                        className={`inline-flex items-center gap-2 font-semibold ${isLight
                            ? "text-prussian hover:text-ink"
                            : "text-yellow-50 hover:text-white"
                            }`}
                    >
                        <FaEnvelope />
                        divyakolhe1996@gmail.com
                    </a>
                </div>

                <div
                    className={`flex justify-center gap-8 text-3xl mb-4 ${isLight ? "text-lavender" : "text-yellow-300"
                        }`}
                >
                    <motion.a
                        href="https://linkedin.com/in/divya-kolhe-383049165"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        whileHover={{ scale: 1.15, y: -2 }}
                        className={`transition-transform ${isLight ? "hover:text-ink" : "hover:text-white"}`}
                    >
                        <FaLinkedin />
                    </motion.a>
                    <motion.a
                        href="https://github.com/Kolhedivya"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        whileHover={{ scale: 1.15, y: -2 }}
                        className={`transition-transform ${isLight ? "hover:text-ink" : "hover:text-white"}`}
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        href="tel:+918889106844"
                        aria-label="Call Phone"
                        whileHover={{ scale: 1.15, y: -2 }}
                        className={`transition-transform ${isLight ? "hover:text-ink" : "hover:text-white"}`}
                    >
                        <FaPhone />
                    </motion.a>
                </div>

                <p
                    className={`mt-4 text-xs ${isLight ? "text-dusk" : "text-yellow-50/70"
                        }`}
                >
                    Prefer a quick overview? I’m happy to share code samples, design systems, or
                    walkthroughs of shipped features on request.
                </p>
            </div>
        </motion.section>
    );
}

export default Contact;