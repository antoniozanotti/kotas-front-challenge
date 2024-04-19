<script lang="ts" setup>
export interface LabelProps {
  label: string;
}

const props = withDefaults(defineProps<LabelProps>(), {});
</script>

<template>
  <span class="uppercase text-center w-[64px] h-[16px]">{{ label }}</span>
</template>
