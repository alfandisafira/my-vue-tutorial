<script setup>
import { ref, onMounted, inject } from 'vue'

const nameManager = inject('nameManager')

// primitive type like: String, Number, Boolean
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
  <h1>{{ nameManager.name }}</h1>
  <button @click="nameManager.updateName">Change Name</button>

  <h6>Composition</h6>
  <div>
    <!-- non directive, using v-xxx -->
    <button v-on:click="decrement">-</button>

    <button>{{ count }}</button>

    <!-- directive, using @ instead v-on -->
    <button @click="increment">+</button>
  </div>
</template>
