<script setup lang="ts">
const {rating, size = 50} = defineProps<{
    rating: number
    size?: number
}>()

const strokeWidth = 8
const radius = (100 - strokeWidth) / 2
const circumference = 2 * Math.PI * radius
const progress = computed(() => {
  return (rating / 10) * circumference
})
</script>

<template>
  <svg viewBox="0 0 100 100" :width="size" :height="size">
    <circle
        cx="50"
        cy="50"
        :r="radius"
        fill = "var(--container)"
        fill-opacity="0.3"
        stroke="var(--surface-variant)"
        :stroke-width="strokeWidth"
        
        />
    <circle
        cx="50"
        cy="50"
        :r="radius"
        fill = "none"
        stroke="var(--primary)"
        :stroke-width="strokeWidth"
        transform="rotate(-90 50 50)"
        :stroke-dasharray="`${progress} ${circumference}`"
        stroke-linecap="round"
        />
    <text 
        class="rating-value"
        x="50"
        y="50"
        text-anchor="middle"
        dominant-baseline="central"
    >
    {{ rating.toFixed(1) }}
</text>
  </svg>
</template>

<style scoped>
.rating-value {
    fill: white;
    font-family: var(--font-sans);
    font-size: 30px;
    font-weight: 800;
    
}
</style>