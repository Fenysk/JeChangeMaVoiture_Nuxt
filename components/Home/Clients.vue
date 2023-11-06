<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectCoverflow } from "swiper/modules";

const clients = ref([]);

async function fetchClients() {
    clients.value = await $fetch("clients");
}

onBeforeMount(() => {
    fetchClients();
});
</script>

<template>
    <section id="Clients" class="relative" v-if="clients.length > 0">
        <div class="flex w-full text-white bg-black">
            <div class="w-full py-12 pt-32">
                <h2 class="px-2 text-4xl font-semibold text-center">
                    Ils m'ont fait confiance !
                </h2>

                <div class="mt-4">
                    <swiper
                        v-if="clients.length > 0"
                        class="h-[50vh]"
                        :modules="[EffectCoverflow, Autoplay]"
                        :effect="'coverflow'"
                        :grab-cursor="true"
                        :centered-slides="true"
                        :update-on-window-resize="true"
                        :autoplay="{ delay: 3000, disableOnInteraction: true }"
                        :speed="1000"
                        :breakpoints="{
                            0: {
                                slidesPerView: 1,
                                coverflowEffect: {
                                    depth: 1000,
                                },
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                        }"
                        :coverflow-effect="{
                            rotate: 40,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                        }"
                    >
                        <swiper-slide
                            v-for="client in clients"
                            :key="client.id"
                            class="p-8 sm:p-4"
                        >
                            <HomeClient :client="client" />
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
