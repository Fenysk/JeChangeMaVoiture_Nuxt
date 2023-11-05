<script setup lang="ts">
import { ref } from 'vue';

const isAboutModalOpen = ref(false);

</script>

<template>
  <section id="Clients" class="relative">

    <div class="flex w-full text-white bg-black">

      <div class="w-full px-0 py-12 pb-0 lg:pb-32 lg:px-32 xl:px-64 2xl:px-96">

        <div :class="isAboutModalOpen ? 'w-full' : 'lg:w-[800px]'"
          class="flex flex-col mx-auto overflow-hidden transition-all duration-500 lg:bg-white lg:border-blue-900 lg:flex-row lg:border-4 lg:rounded-3xl">
          <img src="../../assets/Philippe.jpg" alt="Photo de Philippe DUDU, votre accompagnant !"
            class="object-contain w-3/4 mx-auto mt-4 border-blue-900 lg:w-1/3 lg:border-r-4 lg:mt-0">
          <div class="flex flex-col lg:w-2/3">
            <h2 class="p-8 text-2xl text-center bg-black lg:text-left">Philippe DUDU<span class="text-xl font-normal">,
                votre
                accompagnant</span></h2>
            <div class="flex flex-col items-center justify-center h-full text-black bg-white lg:bg-none">
              <p class="p-8 text-2xl leading-10">
                25 ans d'expérience dans l'automobile.<br />
                À votre disposition pour votre projet.
                <button @click="isAboutModalOpen = true" v-if="!isAboutModalOpen"
                  class="block px-4 py-2 mt-8 ml-auto text-xl font-semibold text-white bg-blue-900 rounded-xl">Voir
                  son expérience</button>
              </p>
              <p :class="isAboutModalOpen ? 'p-2 sm:p-4 md:p-8 lg:h-[400px] overflow-y-auto opacity-[1]' : 'opacity-[0] h-0'"
                class="overflow-hidden text-lg transition-all duration-500 bg-gray-100 shadow-inner">

                Après 25 ans d'expérience auprès de différents Groupes de distributeur Automobile, pour vendre,
                encadrer des équipes et répondre aux différents objectifs des Marques, j’ai décidé de mettre à
                disposition mes compétences pour devenir le <b>partenaire de tous vos projets automobiles</b>.
                <br><br>
                Ma <b>priorité</b> sera d’aller chercher la voiture neuve ou occasion de votre choix, au
                meilleur prix, dans les
                meilleurs délais et vous la livrer ensuite à domicile.
                <br><br>
                Pour cela, je mettrai en concurrence <b>tous les distributeurs de la région voir de France</b>,
                pour
                obtenir de leur part les remises nécessaires pour correspondre à votre budget.
                <br><br>
                Mon mot d’ordre est&nbsp;:<br>
                <span><b>La Satisfaction totale de mon Client.</b></span>
                <br><br>
                Mes impératifs&nbsp;sont :<br>
                <span>-<u>Donner les meilleurs conseils</u> pour le choix de la voiture selon vos besoins au
                  quotidien.</span><br>
                <span>-<u>Rechercher le sur-mesure</u> au meilleur prix.</span><br>
                <span>-<u>Apporter la meilleure expertise</u> sur le produit avant l’acquisition.</span>

              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped></style>