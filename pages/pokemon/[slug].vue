<template>
  <div class="md:w-[541px] mx-auto">
    <PagesPokemonHeader
      :pokemon="{ id: 4, name: 'aaa', types: ['aaa', 'bbb'] }"
    />
    <PagesPokemonAbilities :abilities="['afd', 'asdf', 'ccc', 'ddd']" />
    <NuxtLink to="/" class="text-[#00A3FF] font-bold text-sm leading-[41px] h-[41px] w-[100px] block mx-auto text-center mt-[48px]">Voltar</NuxtLink>
  </div>
</template>
