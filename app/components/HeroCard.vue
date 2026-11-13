<script setup lang="ts">
	import type { Movie } from '~~/server/types/types';

	const { movie } = defineProps<{
		movie: Movie;
	}>();
</script>

<template>
	<div class="hero">
		<figure class="hero-figure">
			<img :src="movie.poster" class="hero-img" />
		</figure>
		<div class="hero-content">
			<h3
				class="hero-title font-serif italic text-6xl text-primary text-shadow-xs mb-1"
			>
				{{ movie.title }}
			</h3>
			<div class="flex items-center gap-4 mb-1">
				<Rating :average="movie?.average" />
				<span class="text-surface-container-highest font-medium">{{
					yearByDate(movie.releaseDate)
				}}</span>
			</div>
			<p class="hero-description w-1/2 text-sm mb-4">
				{{ movie.description }}
			</p>
			<div class="flex items-center gap-2 text-sm">
				<button
					class="flex items-center gap-2 bg-primary text-on-primary font-sans font-bold px-4 py-2 rounded-lg"
				>
					<AppIcon name="fa6-solid:film" />
					Vai alla scheda
				</button>
				<button
					class="flex items-center gap-2 bg-transparent font-sans font-bold border px-4 py-2 rounded-lg"
				>
					<AppIcon name="fa6-solid:plus" />
					La mia lista
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.hero {
		position: relative;
		display: grid;
		width: 100%;
		margin-bottom: 1rem;
		.hero-figure {
			position: relative;
			aspect-ratio: 21 / 9;
			border-radius: 1rem;
			overflow: hidden;
			grid-row: 1;
			grid-column: 1;
			background: var(--color-surface-container-low);
		}

		.hero-img {
			position: relative;
			display: block;
			height: 100%;
			width: 100%;
			object-fit: cover;
			mask-image: linear-gradient(to right, transparent 20%, black 100%);
		}
		.hero-content {
			align-self: end;
			z-index: 2;
			grid-row: 1;
			grid-column: 1;
			margin-inline: 3rem;
			margin-bottom: 3rem;
			overflow: hidden;
			.hero-title {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				line-height: 1.3;
			}
			.hero-description {
				display: -webkit-box;
				-webkit-box-orient: vertical;
				height: 5lh;
				line-height: 1.5;
				line-clamp: 5;
				-webkit-line-clamp: 5;
				overflow: hidden;
			}
		}
	}
</style>
