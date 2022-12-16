<template>
  <NuxtLayout>
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
      <AboutContent />
    </div>
  </NuxtLayout>
</template>

<script setup>
const description = "Build an amazing Nuxt 3 app with Nuxt.Tips";

useHead({
  title: `About Us - ${description}`,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>
