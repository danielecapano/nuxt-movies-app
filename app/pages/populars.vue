<script setup lang="ts">
	const { data: movies } = useFetch('/api/movies/popular');
	console.log(movies.value);
</script>

<template>
	<div class="p-6">
		<img src="/banner.avif" alt="banner" class="banner" />
		<div class="mb-24">
			<h1 class="font-bodoni text-5xl font-bold mb-2">Film Popolari</h1>
			<p class="text-text-secondary text-sm">
				I titoli più amati dal pubblico, sempre aggiornati.
			</p>
		</div>
		<div class="grid grid-cols-4 gap-4">
			<div
				v-for="movie in movies"
				class="border border-border-hairline bg-bg-surface"
			>
				<figure class="relative poster">
					<NuxtImg
						:src="movie.poster"
						sizes="300px"
						densities="x1"
						format="avif"
					/>
					<h3
						class="absolute bottom-2 left-2 font-bodoni font-medium text-lg/5 text-accent-gold-bright z-10"
					>
						{{ movie.title }}
					</h3>
				</figure>
				<div
					class="flex items-center justify-between info font-mono text-xs text-text-secondary p-2"
				>
					{{ yearByDate(movie.releaseDate) }}
					<div class="flex items-center gap-1 text-accent-gold text-xs">
						<AppIcon name="ic:outline-star" :size="16" />
						<span>{{ movie.average.toFixed(2) }}/10</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.poster {
		img {
			mask-image: linear-gradient(
				to top,
				transparent 0%,
				var(--color-bg-deep) 70%
			);
		}
	}
	.banner {
		position: absolute;
		z-index: -1;
		right: 0;
		top: 0;
		width: 75%;
		translate: 0 -15%;
		opacity: 0.8;
		mask-image: linear-gradient(to top, transparent 20%, black 60%);
	}
</style>
