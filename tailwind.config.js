/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                ink: "#0d1b2a",        // Ink Black
                prussian: "#1b263b",   // Prussian Blue
                dusk: "#415a77",       // Dusk Blue
                lavender: "#778da9",   // Lavender Grey
                alabaster: "#e0e1dd",  // Alabaster Grey
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                mono: ["Fira Code", "monospace"],
            },
        },
    },
    plugins: [],
};