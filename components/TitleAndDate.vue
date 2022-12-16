<template>
  <p
    class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl"
  >
    {{ title }}
  </p>
  <p class="text-sm md:text-base font-normal text-gray-600">
    Published {{ date }}
  </p>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  date: String,
});
</script>
