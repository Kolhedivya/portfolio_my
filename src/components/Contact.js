import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
    return (
        <motion.section
            id="contact"
            className="section-gradient-3 p-12 text-ink text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-bold text-prussian mb-6">Let’s Connect</h2>
            <p className="font-bold text-prussian mb-4">
                Happy to Connect! Reach out via LinkedIn, GitHub, or directly:
            </p>

            <div className="flex justify-center gap-8 text-3xl text-lavender">
                <motion.a
                    href="https://linkedin.com/in/divya-kolhe-383049165"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    whileHover={{ scale: 1.2, rotate: 2 }}
                    className="hover:text-ink transition-transform"
                >
                    <FaLinkedin />
                </motion.a>
                <motion.a
                    href="https://github.com/Kolhedivya"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    whileHover={{ scale: 1.2, rotate: 2 }}
                    className="hover:text-ink transition-transform"
                >
                    <FaGithub />
                </motion.a>
                <motion.a
                    href="mailto:divyakolhe1996@gmail.com"
                    aria-label="Send Email"
                    whileHover={{ scale: 1.2, rotate: 2 }}
                    className="hover:text-ink transition-transform"
                >
                    <FaEnvelope />
                </motion.a>
                <motion.a
                    href="tel:+918889106844"
                    aria-label="Call Phone"
                    whileHover={{ scale: 1.2, rotate: 2 }}
                    className="hover:text-ink transition-transform"
                >
                    <FaPhone />
                </motion.a>
            </div>

            <p className="mt-6 text-sm  text-white">
                💌 iamdivya17@gmail.com
            </p>
        </motion.section>
    );
}

export default Contact;