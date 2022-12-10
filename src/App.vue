<template>
  <router-view></router-view>
  <div class="red" @click="add">{{ count }}</div>
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
