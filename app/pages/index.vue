<script setup lang="ts">
	const { data: movies } = await useFetch('/api/movies/home');
	const trending = movies.value?.trendind;
	const popular = movies.value?.popular;
	const topRated = movies.value?.topRated;
	const nowPlaying = movies.value?.nowPlaying;
	const upcoming = movies.value?.upcoming;

	const section = useTemplateRef('section');

	const { width } = useElementSize(section);

	const gap = 16;
	const posterWidth = computed(() => (width.value - gap * 4) / 5);
</script>

<template>
	<div class="block overflow-auto">
		<Hero :trending="trending" v-if="trending" />

		<section>
			<div
				class="flex items-center justify-between border-b border-border-hairline pb-4 mb-9"
			>
				<h3 class="text-[2rem] font-newsreader font-bold">Popolari</h3>
				<!-- <p>Poster width: {{ posterWidth }}</p> -->
				<NuxtLink
					to="/populars"
					class="flex items-center gap-2 font-mono text-xs text-text-secondary tracking-wider hover:text-accent-gold transition-colors cursor-pointer"
				>
					<p>Vedi tutti</p>
					<AppIcon name="iconamoon:arrow-right-1-light" />
				</NuxtLink>
			</div>

			<div class="movies-showcase" ref="section">
				<HomeCard
					v-for="(movie, index) in popular"
					:movie="movie"
					:index="index"
					:posterWidth="posterWidth"
				/>
			</div>
		</section>
		<section>
			<div
				class="flex items-center justify-between border-b border-border-hairline pb-4 mb-9"
			>
				<h3 class="text-[2rem] font-newsreader font-bold">I più votati</h3>
				<NuxtLink
					to="/topRated"
					class="flex items-center gap-2 font-mono text-xs text-text-secondary tracking-wider hover:text-accent-gold transition-colors cursor-pointer"
				>
					<p>Vedi tutti</p>
					<AppIcon name="iconamoon:arrow-right-1-light" />
				</NuxtLink>
			</div>
			<div class="grid-container">
				<div class="movies-showcase">
					<HomeCard
						v-for="(movie, index) in topRated"
						:movie="movie"
						:index="index"
						:posterWidth="posterWidth"
					/>
				</div>
			</div>
		</section>
		<section>
			<div
				class="flex items-center justify-between border-b border-border-hairline pb-4 mb-9"
			>
				<h3 class="text-[2rem] font-newsreader font-bold">Ora al cinema</h3>
				<NuxtLink
					to="/nowPlaying"
					class="flex items-center gap-2 font-mono text-xs text-text-secondary tracking-wider hover:text-accent-gold transition-colors cursor-pointer"
				>
					<p>Vedi tutti</p>
					<AppIcon name="iconamoon:arrow-right-1-light" />
				</NuxtLink>
			</div>
			<div class="grid-container">
				<div class="movies-showcase">
					<HomeCard
						v-for="(movie, index) in nowPlaying"
						:movie="movie"
						:index="index"
						:posterWidth="posterWidth"
					/>
				</div>
			</div>
		</section>
		<section>
			<div
				class="flex items-center justify-between border-b border-border-hairline pb-4 mb-9"
			>
				<h3 class="text-[2rem] font-newsreader font-bold">Prossimamente</h3>
				<NuxtLink
					to="/upcoming"
					class="flex items-center gap-2 font-mono text-xs text-text-secondary tracking-wider hover:text-accent-gold transition-colors cursor-pointer"
				>
					<p>Vedi tutti</p>
					<AppIcon name="iconamoon:arrow-right-1-light" />
				</NuxtLink>
			</div>
			<div class="grid-container">
				<div class="movies-showcase">
					<HomeCard
						v-for="(movie, index) in upcoming"
						:movie="movie"
						:index="index"
						:posterWidth="posterWidth"
					/>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
	.hero {
		position: relative;
		display: grid;
		width: 100%;
	}

	section {
		padding: 3.5rem 3rem;
		&:nth-child(odd) {
			background-color: var(--bg-surface);
		}
	}

	.movies-showcase {
		--gap: 1rem;
		--cols: 5;
		display: flex;
		gap: var(--gap);
		container-type: inline-size;
		--card-w: calc((100cqw - (var(--cols) - 1) * var(--gap)) / var(--cols));
		&:has(.movie-card:hover) {
			.movie-card:not(:hover) {
				opacity: 0.8;
				filter: grayscale(0.5);
			}
		}
	}
</style>
