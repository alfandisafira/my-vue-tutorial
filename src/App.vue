<script setup>
import { provide, ref } from 'vue'

const name = ref('Alfandi')
const updateName = () => {
  name.value = 'Alfandi Safira'
}

provide('nameManager', {
  name,
  updateName,
})

import CompotitionComponent from './components/CompotitionComponent.vue'
</script>

<template>
  <CompotitionComponent />
</template>

<style scoped></style>
