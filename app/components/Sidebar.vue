<script setup lang="ts"></script>

<template>
	<aside
		class="sidebar row-span-2 p-4 border-r border-border-hairline font-mono text-sm"
	>
		<Logo />
		<nav class="flex flex-col gap-4 mt-12 text-surface-tonal-highest">
			<NuxtLink
				to="/"
				active-class="text-gold-400 bg-surface hover:text-primary  border-l-3 border-l"
				class="px-4 py-2 font-medium hover:bg-surface hover:text-on-surface transition-colors duration-150 ease-in-out"
			>
				<div class="flex items-center gap-3">
					<span>Home</span>
				</div>
			</NuxtLink>
			<NuxtLink
				to="/populars"
				active-class="text-gold-400 bg-surface hover:text-primary border-l"
				class="px-4 py-3 font-medium hover:bg-surface hover:text-on-surface transition-colors duration-150 ease-in-out"
			>
				<div class="flex items-center gap-3">
					<span>Film popolari</span>
				</div>
			</NuxtLink>
			<NuxtLink
				to="/nowPlaying"
				active-class="text-gold-400 bg-surface hover:text-primary"
				class="px-4 py-3 font-medium rounded-lg hover:bg-surface hover:text-on-surface transition-colors duration-150 ease-in-out"
			>
				<div class="flex items-center gap-3">
					<span>Film al Cinema</span>
				</div>
			</NuxtLink>
			<NuxtLink
				to="/upcoming"
				active-class="text-gold-400 bg-surface hover:text-primary"
				class="px-4 py-3 font-medium rounded-lg hover:bg-surface hover:text-on-surface transition-colors duration-150 ease-in-out"
			>
				<div class="flex items-center gap-3">
					<span>Film in uscita</span>
				</div>
			</NuxtLink>
			<NuxtLink
				to="/topRated"
				active-class="text-gold-400 bg-surface hover:text-primary"
				class="px-4 py-3 font-medium rounded-lg hover:bg-surface hover:text-on-surface transition-colors duration-150 ease-in-out"
			>
				<div class="flex items-center gap-3">
					<span>I più votati</span>
				</div>
			</NuxtLink>
		</nav>
	</aside>
</template>
