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
	<header class="p-4 border-b border-border-hairline">
		<div class="container flex items-center justify-between">
			<form
				@submit.prevent="handleSearch"
				class="bg-surface w-1/2 relative text-text-primary"
			>
				<div
					class="absolute size-4 left-3 top-1/2 -translate-y-1/2 text-text-muted"
				>
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
					class="w-full py-2 pl-9 border border-border-hairline bg-bg-surface focus:border-accent-gold-border transition-colors duration-150"
				/>
				<button
					type="button"
					class="absolute size-4 right-3 top-1/2 -translate-y-1/2 cursor-pointer text-text-muted"
					v-if="search"
					@click="resetSearch"
				>
					<AppIcon name="fa6-solid:xmark" />
				</button>
			</form>
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
