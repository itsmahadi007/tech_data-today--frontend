<template>
  <div>
    <div
      class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
      style="font-family: Georgia, serif"
    >
      <div class="font-sans">
        <BackToBlog />
        <TitleAndDate :title="'About Us'" :date="'17 November 2022'" />
      </div>
      <p class="py-6">
        👋 Welcome fellow
        <a
          class="text-green-500 no-underline hover:underline"
          href="https://www.tailwindcss.com"
          >Tailwind CSS</a
        >
        and
        <a
          class="text-green-500 no-underline hover:underline"
          href="https://www.nuxt.com"
          >Nuxt 3</a
        >
        fan. This starter kit provides a good starting point to create your own
        Nuxt 3 app. I've tried to include just enough features to help you get
        started right.
      </p>

      <p>
        Today's date comes from a plugin: <strong>{{ today }}</strong>
      </p>

      <p class="py-6">This starter kit includes</p>

      <h1 class="py-2 font-sans">✔ Pages</h1>
      <h2 class="py-2 font-sans">✔ Layout</h2>
      <h3 class="py-2 font-sans">✔ useHead composable</h3>
      <h3 class="py-2 font-sans">✔ A custom plugin</h3>
      <h3 class="py-2 font-sans">✔ Components</h3>
      <h3 class="py-2 font-sans">✔ Typescript</h3>
      <h3 class="py-2 font-sans">
        ✔ Typescript type definition file (types/navigation.d.ts)
      </h3>

      <p class="py-6">
        Use examples from this starter kit, to help you build your own Nuxt 3
        app &#128512;
      </p>

      <blockquote class="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
        Example of blockquote - Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet
        ligula.
      </blockquote>

      <p class="py-6">Example code block:</p>
      <Code />
      <p class="mb-5" />
    </div>
  </div>
</template>

<script setup lang="ts">
// This is how you get data from a plugin
// plugins folder
const nuxtApp = useNuxtApp();
const today = nuxtApp.today;
</script>
