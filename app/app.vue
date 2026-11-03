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
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>