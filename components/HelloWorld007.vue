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
  </div>
</template>

<script setup lang="ts">
import {useCounter} from "~/store/counter";

const Counter = useCounter()

const {x, y} = useMouse()

</script>

<style scoped>

</style>
