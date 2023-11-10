<script setup lang="ts">
const route = useRoute();

const client = await $fetch(`/api/clients/${route.params.id}`);
const site_url = process.env.SITE_URL;

const name = ref(client.name);
const age = ref(client.age);
const profession = ref(client.profession);
const testimony = ref(client.testimony);
const image = ref(client.image);

async function uploadImage(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    const path = await $fetch("/api/images/upload", {
        method: "POST",
        body: formData,
    });
    image.value = path;
}

async function updateClient() {
    try {
        const result = await $fetch(`/api/clients/${route.params.id}`, {
            method: "PUT",
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
        navigateTo("/dashboard-9a4d6f");
    } catch (error) {
        alert(error.message);
    }
}
</script>

<template>
    <main class="pt-44 container mx-auto">
        <form @submit.prevent="updateClient">
            <h1 class="text-xl font-bold mb-4">Modification du client</h1>
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
                    type="file"
                    name="image"
                    placeholder="Image du client"
                />
                <img :src="site_url + image" class="aspect-square object-cover w-32" />
            </div>

            <button
                type="submit"
                class="border px-4 py-2 rounded bg-blue-500 text-white"
            >
                Modifier
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
