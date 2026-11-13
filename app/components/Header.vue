<script setup lang="ts">
	const search = ref('');

	function handleSearch() {
		if (!search.value.trim()) return;

		navigateTo({
			path: '/search',
			query: {
				query: search.value.trim(),
			},
		});
		resetSearch();
	}

	function resetSearch() {
		search.value = '';
	}
</script>

<template>
	<header class="p-4 bg-surface-container-low rounded-2xl mt-4 mr-4">
		<div class="container flex items-center justify-between">
			<form
				@submit.prevent="handleSearch"
				class="bg-surface w-1/2 relative rounded-lg text-surface-container-highest"
			>
				<div class="absolute size-4 left-3 top-1/2 -translate-y-1/2">
					<AppIcon name="fa6-solid:magnifying-glass" />
				</div>
				<input
					name="search"
					v-model="search"
					type="text"
					placeholder="Cerca un film..."
					autocomplete="off"
					lang="it"
					spellcheck="false"
					class="w-full py-2 pl-9 rounded-lg focus:ring-1 focus:ring-outline"
				/>
				<button
					type="button"
					class="absolute size-4 right-3 top-1/2 -translate-y-1/2 cursor-pointer"
					v-if="search"
					@click="resetSearch"
				>
					<AppIcon name="fa6-solid:xmark" />
				</button>
			</form>
			<Theme />
		</div>
	</header>
</template>

<style scoped>
	.rating-fill {
		position: absolute;
		inset: 0 auto 0 0;
		width: 74%;
		overflow: hidden;
	}
</style>
