<script setup lang="ts">
const { data } = await useAsyncData('about', () => $fetch('/api/hello', { query: { page: 'about' } }))
</script>

<template>
  <div>
    <h1>About</h1>
    <p>{{ data }}</p>
    <NuxtLink to="/">Go Home</NuxtLink>
  </div>
</template>
