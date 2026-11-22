<script setup lang="ts"></script>

<template>
	<aside
		class="sidebar row-span-2 p-4 border-r border-border-hairline font-mono text-sm"
	>
		<Logo />
		<nav class="flex flex-col gap-4 mt-12 text-surface-tonal-highest">
			<NuxtLink to="/" active-class="active" class="nav-item">
				<div class="flex items-center gap-3">
					<span>Home</span>
				</div>
			</NuxtLink>
			<NuxtLink to="/populars" active-class="active" class="nav-item">
				<div class="flex items-center gap-3">
					<span>Film popolari</span>
				</div>
			</NuxtLink>
			<NuxtLink to="/nowPlaying" active-class="active" class="nav-item">
				<div class="flex items-center gap-3">
					<span>Film al Cinema</span>
				</div>
			</NuxtLink>
			<NuxtLink to="/upcoming" active-class="active" class="nav-item">
				<div class="flex items-center gap-3">
					<span>Film in uscita</span>
				</div>
			</NuxtLink>
			<NuxtLink to="/topRated" active-class="active" class="nav-item">
				<div class="flex items-center gap-3">
					<span>I più votati</span>
				</div>
			</NuxtLink>
		</nav>
	</aside>
</template>

<style scoped>
	.nav-item {
		position: relative;
		padding: 0.5rem 1rem;
		font-family: 'JetBrains Mono Variable', monospace;
		font-size: 0.875rem;
		transition: background-color 180ms ease-in-out;
		&.active {
			background-color: var(--accent-gold-subtle);
			color: var(--accent-gold);
			&:before {
				background-color: var(--accent-gold-border);
				scale: 1;
			}
		}
		&::before {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			width: 3px;
			height: 100%;
			background-color: var(--text-primary);
			scale: 1 0;
			transform-origin: bottom;
			transition: scale 180ms ease-in-out;
		}
		&:hover:not(.active) {
			background-color: var(--bg-surface);
			&::before {
				scale: 1;
			}
		}
	}
</style>
