
import ProjectCard from "./ProjectCard";

function FeaturedProjects({ theme }) {
    const isLight = theme === "light";
    const projects = [
        {
            title: "Netflix GPT",
            description: "A Netflix-style movie browser powered by OpenAI. Intelligent search, trailer previews, and poster validation.",
            image: "/images/netflix_gpt.png",
            liveLink: "https://your-live-link.com",
            githubLink: "https://github.com/Kolhedivya/NetFlix_gpt",
        },
        {
            title: "Food Time",
            description: "A dynamic food ordering app with real-time menu browsing, cart management, and responsive UI.",
            image: "/images/food_.png",
            liveLink: "https://your-live-link.com",
            githubLink: "https://github.com/Kolhedivya/FoodTime",
        }

    ];

    return (
        <section
            id="featured"
            className={`${isLight ? "section-gradient-3 text-ink" : "bg-black text-yellow-50"} px-4 sm:px-6 py-16`}
        >
            <div className="max-w-5xl mx-auto">
                <div className="mb-10 text-center">
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-3 ${isLight ? "text-prussian" : "text-yellow-50"}`}>
                        Featured Projects
                    </h2>
                    <p
                        className={`text-sm sm:text-base max-w-2xl mx-auto ${isLight ? "text-dusk" : "text-yellow-50/80"
                            }`}
                    >
                        A selection of hands-on projects highlighting real-world frontend engineering,
                        performance, and UX considerations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>

    );
}

export default FeaturedProjects;