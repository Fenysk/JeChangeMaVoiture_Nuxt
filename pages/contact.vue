<script setup lang="ts">
useHead({
    title: "JeChangeMaVoiture.fr - Votre projet automobile",
    meta: [
        {
            name: "description",
            content: "Faites-moi part de votre projet automobile, je vous ferai un retour sous 24h !",
        },
    ],
});

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
                    <h3 class="mb-4 font-semibold text-2xl">Vos critères</h3>

                    <!-- Type d'offre -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Type d'offre</label
                        >
                        <div id="Radio">
                            <input
                                required
                                type="radio"
                                name="typeOffre"
                                id="typeOffreNeuf"
                                value="neuf"
                            />
                            <label
                                for="typeOffreNeuf"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Neuf</span>
                            </label>
                            <input
                                required
                                type="radio"
                                name="typeOffre"
                                id="typeOffreOccasion"
                                value="occasion"
                            />
                            <label
                                for="typeOffreOccasion"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Occasion</span>
                            </label>
                        </div>
                    </div>

                    <!-- Type de véhicule -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Type de véhicule</label
                        >
                        <div id="Radio">
                            <!-- Berline -->
                            <input
                                required
                                type="radio"
                                name="typeVehicule"
                                id="typeVehiculeBerline"
                                value="berline"
                            />
                            <label
                                for="typeVehiculeBerline"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Berline</span>
                                <IconsCarsBerline class="w-full h-full" />
                            </label>

                            <!-- Break -->
                            <input
                                required
                                type="radio"
                                name="typeVehicule"
                                id="typeVehiculeBreak"
                                value="break"
                            />
                            <label
                                for="typeVehiculeBreak"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Break</span>
                                <IconsCarsBreak class="w-full h-full" />
                            </label>

                            <!-- Citadine -->
                            <input
                                required
                                type="radio"
                                name="typeVehicule"
                                id="typeVehiculeCitadine"
                                value="citadine"
                            />
                            <label
                                for="typeVehiculeCitadine"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Citadine</span>
                                <IconsCarsCitadine class="w-full h-full" />
                            </label>

                            <!-- Monospace -->
                            <input
                                required
                                type="radio"
                                name="typeVehicule"
                                id="typeVehiculeMonospace"
                                value="monospace"
                            />
                            <label
                                for="typeVehiculeMonospace"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Monospace</span>
                                <IconsCarsMonospace class="w-full h-full" />
                            </label>

                            <!-- SUV -->
                            <input
                                required
                                type="radio"
                                name="typeVehicule"
                                id="typeVehiculeSUV"
                                value="suv"
                            />
                            <label
                                for="typeVehiculeSUV"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>SUV</span>
                                <IconsCarsSUV class="w-full h-full" />
                            </label>

                            <!-- Coupée -->
                            <input
                                required
                                type="radio"
                                name="typeVehicule"
                                id="typeVehiculeCoupee"
                                value="coupee"
                            />
                            <label
                                for="typeVehiculeCoupee"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Coupée</span>
                                <IconsCarsCoupee class="w-full h-full" />
                            </label>

                            <!-- Cabriolet -->
                            <input
                                required
                                type="radio"
                                name="typeVehicule"
                                id="typeVehiculeCabriolet"
                                value="cabriolet"
                            />
                            <label
                                for="typeVehiculeCabriolet"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Cabriolet</span>
                                <IconsCarsCabriolet class="w-full h-full" />
                            </label>

                            <!-- Pick-up -->
                            <input
                                required
                                type="radio"
                                name="typeVehicule"
                                id="typeVehiculePickup"
                                value="pick-up"
                            />
                            <label
                                for="typeVehiculePickup"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Pick-up</span>
                                <IconsCarsPickup class="w-full h-full" />
                            </label>

                            <!-- Autre -->
                            <input
                                required
                                type="radio"
                                name="typeVehicule"
                                id="typeVehiculeAutre"
                                value="autre"
                            />
                            <label
                                for="typeVehiculeAutre"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Autre</span>
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
                        <div id="Radio">
                            <!-- Manuelle -->
                            <input
                                required
                                type="radio"
                                name="typeBoite"
                                id="typeBoiteManuelle"
                                value="manuelle"
                            />
                            <label
                                for="typeBoiteManuelle"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Manuelle</span>
                            </label>

                            <!-- Automatique -->
                            <input
                                required
                                type="radio"
                                name="typeBoite"
                                id="typeBoiteAutomatique"
                                value="automatique"
                            />
                            <label
                                for="typeBoiteAutomatique"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Automatique</span>
                            </label>
                        </div>
                    </div>

                    <!-- Type de moteur -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Type de moteur</label
                        >
                        <div id="Radio">
                            <!-- Essence -->
                            <input
                                required
                                type="radio"
                                name="typeMoteur"
                                id="typeMoteurEssence"
                                value="essence"
                            />
                            <label
                                for="typeMoteurEssence"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Essence</span>
                            </label>

                            <!-- Diesel -->
                            <input
                                required
                                type="radio"
                                name="typeMoteur"
                                id="typeMoteurDiesel"
                                value="diesel"
                            />
                            <label
                                for="typeMoteurDiesel"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Diesel</span>
                            </label>

                            <!-- Hybride -->
                            <input
                                required
                                type="radio"
                                name="typeMoteur"
                                id="typeMoteurHybride"
                                value="hybride"
                            />
                            <label
                                for="typeMoteurHybride"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Hybride</span>
                            </label>

                            <!-- Electrique -->
                            <input
                                required
                                type="radio"
                                name="typeMoteur"
                                id="typeMoteurElectrique"
                                value="electrique"
                            />
                            <label
                                for="typeMoteurElectrique"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Electrique</span>
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
                        <div id="Radio">
                            <!-- Acheter -->
                            <input
                                required
                                type="radio"
                                name="acheterLouer"
                                id="acheterLouerAcheter"
                                value="acheter"
                            />
                            <label
                                for="acheterLouerAcheter"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Acheter</span>
                            </label>

                            <!-- Louer -->
                            <input
                                required
                                type="radio"
                                name="acheterLouer"
                                id="acheterLouerLouer"
                                value="louer"
                            />
                            <label
                                for="acheterLouerLouer"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Louer</span>
                            </label>
                        </div>
                    </div>

                    <!-- Budget maximum -->
                    <div>
                        <label class="block mb-2 font-semibold"
                            >Budget maxi</label
                        >
                        <input
                            required
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
                        <div id="Radio">
                            <!-- Immédiat -->
                            <input
                                required
                                type="radio"
                                name="dateProjet"
                                id="dateProjetImmediat"
                                value="immediat"
                            />
                            <label
                                for="dateProjetImmediat"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Immédiat</span>
                            </label>

                            <!-- Moins de 3 mois -->
                            <input
                                required
                                type="radio"
                                name="dateProjet"
                                id="dateProjetMoins3"
                                value="moins3"
                            />
                            <label
                                for="dateProjetMoins3"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Moins de 3 mois</span>
                            </label>

                            <!-- Plus de 3 mois -->
                            <input
                                required
                                type="radio"
                                name="dateProjet"
                                id="dateProjetPlus3"
                                value="plus3"
                            />
                            <label
                                for="dateProjetPlus3"
                                class="flex items-center mb-2 cursor-pointer"
                            >
                                <span>Plus de 3 mois</span>
                            </label>
                        </div>
                    </div>

                    <h3 class="mb-4 font-semibold text-2xl">Vos coordonnées</h3>

                    <!-- Nom -->
                    <div>
                        <label class="block mb-2 font-semibold">Nom</label>
                        <input
                            required
                            type="text"
                            name="nom"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        />
                    </div>

                    <!-- Prénom -->
                    <div>
                        <label class="block mb-2 font-semibold">Prénom</label>
                        <input
                            required
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
                            required
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
                            required
                            type="number"
                            name="codePostal"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        />
                    </div>

                    <!-- Ville -->
                    <div>
                        <label class="block mb-2 font-semibold">Ville</label>
                        <input
                            required
                            type="text"
                            name="ville"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        />
                    </div>

                    <!-- Pays -->
                    <div>
                        <label class="block mb-2 font-semibold">Pays</label>
                        <input
                            required
                            type="text"
                            name="pays"
                            class="w-full px-4 py-2 mb-4 border rounded-md"
                        />
                    </div>

                    <!-- Email -->
                    <div>
                        <label class="block mb-2 font-semibold">Email</label>
                        <input
                            required
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
                            required
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
                    <div class="flex justify-end">
                        <button
                            type="submit"
                            class="px-4 py-2 text-white bg-blue-900 rounded-md hover:bg-blue-800"
                        >
                            Envoyer votre projet
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
    @apply bg-center bg-cover bg-fixed bg-no-repeat;
}

#Radio {
    @apply flex flex-row gap-4 flex-wrap mb-4;
}

#Radio input[type="radio"] {
    @apply sr-only;
}

#Radio label {
    @apply border w-24 h-24 rounded-lg p-2 flex flex-col justify-around items-center cursor-pointer hover:border-blue-400;
}

#Radio input[type="radio"]:checked + label {
    @apply border-4 border-blue-700;
}
</style>
