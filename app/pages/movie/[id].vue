<script setup lang="ts">
	import type { MovieDetails } from '~~/server/types/types';

	const route = useRoute();

	const movieId = route.params.id;

	const base_url = 'https://image.tmdb.org/t/p/original/';

	const { data: movie } = useFetch<MovieDetails>(`/api/movies/${movieId}`);
	const { data: logos } = useFetch('/api/movies/companies/logo');
	console.log(logos.value);
</script>

<template>
	<div v-if="movie" class="">
		<section class="hero">
			<figure class="hero-image aspect-video overflow-hidden relative">
				<img :src="movie.poster" alt="" />
				<div class="absolute bottom-8 left-8 z-10">
					<h1
						class="font-newsreader font-semibold text-6xl text-accent-gold-bright"
					>
						{{ movie.title }}
					</h1>
					<h3 class="font-newsreader italic text-text-muted text-xl mb-3">
						{{ movie.tagline }}
					</h3>
					<div class="flex items-center gap-2 mb-2">
						<span class="tech-tag big">{{ movie.duration }} min.</span>
						<span class="tech-tag big">{{ yearByDate(movie.date) }}</span>
						<span class="tech-tag big gold">
							<Rating :average="movie.average" :font-size="12" />
						</span>
					</div>
					<div class="flex items-center gap-2 mb-2">
						<span v-for="genre in movie.genres" class="tech-tag big">{{
							genre
						}}</span>
					</div>
				</div>
			</figure>
		</section>

		<section class="grid grid-cols-6 gap-4 mb-8">
			<div v-for="actor in movie.cast">
				<figure
					class="rounded-full aspect-square overflow-hidden border-3 border-accent-gold"
				>
					<img
						:src="actor.picture"
						alt=""
						class="w-full h-full object-cover object-center"
					/>
				</figure>
				<div class="flex flex-col items-center justify-center">
					<p class="font-newsreader font-medium">{{ actor.name }}</p>
					<p class="font-mono text-text-secondary text-xs">
						{{ actor.character }}
					</p>
				</div>
			</div>
		</section>
		<div v-for="director in movie.director">
			<img :src="director?.picture" alt="" />
		</div>
	</div>
</template>

<style scoped>
	.hero-image {
		img {
			mask-image:
				linear-gradient(to top, transparent 20%, black 50%),
				linear-gradient(to right, transparent 10%, black 50%);
			mask-composite: intersect;
		}
	}
</style>
