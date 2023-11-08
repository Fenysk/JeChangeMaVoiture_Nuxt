<script setup lang="ts">
const clients = await $fetch("/api/clients");
</script>

<template>
    <main class="pt-44 bg-gray-100">
        <div class="py-8 container mx-auto max-w-3xl">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-semibold">Avis clients</h2>

                <NuxtLink to="/dashboard/clients/new" class="button mb-4">
                    Ajouter un nouvel avis client
                </NuxtLink>
            </div>

            <ul class="flex flex-col gap-4">
                <li v-for="client in clients" :key="client.id">
                    <div
                        class="flex border-4 border-blue-900 bg-blue-100 shadow rounded-lg overflow-hidden p-4 gap-4"
                    >
                        <img
                            :src="client.image"
                            :alt="'Photo de ' + client.name"
                            class="w-24 aspect-square object-cover rounded"
                        />
                        <div>
                            <span class="text-lg font-semibold">{{
                                client.name
                            }}</span>
                            <span
                                >, {{ client.age }} ans,
                                {{ client.profession }}</span
                            >
                            <!-- Quotation -->
                            <blockquote class="italic text-gray-700">
                                {{ client.testimony }}
                            </blockquote>
                        </div>
                        <div id="Controls" class="ml-auto flex flex-col gap-2">
                            <NuxtLink :to="`/dashboard/clients/${client.id}`">
                                <IconsEdit
                                    class="w-10 h-10 bg-white rounded p-2 border shadow hover:scale-110 hover:text-blue-600 transition-all"
                                />
                            </NuxtLink>
                            <button @click.stop="deleteClient(client.id)">
                                <IconsTrash
                                    class="w-10 h-10 bg-white rounded p-2 border shadow hover:scale-110 hover:text-red-600 transition-all"
                                />
                            </button>
                        </div>
                    </div>
                </li>
                <li v-if="clients.length === 0">
                    <div
                        class="flex border-4 border-blue-900 bg-blue-100 shadow rounded-lg overflow-hidden p-4 gap-4"
                    >
                        <div class="flex flex-col gap-2">
                            <span class="text-lg font-semibold">
                                Aucun avis client
                            </span>
                            <span
                                >Ajoutez un avis client en cliquant sur le
                                bouton ci-dessus</span
                            >
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </main>
</template>

<style scoped>
.button {
    @apply px-4 py-2 bg-blue-500 text-white rounded block w-fit;
}
</style>
