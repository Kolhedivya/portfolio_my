
import ProjectCard from "./ProjectCard";

function FeaturedProjects() {
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
        <section id="featured" className="section-gradient-3 p-12 text-ink">
            <h2 className="text-4xl font-bold text-prussian mb-8 text-center">🚀 Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>

    );
}

export default FeaturedProjects;