<script lang="ts">
export type Pokemon = {
  id: number;
  name: string;
  types: string[];
};
</script>
<script lang="ts" setup>
export interface HeaderProps {
  pokemon: Pokemon;
}

const props = withDefaults(defineProps<HeaderProps>(), {});
</script>

<template>
  <UiCard
    class="text-center h-[220px] flex flex-col mt-[32px] mb-[24px]"
    variant="secondary"
  >
    <NuxtImg
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
      :alt="pokemon.name"
      width="110"
      height="110"
      class="mx-auto mt-[16px]"
    />
    <CommonTitle level="h1" class="pt-[11px] leading-[26px]">{{
      pokemon.name
    }}</CommonTitle>
    <div class="grow flex items-stretch mb-[12px]">
      <CommonPokemonTypes :data="pokemon.types" class="self-end grow" />
    </div>
  </UiCard>
</template>
