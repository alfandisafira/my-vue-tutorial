<script setup>
import { reactive, ref } from 'vue'
import MainButton from './components/MainButton.vue'

const isDisable = ref(false)

const makeDisable = () => (isDisable.value = !isDisable.value)

const styleObj = reactive({
  fontFamily: 'Franklin Gothic Medium',
  fontSize: '20px',
})
</script>

<template>
  <MainButton
    :click="makeDisable"
    title="Active"
    :disabled="isDisable"
    :class="{ disabled: isDisable }"
    :style="styleObj"
  />
</template>

<style scoped></style>
