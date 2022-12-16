<template>
  <NuxtLayout>
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
      <HelloWorld007/>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const description = "Build an amazing Nuxt 3 app with Nuxt.Tips";

useHead({
  title: `Home Page - ${description}`,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>
