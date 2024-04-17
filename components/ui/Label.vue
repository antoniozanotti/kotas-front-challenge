<script lang="ts" setup>
export interface LabelProps {
  label: string;
}

const props = withDefaults(defineProps<LabelProps>(), {});
</script>

<template>
  <span class="uppercase text-center w-16 h-4">{{ label }}</span>
</template>
