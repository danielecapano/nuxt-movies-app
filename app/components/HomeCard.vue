<script setup lang="ts">
	import type { Movie } from '~~/server/types/types';
	import { yearByDate } from '~~/shared/utils/helpers';

	const { movie, index } = defineProps<{
		movie: Movie;
		index: number;
	}>();
</script>

<template>
	<article class="movie-card">
		<div class="poster-container">
			<div class="cover-container">
				<NuxtImg
					:src="movie.cover"
					sizes="300px"
					densities="x1"
					format="avif"
					class="cover"
				/>

				<div class="rating">
					<RatingCirle :rating="movie.average" :size="30" />
				</div>
			</div>
			<div class="position">
				<span class="number">{{ index + 1 }}</span>
			</div>
		</div>

		<p class="title text-xs font-bold mb-2">{{ movie.title }}</p>
		<p class="text-xs text-surface-container-highest font-bold">
			{{ yearByDate(movie.releaseDate) }}
		</p>
	</article>
</template>

<style scoped>
	.movie-card {
		.poster-container {
			position: relative;
			container-type: inline-size;
			margin-bottom: 0.5rem;
		}
		.cover-container {
			position: relative;
			overflow: hidden;
			width: 65%;
			aspect-ratio: 2 / 3;
			margin-left: auto;
			border-radius: 0.5rem;

			/* box-shadow: -2px 0 4px rgba(0,0,0,0.7); */
			.rating {
				position: absolute;
				right: 0.5rem;
				top: 0.5rem;
			}
			.cover {
				height: 100%;
				width: 100%;
				object-fit: cover;
			}
		}
		.position {
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: start;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			.number {
				display: block;
				font-size: 70cqw;
				line-height: 1;
				text-box-trim: trim-both;
				text-box-edge: cap alphabetic;
				font-weight: 800;
				/* -webkit-text-stroke: 2px white;
        -webkit-text-fill-color: var(--background);
        -webkit-text-fill-color: transparent;
        paint-order: stroke fill; */
				opacity: 0.15;
				text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
			}
		}
		.title {
			line-height: 1.3;
			height: 2lh;
		}
	}
</style>
