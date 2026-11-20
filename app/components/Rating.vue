<script setup lang="ts">
	const {
		average,
		width = 70,
		fontSize = 16,
	} = defineProps<{
		average: number | undefined;
		width?: number;
		fontSize?: number;
	}>();
	const percentage = computed(() =>
		average ? `${(average / 10) * 100}%` : 'N/D',
	);
</script>

<template>
	<div class="flex items-center gap-2">
		<div class="text-gold-400 relative" :style="{ width: `${width}px` }">
			<StarsOutline />
			<div
				class="rating-fill"
				:style="{ '--rating': percentage }"
				v-if="average"
			>
				<StarsFilled />
			</div>
		</div>
		<span
			:style="{ fontSize: `${fontSize}px` }"
			class="text-gold-400 font-mono"
			>{{ average?.toFixed(1) }}</span
		>
	</div>
</template>

<style scoped>
	.rating-fill {
		position: absolute;
		inset: 0 auto 0 0;
		width: var(--rating);
		overflow: hidden;
	}
</style>
