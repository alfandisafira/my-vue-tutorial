<script setup>
// toggle props not defined
defineOptions({
  // inheritAttrs: false
  inheritAttrs: true,
})

// handling props inherit
import { useAttrs } from 'vue'
const attrs = useAttrs()

const { title, disabled } = defineProps({
  title: {
    type: String,
    default: 'Submit',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  click: {
    type: Function,
  },
})
</script>

<template>
  <div>My Button</div>

  <!-- put inherit in this attr -->
  <button v-bind="attrs" @click="click" :disabled="disabled" class="button">{{ title }}</button>
</template>

<style scoped>
.button {
  border-radius: 10px;
  color: #fff;
  background-color: salmon;
  border: 1px solid red;
  padding: 5px;
}

.disabled {
  color: black;
  background-color: #ccc;
}
</style>
