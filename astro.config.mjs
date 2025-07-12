// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";
import { fileURLToPath as nodeFileURLToPath } from "url";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
    },

    output: "server",
    adapter: netlify(),
});
/**
 * Converts a file URL to a path string.
 * @param {URL} url
 * @returns {string}
 */
function fileURLToPath(url) {
    return nodeFileURLToPath(url);
}
