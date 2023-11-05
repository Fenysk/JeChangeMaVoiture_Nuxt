<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const voitures = <any>[];

for (let i = 0; i < 10; i++) {
    voitures.push({
        image: `https://images.bfmtv.com/5WFJEvvCnxpyn6uu1pCMY_oQyhY=/0x0:2048x1152/2048x0/images/Ferrari-812-Competizione-1459629.jpg`,
    });
}
</script>

<template>
    <section id="Hero" class="relative overflow-hidden">
        <div
            class="flex flex-col items-center justify-center w-full min-h-screen py-8"
        >
            <div
                style="backdrop-filter: blur(10px)"
                class="flex flex-col w-full mt-32 overflow-hidden bg-gray-200 border-blue-900 shadow-xl border-y-4 lg:border-4 lg:w-2/3 xl:w-1/2 bg-opacity-60 lg:rounded-3xl"
            >
                <div
                    class="py-6 text-4xl italic font-bold text-center text-white bg-black"
                >
                    <h2>Envie d'une nouvelle voiture ?</h2>
                </div>

                <div class="flex flex-col md:flex-row">
                    <div class="flex items-center justify-center md:w-3/5">
                        <p
                            class="p-8 text-3xl italic leading-10 text-center md:p-16"
                        >
                            Je la trouve pour vous aux meilleures conditions,
                            livrée directement chez vous !
                        </p>
                    </div>

                    <div id="Carousel" class="flex md:w-2/5">
                        <swiper
                            :modules="[Autoplay]"
                            :autoplay="{
                                delay: 2000,
                                disableOnInteraction: false,
                            }"
                            :speed="1000"
                            :loop="true"
                            :slides-per-view="1"
                            class="overflow-hidden h-[40vh] md:h-auto"
                        >
                            <swiper-slide
                                v-for="voiture in voitures"
                                :key="voiture.name"
                            >
                                <img
                                    :src="voiture.image"
                                    :alt="voiture.name"
                                    class="object-cover object-center h-full mx-auto aspect-video"
                                />
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>

        <video
            autoplay
            playsinline
            loop
            muted
            src="~/assets/animation.mp4"
            class="absolute top-0 left-0 h-full w-full object-cover z-[-100]"
        ></video>
    </section>
</template>

<style scoped></style>
