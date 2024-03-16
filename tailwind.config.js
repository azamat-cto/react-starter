import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        fontFamily: {
            sans: ['"Roboto"', ...fontFamily.sans],
        },
        extend: {},
    },
    plugins: [],
};

export default config;
