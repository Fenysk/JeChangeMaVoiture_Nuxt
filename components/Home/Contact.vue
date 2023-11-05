<script setup lang="ts"></script>

<template>
    <div id="Contact" class="w-full">
        <div class="w-full h-full px-0 py-16 backdrop-blur lg:px-32 2xl:px-72">
            <div
                class="w-full h-full mx-auto text-white bg-[#000000CC] py-16 md:px-[10%] xl:px-[20%] shadow border-y-4 lg:border-4 border-blue-900 lg:rounded-3xl"
            >
                <h2 class="px-4 mb-4 text-4xl font-semibold">
                    Votre projet automobile
                </h2>

                <p class="px-4 text-xl">
                    Vous souhaitez acheter un nouveau véhicule ?<br />
                    Remplissez simplement ce formulaire, je vous ferai un retour
                    sous
                    <b class="text-blue-200">24h</b> !<br />
                    <a
                        href="/contact"
                        class="block w-fit px-4 py-2 mt-8 text-xl font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800"
                    >
                        Je change ma voiture
                    </a>
                </p>
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
