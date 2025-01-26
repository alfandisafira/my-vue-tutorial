<script setup>
import { reactive } from 'vue'

const authorSoe = reactive({
  name: 'Soe Hok Gie',
  books: ['Catatan Seorang Demonstran', 'Sekali Lagi'],
})

const authorHamka = reactive({
  name: 'Buya HAMKA',
  books: ['Tenggelamnya Kapal Van der Wijck', "Di Bawah Lindungan Ka'bah"],
})

const removeAuthor = (name) => {
  name.books.pop()
}
</script>

<template>
  <div>
    {{ authorSoe.name }}
    <!-- will render 1 -->
    <span v-if="authorSoe.books.length > 1">Has a books</span>
    <span v-else-if="authorSoe.books.length == 1">Has a book</span>
    <span v-else>Don't have book</span>
  </div>
  <button @click="removeAuthor(authorSoe)">remove</button>

  <div>
    {{ authorHamka.name }}
    <!-- will render all but different display -->
    <span v-show="authorHamka.books.length > 1">Has a books</span>
    <span v-show="authorHamka.books.length == 1">Has a book</span>
    <span v-show="authorHamka.books.length <= 0">Don't have book</span>
  </div>
  <button @click="removeAuthor(authorHamka)">remove</button>
</template>

<style scoped></style>
