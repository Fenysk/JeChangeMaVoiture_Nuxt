<script setup lang="ts">
import emailjs from "@emailjs/browser";

async function submitForm(formData: HTMLFormElement) {
    try {
        const result = await emailjs.sendForm(
            "gailleton",
            "template_xroecww",
            formData,
            "Q1RxkQrcQNbsI9Gf-"
        );

        alert("Votre demande a bien été envoyée !");
    } catch (error) {
        alert(error);
    }
}
</script>

<template>
    <div id="Contact" class="w-full">
        <div
            class="w-full h-full px-0 py-48 pb-8 backdrop-blur lg:px-32 2xl:px-72"
        >
            <div
                class="w-full h-full mx-auto text-white bg-[#000000CC] py-16 md:px-[10%] xl:px-[20%] shadow border-y-4 lg:border-4 border-blue-900 lg:rounded-3xl"
            >
                <h2 class="px-4 mb-4 text-4xl font-semibold">
                    Votre projet automobile
                </h2>

                <p class="px-4 mb-8 text-xl">
                    Vous souhaitez acheter un nouveau véhicule ?<br />
                    Remplissez simplement ce formulaire, je vous ferai un retour
                    sous
                    <b class="text-blue-200">24h</b> !
                </p>

                <form
                    @submit.prevent="submitForm($refs.form)"
                    ref="form"
                    class="w-full p-4 text-black bg-gray-50 shadow lg:p-8 md:rounded-xl"
                >
                    <h3 class="font-semibold text-2xl">Vos critères</h3>

                    <!-- Contenu du formulaire -->

                    <!-- Type d'offre -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Type d'offre</label
                        >
                        <div class="flex flex-col mb-4">
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="typeOffre"
                                    value="neuf"
                                    class="mr-2"
                                />
                                Neuf
                            </label>
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="typeOffre"
                                    value="occasion"
                                    class="mr-2"
                                />
                                Occasion
                            </label>
                        </div>
                    </div>

                    <!-- Type de véhicule -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Type de véhicule</label
                        >
                        <div class="flex flex-col mb-4">
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="typeVehicule"
                                    value="citadine"
                                    class="mr-2"
                                />
                                Citadine
                            </label>
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="typeVehicule"
                                    value="berline"
                                    class="mr-2"
                                />
                                Berline
                            </label>
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="typeVehicule"
                                    value="suv"
                                    class="mr-2"
                                />
                                SUV
                            </label>
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="typeVehicule"
                                    value="monospace"
                                    class="mr-2"
                                />
                                Monospace
                            </label>
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="typeVehicule"
                                    value="utilitaire"
                                    class="mr-2"
                                />
                                Utilitaire
                            </label>
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="typeVehicule"
                                    value="coupee"
                                    class="mr-2"
                                />
                                Coupée
                            </label>
                        </div>
                    </div>

                    <!-- Marque souhaitée -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Marque souhaitée</label
                        >
                        <input
                            type="text"
                            name="marque"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        />
                    </div>

                    <!-- Modèle souhaité -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Modèle souhaité</label
                        >
                        <input
                            type="text"
                            name="modele"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        />
                    </div>

                    <!-- Type de boite -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Type de boite</label
                        >
                        <div class="flex flex-col mb-4">
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="typeBoite"
                                    value="manuelle"
                                    class="mr-2"
                                />
                                Manuelle
                            </label>
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="typeBoite"
                                    value="automatique"
                                    class="mr-2"
                                />
                                Automatique
                            </label>
                        </div>
                    </div>

                    <!-- Type de moteur -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Type de moteur</label
                        >
                        <div class="flex flex-col mb-4">
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="typeMoteur"
                                    value="essence"
                                    class="mr-2"
                                />
                                Essence
                            </label>
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="typeMoteur"
                                    value="diesel"
                                    class="mr-2"
                                />
                                Diesel
                            </label>
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="typeMoteur"
                                    value="hybride"
                                    class="mr-2"
                                />
                                Hybride
                            </label>
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="typeMoteur"
                                    value="electrique"
                                    class="mr-2"
                                />
                                Electrique
                            </label>
                        </div>
                    </div>

                    <!-- Couleur souhaitée -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Couleur souhaitée</label
                        >
                        <input
                            type="text"
                            name="couleur"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        />
                    </div>

                    <!-- Equipements particuliers souhaités -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Equipements particuliers souhaités</label
                        >
                        <input
                            type="text"
                            name="equipements"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        />
                    </div>

                    <!-- Acheter ou louer -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Vous voulez...</label
                        >
                        <div class="flex flex-col mb-4">
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="choix"
                                    value="acheter"
                                    class="mr-2"
                                />
                                Acheter
                            </label>
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="choix"
                                    value="louer"
                                    class="mr-2"
                                />
                                Louer
                            </label>
                        </div>
                    </div>

                    <!-- Budget maximum -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Budget maxi</label
                        >
                        <input
                            type="number"
                            name="budget"
                            min="15000"
                            step="1000"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        />
                    </div>

                    <!-- Date du projet -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Date du projet</label
                        >
                        <div class="flex flex-col mb-4">
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="dateProjet"
                                    value="1-3 mois"
                                    class="mr-2"
                                />
                                Immédiat
                            </label>
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="dateProjet"
                                    value="3-6 mois"
                                    class="mr-2"
                                />
                                Moins de 3 mois
                            </label>
                            <label
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="dateProjet"
                                    value="6-12 mois"
                                    class="mr-2"
                                />
                                Plus de 3 mois
                            </label>
                        </div>
                    </div>

                    <h3 class="font-semibold text-2xl">Vos coordonnées</h3>

                    <!-- Nom -->
                    <div>
                        <label class="block mb-2 font-semibold">Nom</label>
                        <input
                            type="text"
                            name="nom"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        />
                    </div>

                    <!-- Prénom -->
                    <div>
                        <label class="block mb-2 font-semibold">Prénom</label>
                        <input
                            type="text"
                            name="prenom"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        />
                    </div>

                    <!-- Numéro et nom de rue -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Numéro et nom de rue</label
                        >
                        <input
                            type="text"
                            name="adresseNumero"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        />
                    </div>

                    <!-- Code postal -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Code postal</label
                        >
                        <input
                            type="number"
                            name="codePostal"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        />
                    </div>

                    <!-- Ville -->
                    <div>
                        <label class="block mb-2 font-semibold">Ville</label>
                        <input
                            type="text"
                            name="ville"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        />
                    </div>

                    <!-- Pays -->
                    <div>
                        <label class="block mb-2 font-semibold">Pays</label>
                        <input
                            type="text"
                            name="pays"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        />
                    </div>

                    <!-- Email -->
                    <div>
                        <label class="block mb-2 font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        />
                    </div>

                    <!-- Téléphone -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Téléphone</label
                        >
                        <input
                            type="tel"
                            name="telephone"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        />
                    </div>

                    <!-- Autres informations -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Autres informations</label
                        >
                        <textarea
                            name="autresInformations"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        ></textarea>
                    </div>

                    <!-- Bouton d'envoi -->
                    <div class="flex justify-center">
                        <button
                            type="submit"
                            class="px-4 py-2 text-white bg-blue-900 rounded-md"
                        >
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
#Contact {
    background-image: url("~/assets/car.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
</style>
