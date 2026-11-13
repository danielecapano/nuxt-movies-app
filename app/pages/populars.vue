<script setup lang="ts">
const {data: movies}  = useFetch("/api/movies/popular")
console.log(movies.value);

</script>

<template>
  <div class="grid grid-cols-5 gap-2">

    <NuxtImg v-for="movie in movies" :src="movie.cover" sizes="300px" densities="x1" format="avif"/>
  </div>
 
</template>

<style scoped>
</style>