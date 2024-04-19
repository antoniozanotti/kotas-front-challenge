<script lang="ts" setup>
import { useScroll } from "@vueuse/core";

// trigger fetchNextPage when window arrived at bottom
const { arrivedState } = useScroll(window);
watch(arrivedState, (arrivedState) => {
  if (arrivedState.bottom) {
    fetchNextPage();
  }
});

// search and infinite pagination logic
const searchValue = ref("");
const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetching,
  isFetchingNextPage,
  isPending,
} = usePokemonsInfiniteQuery(searchValue);
</script>

<template>
  <div class="w-[330px] sm:w-[507px] lg:w-[829px] mx-auto">
    <UiSearch
      class="my-[19px] mx-[7px]"
      placeholder="Pesquise por nome ou código"
      @changeSearchValue="
        (payload) => {
          searchValue = payload;
        }
      "
    />
    <h1
      class="font-bold text-[14px] leading-[18px] mt-[30px] mb-[36px] ml-[4px]"
    >
      Pokémons
    </h1>
    <span v-if="isPending"></span>
    <div v-else-if="data">
      <span v-if="isFetching && !isFetchingNextPage"></span>
      <UiGrid>
        <template v-for="(group, index) in data.pages" :key="index">
          <PagesListingPokemonCard
            v-for="pokemon in group.results ?? [group]"
            :key="pokemon.name"
            :name="pokemon.name"
          />
        </template>
      </UiGrid>
      <button
        @click="() => fetchNextPage()"
        :disabled="!hasNextPage || isFetchingNextPage"
      >
        <span v-if="isFetchingNextPage">Carregando mais...</span>
        <span v-else-if="hasNextPage">Carregar Mais</span>
        <span v-else></span>
      </button>
    </div>
  </div>
</template>
