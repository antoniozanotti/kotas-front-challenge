<script lang="ts" setup>
export type Variant = "primary" | "secondary";

export interface CardProps {
  variant?: Variant;
}

const props = withDefaults(defineProps<CardProps>(), {
  variant: "primary"
});

const variantClasses = computed(()=> {
  if(props.variant=="primary"){
    return "shadow-c1";
  }
  return "shadow-md-c1";
});
</script>
<template>
  <div :class="`bg-white rounded-lg ${variantClasses}`">
    <slot />
  </div>
</template>
