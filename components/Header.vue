<script setup lang="ts"></script>

<template>
    <header class="w-full bg-black text-white fixed z-[100]">
        <nav class="flex flex-col items-center justify-center h-full gap-4 p-4">
            <a href="/" id="branding" class="flex items-center h-full">
                <img
                    src="/logo.webp"
                    alt="Logo JeChangeMaVoiture.fr"
                    class="object-contain w-72 sm:w-96"
                />
            </a>

            <div class="flex flex-col items-center gap-2 sm:gap-16 sm:flex-row">
                <!-- Téléphone -->
                <a
                    href="tel:+33614879484"
                    class="flex items-center gap-2 text-xl text-white"
                    ><IconsPhone class="text-2xl text-white" />06 14 87 94 84</a
                >

                <!-- E-mail -->
                <a
                    href="mailto:contact@jechangemavoiture.fr"
                    class="flex items-center gap-2 text-xl text-white"
                    ><IconsMail
                        class="text-2xl text-white"
                    />contact@jechangemavoiture.fr</a
                >
            </div>
        </nav>
    </header>
</template>
