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
                {
                    name: "keywords",
                    content:
                        "voiture, occasion, neuve, livraison, domicile, achat, vente, reprise, critères, budget, livraison, domicile",
                },
                {
                    name: "robots",
                    content: "index, follow",
                },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    name: "theme-color",
                    content: "#ffffff",
                },
            ],
            link: [
                {
                    rel: "canonical",
                    href: "https://jechangemavoiture.fr",
                },
            ],
            htmlAttrs: {
                lang: "fr",
            },
        },
    },
    devtools: { enabled: true },
    robots: {
        UserAgent: "*",
        Disallow: ["/dashboard-9a4d6f/**"],
    },
    site: {
        url: "https://jechangemavoiture.fr",
    },
    sitemap: {
        exclude: ["/dashboard-9a4d6f/**"],
    },
    modules: [
        "@nuxtjs/tailwindcss",
        "nuxt-simple-sitemap",
        "nuxt-simple-robots",
    ],
});
