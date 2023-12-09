const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./content/**/*.md",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), nextui()],
};
