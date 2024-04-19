<script lang="ts" setup>
const route = useRoute();
const pokemonName = route.params.slug.toString();
const { isPending, data } = usePokemonByNameQuery(pokemonName);
</script>

<template>
  <div class="md:w-[541px] mx-auto">
    <span v-if="isPending"></span>
    <div v-else>
      <PagesPokemonHeader
        :pokemon="{ id: data.id, name: data.name, types: data.types.map((pokemonType:any) => {return pokemonType.type.name;}) }"
      />
      <PagesPokemonAbilities
        :abilities="data.abilities.map((ability:any) => {
          return ability.ability.name;
        })"
      />
    </div>
    <NuxtLink
      to="/"
      class="text-[#00A3FF] font-bold text-[14px] leading-[41px] h-[41px] w-[100px] block mx-auto text-center mt-[48px]"
      >Voltar</NuxtLink
    >
  </div>
</template>
