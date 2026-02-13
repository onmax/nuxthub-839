<script setup lang="ts">
const { data } = await useAsyncData('home', () => $fetch('/api/hello'))
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>{{ data }}</p>
    <NuxtLink to="/about">Go to About</NuxtLink>
  </div>
</template>
