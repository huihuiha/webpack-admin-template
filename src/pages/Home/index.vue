<template>
    Home page
    <button @click="user.add()">count: {{ user.count }}</button>
</template>

<script setup>

import { useUserStore } from "@/stores/user";
const user = useUserStore()
</script>