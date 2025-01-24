<script setup>
import MainButton from '@/components/MainButton.vue';
import OptionComponent from './components/OptionComponent.vue';
import CompotitionComponent from './components/CompotitionComponent.vue';

const nameGuest = 'Alfandi';
</script>

<template>
  <MainButton/>
  <MainButton/>
  <MainButton/>
  <MainButton/>

  <h1>Hello, {{ nameGuest }}</h1>
  
  <OptionComponent/>
  <CompotitionComponent/>
</template>

<style scoped></style>
