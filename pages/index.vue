<script lang="ts" setup>
const searchValue = ref("");
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
    <UiGrid>
      <PagesListingPokemonCard
        v-for="item in [...Array(24).keys()]"
        :pokemon="{ id: 4, name: 'Charmander', types: ['fire', 'water'] }"
      />
    </UiGrid>
  </div>
  <UiScroll />
</template>
