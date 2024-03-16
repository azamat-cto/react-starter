import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: {
                "2xl": "1400px",
            },
        },
        fontFamily: {
            sans: ['"Roboto"', ...fontFamily.sans],
        },
        extend: {},
    },
    plugins: [],
};

export default config;
