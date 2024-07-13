<script setup>
import { defineProps } from 'vue';

defineProps({
    bg: {
        type: String,
        default: 'bg-gray-100'
    }
});
</script>

<template>
    <div :class="`${bg} max-w-xlg p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`">
        <slot></slot>
    </div>
</template>