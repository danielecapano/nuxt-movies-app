<script setup lang="ts">
import { onMounted, ref } from 'vue'

const theme = ref<'light' | 'dark'>('light')

// Legge il tema già applicato durante l'inizializzazione
onMounted(() => {
  theme.value =
    document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'dark'
      : 'light'
})

// Alterna il tema e salva la preferenza
function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'

  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}
</script>

<template>
  <button type="button" @click="toggleTheme"
    class=" flex-center bg-primary-container text-on-primary-container hover:bg-surface-container transition-theme size-10 rounded-full cursor-pointer">
    <AppIcon :name="theme === 'dark' ? 'fa6-solid:sun' : 'fa6-solid:moon'" :size=24 />
  </button>
</template>
