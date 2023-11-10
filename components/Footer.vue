<script setup lang="ts"></script>

<template>
    <footer
        class="flex flex-col items-center justify-center w-full h-48 gap-4 p-4 text-white bg-black md:flex-row md:h-24 md:gap-16"
    >
        <div class="flex flex-col items-center gap-4 sm:flex-row">
            <img
                loading="lazy"
                src="/logo.webp"
                alt="Logo JeChangeMaVoiture.fr"
                class="object-contain w-64"
            />
            <p class="text-xl">© 2023</p>
        </div>
        <NuxtLink to="/legal" class="text-xl">Mentions légales</NuxtLink>
    </footer>
</template>
