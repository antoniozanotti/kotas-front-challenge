<script lang="ts" setup>
export type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TitleProps {
  level: TitleLevel;
}

const props = withDefaults(defineProps<TitleProps>(), {});
</script>

<template>
  <component :is="level" class="font-bold text-[14px]"><slot /></component>
</template>
