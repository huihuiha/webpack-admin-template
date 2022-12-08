<template>
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
  color: red;
}
</style>
