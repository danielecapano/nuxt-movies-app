<script setup lang="ts">
	import type { Movie } from '~~/server/types/types';
	import { yearByDate } from '~~/shared/utils/helpers';

	const { movie, index, posterWidth } = defineProps<{
		movie: Movie;
		index: number;
		posterWidth: number;
	}>();

	const cardRef = useTemplateRef('card');
	const { width: currentWidth } = useElementSize(cardRef);
	const coverOffset = computed(() =>
		Math.max(0, (posterWidth - currentWidth.value) / 2),
	);
</script>

<template>
	<article class="movie-card" ref="card">
		<div class="cover-container">
			<NuxtImg
				:src="movie.cover"
				sizes="300px"
				densities="x1"
				format="avif"
				class="cover"
			/>

			<div class="rating">
				<!-- <RatingCirle :rating="movie.average" :size="30" /> -->
			</div>
		</div>
		<div class="info">
			<p
				class="title font-newsreader text-lg font-medium text-accent-gold mb-2"
			>
				{{ movie.title }}
			</p>
			<div class="flex items-center gap-2 mb-2">
				<div class="tech-tag gold">
					<Rating :average="movie?.average" :width="50" :font-size="11" />
				</div>
				<span class="tech-tag">
					{{ yearByDate(movie.releaseDate) }}
				</span>
			</div>
			<div class="tech-tag normal-case">
				{{ movie.genres?.toString() }}
			</div>
			<NuxtLink
				:to="`movie/${movie.id}`"
				class="flex items-center self-end gap-2 font-mono text-xs mt-auto hover:text-accent-gold transition-colors"
			>
				Vai alla scheda
				<AppIcon name="iconamoon:arrow-right-1-light" />
			</NuxtLink>
		</div>
	</article>
</template>

<style scoped>
	.movie-card {
		flex: 1 1 0;
		display: flex;
		min-width: 0;
		overflow: hidden;
		transition:
			flex 800ms ease,
			opacity 400ms ease,
			filter 400ms ease;
		height: 100%;
		background-color: var(--color-accent-gold-subtle);
		border: 1px solid var(--border-hairline);
		.cover-container {
			position: relative;
			flex-shrink: 0;
			width: var(--card-w);
			aspect-ratio: 2 / 3;
			overflow: hidden;
			transform: translateX(calc(v-bind(coverOffset) * -1px));
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
		.info {
			display: flex;
			flex-direction: column;
			align-items: start;
			flex: 1;
			width: 350px;
			opacity: 0;
			flex-shrink: 0;
			/* height: 100%; */
			padding: 1rem;
			transition: opacity 400ms ease;
			transition-delay: 200ms;
		}
		&:hover {
			flex: 0 0 calc(var(--card-w) + 350px);
			.info {
				opacity: 1;
			}
		}
	}

	.title {
		line-height: 1.3;
		height: 2lh;
	}
</style>
