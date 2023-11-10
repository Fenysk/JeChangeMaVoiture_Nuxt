<script lang="ts">
export default {
    props: {
        client: {
            type: Object,
            required: true,
        },
    },
};

const site_url = process.env.SITE_URL;
</script>

<template>
    <div
        style="
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 0.9) 20%,
                rgba(0, 0, 0, 0) 60%,
                rgba(0, 0, 0, 0.6) 80%,
                rgba(0, 0, 0, 1) 100%
            );
        "
        class="relative flex w-full h-full border-2 border-blue-900 select-none"
    >
        <div class="p-4">
            <p class="text-3xl text-gray-200">
                {{ client.name }}
                <span class="text-2xl text-gray-300"
                    >{{ client.age }} ans, {{ client.profession }}</span
                >
            </p>
        </div>
        <img
            loading="lazy"
            :src="site_url + client.image"
            :alt="client.name"
            class="absolute h-full top-0 left-0 w-full object-cover z-[-5]"
        />
        <p
            class="absolute bottom-0 left-0 p-4 text-2xl text-white drop-shadow-[2px_5px_3px_rgba(0,0,0,0.7)]"
        >
            {{ client.testimony }}
        </p>
    </div>
</template>
