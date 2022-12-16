<template>
  <div>
    <div
      class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
      style="font-family: Georgia, serif"
    >
      <!--Title-->
      <div class="font-sans">
        <p class="text-base md:text-sm text-green-500 font-bold">
          &lt;
          <a
            href="#"
            class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
            >Back to Blog</a
          >
        </p>
        <TitleAndDate :title="'Contact Us'" :date="'17 November 2022'" />
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

      <p class="py-6">
        The basic blog page layout is available and all using the default
        Tailwind CSS classes (although there are a few hardcoded style tags). If
        you are going to use this in your project, you will want to convert the
        classes into components.
      </p>

      <h1 class="py-2 font-sans">Heading 1</h1>
      <h2 class="py-2 font-sans">Heading 2</h2>
      <h3 class="py-2 font-sans">Heading 3</h3>
      <h4 class="py-2 font-sans">Heading 4</h4>
      <h5 class="py-2 font-sans">Heading 5</h5>
      <h6 class="py-2 font-sans">Heading 6</h6>

      <SubscribeToNewsletter />
      <p class="mb-5" />
    </div>
  </div>
</template>
