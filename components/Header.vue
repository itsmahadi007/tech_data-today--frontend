<template>
  <nav id="header" class="fixed w-full z-10 top-0 bg-blue-100">
    <div
      class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3"
    >
      <div class="pl-4">
        <NuxtLink
          class="text-gray-900 no-underline hover:no-underline font-extrabold text-xl"
          to="/"
        >
          {{ siteTitle }}
        </NuxtLink>
      </div>

      <div class="block lg:hidden pr-4">
        <button
          id="nav-toggle"
          class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        class="w-full flex-grow lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li v-for="(nav, index) in navigationLinks" :key="index" class="mr-3">
            <NuxtLink
              class="inline-block py-2 px-4 text-gray-900 no-underline"
              :to="nav.link"
              >{{ nav.title }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { navigationLinks } from "../types/navigation";

const siteTitle = "Nuxt.Tips";
const navigationLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
] as navigationLinks;
</script>
