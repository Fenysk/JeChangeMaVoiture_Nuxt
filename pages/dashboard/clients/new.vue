<script setup lang="ts">
const name = ref(null);
const age = ref(null);
const profession = ref(null);
const testimony = ref(null);
const image = ref("client.webp");

async function uploadImage(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    const path = await $fetch("/api/images/upload", {
        method: "POST",
        body: formData,
    });
    console.log(path)
    image.value = path;
}

async function createClient() {
    try {
        const result = await $fetch("/api/clients/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name.value,
                age: age.value,
                profession: profession.value,
                testimony: testimony.value,
                image: image.value,
            }),
        });
        navigateTo("/dashboard");
    } catch (error) {
        alert(error.message);
    }
}
</script>

<template>
    <main class="pt-44 container mx-auto">
        <form @submit.prevent="createClient">
            <h1 class="text-xl font-bold mb-4">Création d'un nouveau client</h1>
            <input
                required
                type="text"
                v-model="name"
                placeholder="Nom du client"
            />
            <input
                required
                type="number"
                v-model="age"
                placeholder="Age du client"
            />
            <input
                required
                type="text"
                v-model="profession"
                placeholder="Profession du client"
            />
            <textarea
                required
                type="text"
                v-model="testimony"
                placeholder="Témoignage du client"
            />

            <div>
                <input
                    @change="uploadImage($event)"
                    required
                    type="file"
                    name="image"
                    placeholder="Image du client"
                />
            </div>

            <button
                type="submit"
                class="border px-4 py-2 rounded bg-blue-500 text-white"
            >
                Créer le client
            </button>
        </form>
    </main>
</template>

<style scoped>
form {
    @apply m-8 p-8 border-4 border-blue-900 rounded bg-blue-100 flex flex-col gap-4 container mx-auto max-w-xl;
}
input,
textarea {
    @apply border px-3 py-2;
}
</style>
