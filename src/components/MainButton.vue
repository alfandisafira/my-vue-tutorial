<script setup>
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
  <button @click="click" :disabled="disabled" class="button">{{ title }}</button>
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
