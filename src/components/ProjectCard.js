import { FaGithub } from "react-icons/fa";

function ProjectCard({ title, description, image, liveLink, githubLink }) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform">
            <img src={image} alt={title} className="w-full h-52 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-bold text-ink mb-2">{title}</h3>
                <p className="text-dusk mb-4">{description}</p>
                <div className="flex gap-4">

                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-prussian hover:text-ink transition"
                    >
                        <FaGithub /> GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;