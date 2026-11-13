<script setup lang="ts">



</script>

<template>
   <div class="layout-grid h-screen overflow-hidden">
    <Sidebar />
        <Header />
        <main class="transition-theme flex-1 min-w-0 col-start-2 mt-4 mr-4 mb-4 overflow-y-auto rounded-2xl">
    
            <slot></slot>
        </main>
   </div>
  
</template>

<style scoped>
</style>