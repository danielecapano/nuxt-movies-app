<script setup lang="ts">
	const route = useRoute();

	const search = computed(() => route.query.query);
	console.log(search.value);
	const { data: movies } = useFetch('/api/movies/search', {
		query: { query: search },
	});
</script>

<template>
	<div>
		<div class="grid grid-cols-5 gap-2">
			<NuxtLink :to="`movie/${movie.id}`" v-for="movie in movies">
				<NuxtImg
					:src="movie.cover"
					sizes="300px"
					densities="x1"
					format="avif"
				/>
			</NuxtLink>
		</div>
	</div>
</template>

<style scoped></style>
