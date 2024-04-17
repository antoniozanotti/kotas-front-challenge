<template>
  <div class="w-[330px] sm:w-[507px] lg:w-[829px] mx-auto">
    <UiSearch />
    <h1 class="font-bold text-[14px] leading-[18px] pt-[49px] pb-[36px]">Pokémons</h1>
    <UiGrid>
      <PagesListingPokemonCard
        v-for="item in [...Array(24).keys()]"
        :pokemon="{id: 4, name: 'Charmander', types: ['fire', 'water']}"
      />
    </UiGrid>
  </div>
  <UiScroll />
</template>
