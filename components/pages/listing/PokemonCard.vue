<script lang="ts" setup>
import { useQuery } from "@tanstack/vue-query";

export interface PokemonCardProps {
  name: string;
}

const props = withDefaults(defineProps<PokemonCardProps>(), {});

const fetchPokemon = async (name: string) => {
  let fetchUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const res = await fetch(fetchUrl);
  return res.json();
};

const { isPending, data } = useQuery({
  queryKey: ["pokemon", props.name],
  queryFn: () => fetchPokemon(props.name),
});
</script>

<template>
  <UiCard class="w-[153px] h-[190px]">
    <span v-if="isPending"></span>
    <NuxtLink
      v-else
      :to="`/pokemon/${data.id}`"
      class="text-center w-[153px] h-[190px] py-[18px] flex flex-col"
    >
      <NuxtImg
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`"
        :alt="data.name"
        width="40"
        height="40"
        class="mx-auto"
      />
      <CommonTitle level="h3" class="py-4 leading-4">{{
        data.name
      }}</CommonTitle>
      <span class="font-secondary font-bold text-[9px] leading-[12px]"
        >Cód: {{ data.id }}</span
      >
      <div class="grow flex items-stretch">
        <CommonPokemonTypes
          :data="
            data.types.map((pokemonType:any) => {
              return pokemonType.type.name;
            })
          "
          class="self-end grow"
        />
      </div>
    </NuxtLink>
  </UiCard>
</template>
