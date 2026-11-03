<script setup lang="ts">


</script>

<template>
  <header class=" p-4 border-b border-outline">
    <div class="container flex items-center justify-between">
        <div class="size-10">
            <img src="/logo.svg" alt="logo">
        </div>
        <nav class="flex gap-4">
            <NuxtLink to="/" active-class="text-primary"
  exact-active-class="font-bold">Home</NuxtLink>
            <NuxtLink to="/about" active-class="text-primary"
  exact-active-class="font-bold">About</NuxtLink>
        </nav>
        <Theme />
    </div>
  </header>
</template>

<style scoped>

</style>