<script setup lang="ts">
	import type { TMDBMovieDetail } from '~~/server/types/types';

	const route = useRoute();

	const movieId = route.params.id;

	const base_url = 'https://image.tmdb.org/t/p/original/';

	const { data: movie } = useFetch<TMDBMovieDetail>(`/api/movies/${movieId}`);
	const { data: logos } = useFetch('/api/movies/companies/logo');
	console.log(logos.value);
</script>

<template>
	<h1 v-if="movie">{{ movie.overview }}</h1>
</template>

<style scoped></style>
