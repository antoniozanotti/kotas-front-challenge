<script lang="ts" setup>
export interface SearchProps {
  placeholder: string;
}

const props = withDefaults(defineProps<SearchProps>(), {});

const searchValue = ref("");

const showSearchIcon = computed(() => {
  return searchValue.value == "" ? "" : "invisible";
});

const showX = computed(() => {
  return searchValue.value == "" ? "invisible" : "";
});

const emit = defineEmits<{
  (e: "changeSearchValue", searchValue: string): void;
}>();

function onClickX() {
  searchValue.value = "";
  emit("changeSearchValue", searchValue.value);
}
</script>

<template>
  <form role="search" @submit.prevent="false">
    <label
      class="bg-white border-[#E1E1E1] border-[2px] flex rounded-[50px] h-[40px] lg:h-[48px] items-center"
    >
      <span :class="`w-[37px] text-center ${showSearchIcon}`">
        <img
          src="/images/search-icon.svg"
          alt="Search Icon"
          class="ml-[10px]"
        />
      </span>
      <input
        type="text"
        :placeholder="placeholder"
        class="grow text-[14px] leading-[20px] text-primary outline-none"
        v-model="searchValue"
        @keyup="$emit('changeSearchValue', searchValue)"
      />
      <span
        :class="`w-[16px] mr-[23px] text-center text-[12px] cursor-pointer ${showX}`"
        @click="onClickX"
        >X</span
      >
    </label>
  </form>
</template>
