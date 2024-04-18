<script lang="ts">
export type PokemonCard = {
  id: number;
  name: string;
  types: string[];
};
</script>
<script lang="ts" setup>
export interface PokemonCardProps {
  pokemon: PokemonCard;
}

const props = withDefaults(defineProps<PokemonCardProps>(), {});
</script>

<template>
  <UiCard>
    <NuxtLink
      :to="`/pokemon/${pokemon.id}`"
      class="text-center w-[153px] h-[190px] py-[18px] flex flex-col"
    >
      <NuxtImg
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
        :alt="pokemon.name"
        width="40"
        height="40"
        class="mx-auto"
      />
      <CommonTitle level="h3" class="py-4 leading-4">{{
        pokemon.name
      }}</CommonTitle>
      <span class="font-secondary font-bold text-[9px] leading-[12px]"
        >Cód: {{ pokemon.id }}</span
      >
      <div class="grow flex items-stretch">
        <CommonPokemonTypes :data="pokemon.types" class="self-end grow" />
      </div>
    </NuxtLink>
  </UiCard>
</template>
