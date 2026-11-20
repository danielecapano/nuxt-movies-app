<script setup lang="ts">
	import type { Movie } from '~~/server/types/types';

	const { movie } = defineProps<{
		movie: Movie;
	}>();
</script>

<template>
	<div class="hero">
		<figure class="hero-figure border-b border-border-hairline">
			<img :src="movie.poster" class="hero-img" />
		</figure>
		<div class="hero-content">
			<h3
				class="hero-title font-bodoni italic text-6xl text-gold-400 text-shadow-xs mb-1"
			>
				{{ movie.title }}
			</h3>
			<div class="flex items-center gap-2 mb-2">
				<div class="tech-tag big gold">
					<Rating :average="movie?.average" :font-size="12" />
				</div>
				<span class="tech-tag big">{{ yearByDate(movie.releaseDate) }}</span>
			</div>
			<div class="flex gap-2 mb-2">
				<span v-for="genre in movie.genres" class="tech-tag big">{{
					genre
				}}</span>
			</div>
			<p class="hero-description w-1/2 text-sm text-text-secondary mb-4">
				{{ movie.description }}
			</p>
			<div class="flex items-center gap-2 text-sm">
				<NuxtLink
					:to="`/movie/${movie.id}`"
					class="flex items-center gap-2 text-accent-gold bg-accent-gold-subtle border border-accent-gold-border font-mono font-medium text-xs uppercase px-5 py-3 hover:bg-gold-400 hover:text-blu-ink-950 transition-colors duration-200"
				>
					<AppIcon name="fa6-solid:film" />
					Vai alla scheda
				</NuxtLink>
				<button
					class="flex items-center gap-2 bg-transparent border border-border-hairline font-mono font-medium text-xs uppercase px-5 py-3 cursor-pointer hover:border-border-subtle hover:bg-bg-surface transition-colors duration-200"
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
		.hero-figure {
			position: relative;
			aspect-ratio: 21 / 9;
			overflow: hidden;
			grid-row: 1;
			grid-column: 1;
			background: var(--color-blu-ink-950);
		}

		.hero-img {
			position: relative;
			display: block;
			height: 100%;
			width: 100%;
			object-fit: cover;
			mask-image: linear-gradient(to right, transparent 40%, black 100%);
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
