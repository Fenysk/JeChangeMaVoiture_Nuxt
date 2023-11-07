import { resolve } from "path";

export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname, "/"), // Dossier racine
    },
    app: {
        head: {
            title: "JeChangeMaVoiture.fr - Votre prochaine voiture au meilleur prix, selon vos critères !",
            meta: [
                {
                    name: "description",
                    content:
                        "Nous vous aidons dans votre recherche de voiture de n'importe quelle marque, n'importe quel prix et selon vos critères ! Et nous vous la livrons directement chez vous !",
                },
            ],
        },
    },
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss"],
});
