<script setup lang="ts"></script>

<template>
  <aside
    class="sidebar row-span-2 bg-surface-container-low m-4 p-4 rounded-2xl"
  >
    <Logo />
    <nav class="flex flex-col gap-4 mt-12 text-surface-tonal-highest">
      <NuxtLink
        to="/"
        active-class="text-primary bg-surface hover:text-primary"
        class="px-4 py-3 font-medium rounded-lg hover:bg-surface hover:text-on-surface transition-colors duration-150 ease-in-out"
      >
        <div class="flex items-center gap-3">
          <AppIcon name="fa6-solid:house" />
          <span>Home</span>
        </div>
      </NuxtLink>
      <NuxtLink
        to="/populars"
        active-class="text-primary bg-surface hover:text-primary"
        class="px-4 py-3 font-medium rounded-lg hover:bg-surface hover:text-on-surface transition-colors duration-150 ease-in-out"
      >
        <div class="flex items-center gap-3">
          <AppIcon name="fa6-solid:arrow-trend-up" />
          <span>Film popolari</span>
        </div>
      </NuxtLink>
      <NuxtLink
        to="/nowPlaying"
        active-class="text-primary bg-surface hover:text-primary"
        class="px-4 py-3 font-medium rounded-lg hover:bg-surface hover:text-on-surface transition-colors duration-150 ease-in-out"
      >
        <div class="flex items-center gap-3">
          <AppIcon name="fa6-solid:ticket" />
          <span>Film al Cinema</span>
        </div>
      </NuxtLink>
      <NuxtLink
        to="/upcoming"
        active-class="text-primary bg-surface hover:text-primary"
        class="px-4 py-3 font-medium rounded-lg hover:bg-surface hover:text-on-surface transition-colors duration-150 ease-in-out"
      >
        <div class="flex items-center gap-3">
          <AppIcon name="fa6-solid:calendar-day" />
          <span>Film in uscita</span>
        </div>
      </NuxtLink>
      <NuxtLink
        to="/topRated"
        active-class="text-primary bg-surface hover:text-primary"
        class="px-4 py-3 font-medium rounded-lg hover:bg-surface hover:text-on-surface transition-colors duration-150 ease-in-out"
      >
        <div class="flex items-center gap-3">
          <AppIcon name="fa6-solid:trophy" />
          <span>I più votati</span>
        </div>
      </NuxtLink>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  height: calc(100vh - 2rem);
}
</style>
