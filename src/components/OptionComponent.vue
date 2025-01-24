<script>
export default {
  data() {
    return {
      count: 0,
    }
  },

  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },

  mounted() {
    console.log(`The initial Option count is ${this.count}.`)
  },
}
</script>

<template>
  <h6>Option</h6>
  <div>
    <button @click="decrement">-</button>
    <button>{{ count }}</button>
    <button @click="increment">+</button>
  </div>
</template>
