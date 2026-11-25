<script setup lang="ts">
	useHead({
		script: [
			{
				innerHTML: `
        (() => {
          try {
            const saved = localStorage.getItem('theme');
            const prefersDark = window.matchMedia(
              '(prefers-color-scheme: dark)',
            ).matches;

            const theme = saved ?? (prefersDark ? 'dark' : 'light');

            document.documentElement.setAttribute('data-theme', theme);
          } catch {
            document.documentElement.setAttribute('data-theme', 'light');
          }
        })();
      `,
				tagPosition: 'head',
			},
		],
	});
	import '@fontsource-variable/plus-jakarta-sans';
	import '@fontsource-variable/plus-jakarta-sans/wght-italic.css';

	import '@fontsource-variable/bodoni-moda';
	import '@fontsource-variable/bodoni-moda/opsz-italic.css';
	import '@fontsource-variable/bodoni-moda/opsz.css';
	import '@fontsource-variable/bodoni-moda/wght-italic.css';
	import '@fontsource-variable/jetbrains-mono';
	import '@fontsource-variable/newsreader';
	import '@fontsource-variable/newsreader/opsz-italic.css';
	import '@fontsource-variable/newsreader/opsz.css';
	import '@fontsource-variable/newsreader/wght-italic.css';
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
