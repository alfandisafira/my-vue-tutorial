<script setup>
// local register
import MainButton from '@/components/MainButton.vue'

/**
 * move to global
 */
// import OptionComponent from './components/OptionComponent.vue';
// import CompotitionComponent from './components/CompotitionComponent.vue';

const nameGuest = 'Alfandi'
</script>

<template>
  <MainButton />

  <h1>Hello, {{ nameGuest }}</h1>

  <option-component />
  <CompotitionComponent />
</template>

<style scoped></style>
