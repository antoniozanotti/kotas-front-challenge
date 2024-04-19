<script lang="ts" setup>
import { onBeforeUnmount, onMounted } from "vue"

// trigger fetchNextPage when window arrived at bottom
function onScroll() {
  if(Math.ceil(window.innerHeight + window.scrollY)+300 >= document.body.offsetHeight){
    fetchNextPage();
  }
}

onMounted(() => {
    window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
})

// search and infinite pagination logic
const searchValue = ref("");
const { data, fetchNextPage, isFetching, isFetchingNextPage, isPending } =
  usePokemonsInfiniteQuery(searchValue);
</script>

<template>
  <Head>
    <Title>Listagem de Pokémons</Title>
  </Head>
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
    </div>
  </div>
</template>
