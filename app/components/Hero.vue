<script setup lang="ts">
	import { Autoplay, EffectFade } from 'swiper/modules';
	import { Swiper, SwiperSlide } from 'swiper/vue';
	const { trending } = defineProps<{ trending: Movie[] }>();
</script>

<template>
	<Swiper
		:loop="true"
		:modules="[Autoplay, EffectFade]"
		effect="fade"
		:autoplay="{
			delay: 5000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		}"
		:speed="1000"
	>
		<SwiperSlide v-for="movie in trending" :key="movie.id">
			<HeroCard :movie="movie" />
		</SwiperSlide>
		/>
	</Swiper>
</template>

<style scoped>
	.hero {
		position: relative;
		display: grid;
		width: 100%;
		margin-bottom: 1rem;
	}
</style>
