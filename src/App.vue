<script setup>
import { ref, reactive, computed } from 'vue'

const authors = reactive([
  {
    name: 'Soe Hok Gie',
    books: ['Catatan Seorang Demonstran', 'Sekali Lagi'],
  },
  {
    name: 'Buya HAMKA',
    books: ['Tenggelamnya Kapal Van der Wijck', "Di Bawah Lindungan Ka'bah"],
  },
])

// will be rendered every time
// eventhought no change
// const hasAuthor = () => {
//   console.log(authors.length);
//   return authors.length > 0 ? 'Yes' : 'No';
// }

// will be rendered if change
const hasAuthor = computed(() => {
  console.log(authors.length)
  return authors.length > 0 ? 'Yes' : 'No'
})

const removeAuthor = () => {
  authors.pop()
}

const count = ref(0)

const increment = () => {
  count.value++
}
</script>

<template>
  <div>has author: {{ hasAuthor }}</div>
  <button @click="removeAuthor">remove</button>

  <br />
  <button @click="increment">{{ count }}</button>
</template>

<style scoped></style>
