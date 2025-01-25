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
})
</script>

<template>
  <button :disabled="disabled">{{ title }}</button>
</template>

<style scoped>
* {
  border-radius: 10px;
}
</style>
