<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

onMounted(() => {
  console.log(`The initial Composition count is ${count.value}.`)
})
</script>

<template>
  <h6>Composition</h6>
  <div>
    <!-- non directive, using v-xxx -->
    <button v-on:click="decrement">-</button>
    
    <button>{{ count }}</button>

    <!-- directive, using @ instead v-on -->
    <button @click="increment">+</button>
  </div>
</template>
