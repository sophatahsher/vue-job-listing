<script setup>
import { defineProps  } from 'vue';
defineProps({
    title: {
        type: String,
        default: 'Become a NannyWorks',
    },
});
</script>

<template>
<h1 class="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl">
    {{ title }}
</h1>
</template>