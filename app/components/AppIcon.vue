<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string;
    size?: number;
  }>(),
  {
    size: 16,
  },
);
</script>

<template>
  <span class="icon-wrapper">
    <Icon :name="name" mode="svg" :size="size" />
  </span>
</template>

<style scoped>
.icon-wrapper {
  width: v-bind('`${size}px`');
  height: v-bind('`${size}px`');
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
</style>
