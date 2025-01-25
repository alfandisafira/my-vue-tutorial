<script setup>
// boolean
const isDisabled = false

// bind all
const buttonAttr = {
  id: 'myButton',
  class: 'my-button',
  disabled: isDisabled,
}
</script>

<template>
  <button v-bind="buttonAttr">{{ buttonAttr.disabled ? 'Loading' : 'Submit' }}</button>
</template>

<style scoped>
* {
  border-radius: 10px;
}
</style>
