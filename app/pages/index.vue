<script setup lang="ts">
	const { data: movies } = await useFetch('/api/movies/home');
	const trending = movies.value?.trendind;
	const popular = movies.value?.popular;
	const topRated = movies.value?.topRated;
	const nowPlaying = movies.value?.nowPlaying;
	const upcoming = movies.value?.upcoming;
</script>

<template>
	<div class="block overflow-auto">
		<Hero :trending="trending" v-if="trending" />
		<div class="bg-surface-container-low rounded-2xl py-4">
			<section class="mb-8">
				<h3 class="text-xl font-black mb-4 pl-12">Popolari</h3>
				<div class="grid-container">
					<div class="grid">
						<HomeCard
							v-for="(movie, index) in popular"
							:movie="movie"
							:index="index"
						/>
					</div>
				</div>
			</section>
			<section class="mb-8">
				<h3 class="text-xl font-black mb-4 pl-12">I più votati</h3>
				<div class="grid-container">
					<div class="grid">
						<HomeCard
							v-for="(movie, index) in topRated"
							:movie="movie"
							:index="index"
						/>
					</div>
				</div>
			</section>
			<section class="mb-8">
				<h3 class="text-xl font-black mb-4 pl-12">Al cinema</h3>
				<div class="grid-container">
					<div class="grid">
						<HomeCard
							v-for="(movie, index) in nowPlaying"
							:movie="movie"
							:index="index"
						/>
					</div>
				</div>
			</section>
			<section class="mb-8">
				<h3 class="text-xl font-black mb-4 pl-12">Prossimamente</h3>
				<div class="grid-container">
					<div class="grid">
						<HomeCard
							v-for="(movie, index) in upcoming"
							:movie="movie"
							:index="index"
						/>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<style scoped>
	.hero {
		position: relative;
		display: grid;
		width: 100%;
		margin-bottom: 1rem;
	}

	.grid-container {
		width: 100%;
		overflow-x: auto;
		padding-inline: 3rem;
		mask-image: linear-gradient(
			to right,
			transparent 2rem,
			black 3rem,
			black calc(100% - 3rem),
			transparent calc(100% - 2rem)
		);
	}

	.grid {
		--gap: 1rem;
		display: grid;

		gap: var(--gap);
		width: calc(200% + var(--gap));
		grid-template-columns: repeat(10, 1fr);
	}
</style>
