<script setup>
import MainButton from './components/MainButton.vue'
</script>

<template>
  <!-- send props not defined -->
  <MainButton class="my-button" title="Cancel" @click="console.log('test')" />
</template>

<style scoped></style>
