// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite';
export default defineNuxtConfig({
	modules: ['@nuxt/image', '@nuxt/icon/module', '@vueuse/nuxt'],
	devtools: { enabled: true },
	compatibilityDate: '2024-04-03',
	css: ['~/assets/css/main.css', 'swiper/css', 'swiper/css/effect-fade'],

	vite: {
		plugins: [tailwindcss()],
	},
	runtimeConfig: {
		tmdbAccessToken: '',
	},
	image: {
		domains: ['image.tmdb.org'],
	},
});
