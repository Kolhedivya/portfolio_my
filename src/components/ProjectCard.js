import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, description, image, liveLink, githubLink }) {
    const hasRealLiveLink = liveLink && liveLink !== "https://your-live-link.com";

    return (
        <div className="group bg-white/95 rounded-xl shadow-lg overflow-hidden border border-prussian/10 hover:border-prussian/40 hover:shadow-xl transition-all">
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-52 object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-ink mb-2">{title}</h3>
                <p className="text-sm text-dusk mb-4">{description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                    {hasRealLiveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-prussian font-medium hover:text-ink transition"
                        >
                            <FaExternalLinkAlt className="text-xs" />
                            Live Demo
                        </a>
                    )}
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-prussian font-medium hover:text-ink transition"
                    >
                        <FaGithub />
                        Code
                    </a>
                    {!hasRealLiveLink && (
                        <span className="text-xs text-dusk/80">
                            Detailed case study coming soon.
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;