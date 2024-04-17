<template>
  <UiSearch />
  <h1>Pokémons</h1>
  <UiGrid>
    <PagesListingPokemonCard
      v-for="item in [...Array(24).keys()]"
      :pokemon="{id: 4, name: 'Charmander', types: ['fire', 'water']}"
    />
  </UiGrid>
  <UiScroll />
</template>
