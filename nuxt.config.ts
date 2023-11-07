import { resolve } from "path";

export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname, "/"), // Dossier racine
    },
    app: {
        head: {
            title: "JeChangeMaVoiture.fr - Votre prochaine voiture aux meilleures conditions !",
            meta: [
                {
                    name: "description",
                    content:
                        "Nous vous aidons dans votre recherche de voiture selon vos critères, votre budget ; et nous vous la livrons directement chez vous !",
                },
            ],
        },
    },
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss"],
});
