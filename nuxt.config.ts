import { resolve } from "path";

export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname, "/"), // Dossier racine
    },
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss"],
});
