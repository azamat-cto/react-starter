import react from "@vitejs/plugin-react";
import unFonts from "unplugin-fonts/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        unFonts({
            custom: {
                families: [
                    {
                        name: "Roboto",
                        local: "Roboto-Thin",
                        src: "./src/assets/fonts/Roboto/100/*.{otf,ttf,woff,woff2}",
                        transform(font) {
                            if (font.basename === "Roboto-Thin") {
                                font.weight = 100;
                            }
                            return font;
                        },
                    },
                    {
                        name: "Roboto",
                        local: "Roboto-Light",
                        src: "./src/assets/fonts/Roboto/300/*.{otf,ttf,woff,woff2}",
                        transform(font) {
                            if (font.basename === "Roboto-Light") {
                                font.weight = 300;
                            }
                            return font;
                        },
                    },
                    {
                        name: "Roboto",
                        local: "Roboto-Regular",
                        src: "./src/assets/fonts/Roboto/400/*.{otf,ttf,woff,woff2}",
                        transform(font) {
                            if (font.basename === "Roboto-Regular") {
                                font.weight = 400;
                            }
                            return font;
                        },
                    },
                    {
                        name: "Roboto",
                        local: "Roboto-Medium",
                        src: "./src/assets/fonts/Roboto/500/*.{otf,ttf,woff,woff2}",
                        transform(font) {
                            if (font.basename === "Roboto-Medium") {
                                font.weight = 500;
                            }
                            return font;
                        },
                    },
                    {
                        name: "Roboto",
                        local: "Roboto-Bold",
                        src: "./src/assets/fonts/Roboto/700/*.{otf,ttf,woff,woff2}",
                        transform(font) {
                            if (font.basename === "Roboto-Bold") {
                                font.weight = 700;
                            }
                            return font;
                        },
                    },
                    {
                        name: "Roboto",
                        local: "Roboto-Black",
                        src: "./src/assets/fonts/Roboto/900/*.{otf,ttf,woff,woff2}",
                        transform(font) {
                            if (font.basename === "Roboto-Black") {
                                font.weight = 900;
                            }
                            return font;
                        },
                    },
                ],
                display: "swap",
                preload: true,
                prefetch: false,
                injectTo: "head-prepend",
            },
        }),
    ],
});
