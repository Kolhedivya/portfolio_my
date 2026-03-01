import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function Navbar({ theme, onToggleTheme }) {
    const links = [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Expertise", href: "#expertise" },
        { label: "Featured", href: "#featured" },
        { label: "Contact", href: "#contact" },
    ];
    const [open, setOpen] = useState(false);
    const isDark = theme === "dark";

    return (
        <nav
            className={`fixed top-0 left-0 w-full backdrop-blur-md border-b z-40 ${isDark
                ? "bg-black/80 text-yellow-50 border-orange-500/40"
                : "bg-white/85 text-black border-orange-400/50"
            }`}
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Desktop */}
                <div className="hidden md:flex items-center justify-between py-4">
                    <a href="#about" className="flex items-baseline gap-2">
                        <span className="text-lg font-semibold tracking-wide">Divya Kolhe</span>
                        <span className={`text-xs uppercase tracking-[0.2em] ${isDark ? "text-yellow-300/80" : "text-orange-500/80"}`}>
                            Frontend Engineer
                        </span>
                    </a>
                    <div className="flex items-center gap-6 text-sm">
                        {links.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`relative py-1 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:transition-all hover:after:w-full ${isDark
                                    ? "text-yellow-50/80 hover:text-yellow-50 after:bg-orange-400"
                                    : "text-black/70 hover:text-black after:bg-orange-500"
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                        <button
                            type="button"
                            onClick={onToggleTheme}
                            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium transition-colors border ${isDark
                                ? "border-yellow-300/60 text-yellow-50/80 hover:text-yellow-50 hover:border-yellow-300"
                                : "border-orange-400/70 text-black/70 hover:text-black hover:border-orange-500"
                            }`}
                        >
                            {theme === "dark" ? (
                                <>
                                    <FiSun className="text-yellow-300" />
                                    Light
                                </>
                            ) : (
                                <>
                                    <FiMoon className="text-indigo-600" />
                                    Dark
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile */}
                <div className="md:hidden flex justify-between items-center py-3">
                        <a href="#about" className="font-semibold tracking-wide">
                        Divya Kolhe
                    </a>
                    <button
                        type="button"
                        onClick={onToggleTheme}
                        className={`mr-2 flex h-8 w-8 items-center justify-center rounded-full border text-xs ${isDark
                            ? "border-orange-500/60 text-yellow-50/80"
                            : "border-orange-400/70 text-black/70"
                        }`}
                        aria-label="Toggle color theme"
                    >
                        {theme === "dark" ? <FiSun /> : <FiMoon />}
                    </button>
                    <button
                        onClick={() => setOpen(!open)}
                        className={`relative h-8 w-8 focus:outline-none ${isDark ? "text-yellow-50/90" : "text-black/80"}`}
                        aria-label="Toggle navigation"
                    >
                        <span
                            className={`absolute left-1/2 top-2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-current transition-transform ${open ? "translate-y-1 rotate-45" : ""
                                }`}
                        />
                        <span
                            className={`absolute left-1/2 top-4 h-[2px] w-5 -translate-x-1/2 rounded-full bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"
                                }`}
                        />
                        <span
                            className={`absolute left-1/2 top-6 h-[2px] w-5 -translate-x-1/2 rounded-full bg-current transition-transform ${open ? "-translate-y-1 -rotate-45" : ""
                                }`}
                        />
                    </button>
                </div>
            </div>

            {open && (
                <div className={`md:hidden border-t ${isDark ? "bg-black/95 border-orange-500/40" : "bg-white/95 border-orange-400/50"}`}>
                    <div className="mx-auto max-w-6xl px-4 pb-4 pt-2 flex flex-col gap-2">
                        {links.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`py-2 text-sm border-b last:border-b-0 ${isDark
                                    ? "text-yellow-50/80 hover:text-yellow-50 border-orange-500/30"
                                    : "text-black/70 hover:text-black border-orange-400/30"
                                }`}
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;