<template>
  <router-view></router-view>
  <div class="red" @click="add">{{ count }}</div>
  <button
    class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer"
  >
    TailWindCSS Ready!!
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const count = ref<number>(0);
const add = () => {
  count.value++;
};
</script>
<style scoped>
.red {
  display: flex;
  justify-content: center;
  align-content: center;
  color: red;
}
</style>

