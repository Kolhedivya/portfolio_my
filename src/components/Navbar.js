import React, { useState } from "react";

function Navbar() {
    const links = ["About", "Experience", "Expertise", "Featured", "Contact"];
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0  w-full bg-ink text-alabaster shadow-md z-40">
            {/* Desktop */}
            <div className="hidden md:flex justify-center gap-6 py-4">
                {links.map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="hover:text-lavender transition-colors"
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden flex justify-between items-center px-4 py-3">
                <span className="font-bold">Menu</span>
                <button onClick={() => setOpen(!open)} className="focus:outline-none">
                    ☰
                </button>
            </div>
            {open && (
                <div className="flex flex-col items-center gap-4 pb-4 md:hidden">
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-lavender transition-colors"
                            onClick={() => setOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navbar;