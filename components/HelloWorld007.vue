<template>
  <div>
    hello world
    {{ Counter.count }}
    <br/>
    <button class="rounded bg-amber-800 text-amber-50" @click="Counter.increment">increment</button>
    <br/>
    <button @click="Counter.decrement">decrement</button>
    <div>pos: {{ x }}, {{ y }}</div>
    <Icon name="clarity:calendar-solid-badged"/>
    <br/>
    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Pink to orange
  </span>
</button>
  </div>
</template>

<script setup lang="ts">
import {useCounter} from "~/store/counter";

const Counter = useCounter()

const {x, y} = useMouse()

</script>

<style scoped>

</style>
