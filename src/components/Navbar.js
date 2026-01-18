import React from "react";

function Navbar() {
    const links = ["About", "Experience", "Expertise", "Featured", "Contact"];

    return (
        <nav className="fixed top-0 w-full bg-ink text-alabaster shadow-md flex justify-center gap-6 py-4 z-40">
            {links.map((item) => (
                <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-lavender transition-colors"
                >
                    {item}
                </a>
            ))}
        </nav>
    );
}

export default Navbar;