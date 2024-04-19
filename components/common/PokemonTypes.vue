<script lang="ts" setup>
export interface PokemonTypesProps {
  data: string[];
}

const props = withDefaults(defineProps<PokemonTypesProps>(), {});

function bgColour(label: string): string {
  let mapColoursPokemonTypes = {
    "grass": "bg-[#08FEC3]",
    "poison": "bg-[#AF08FE]",
    "water": "bg-[#00A3FF]",
    "fire": "bg-[#FE0808]",
    "electric": "bg-[#FFB800]",
    "ground": "bg-[#85826E]",
    "fairy": "bg-[#FBA1EC]",
    "normal": "bg-[#C4C4C4]",
    "flying": "bg-[#5317FC]"
  };
  return mapColoursPokemonTypes.hasOwnProperty(label) ? mapColoursPokemonTypes[label] : "bg-[#0E0E0E]";
}
</script>

<template>
  <div class="flex justify-center gap-[4px]">
    <UiLabel
      :class="`${bgColour(item)} text-white font-semibold text-[8px] leading-[16px] rounded-lg`"
      v-for="item in data"
      :label="item"
    />
  </div>
</template>
