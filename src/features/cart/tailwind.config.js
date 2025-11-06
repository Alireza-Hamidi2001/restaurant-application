/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                lime: ["Lime", "sans-serif"],
                vazir: ["Vazirmatn", "sans-serif"],
                caveat: ["Caveat", "sans-serif"],
                audiowide: ["AudioWide", "sans-serif"],
                workbench: ["WorkBench", "sans-serif"],
            },
        },
    },
    plugins: [],
};
