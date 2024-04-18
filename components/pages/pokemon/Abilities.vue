<script lang="ts" setup>
export interface AbilitiesProps {
  abilities: string[];
}

const props = withDefaults(defineProps<AbilitiesProps>(), {});
</script>

<template>
  <UiCard variant="secondary">
    <CommonTitle level="h2" class="text-center leading-[12px] pt-[22px] pb-[16px]">Habilidades</CommonTitle>
    <ul class="mx-[6px]">
      <li v-for="ability in abilities" class="text-[12px] text-[#616161] leading-[12px] py-[16px] border-[#F1F4F5] border-t-[1px] px-[12px]">{{ ability }}</li>
    </ul>
  </UiCard>
</template>
