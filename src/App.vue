<script setup>
// non primitive type
import { reactive } from 'vue'

const appState = reactive({
  hasSession: true,
  dataSession: {
    username: 'fandisafira',
    name: 'Fandi'
  }
})

const rawHtml = '<p class="my-html">My Html</p>'
const idBlog = 'myBlog'

// local register
import MainButton from '@/components/MainButton.vue'

/**
 * move to global
 */
// import OptionComponent from './components/OptionComponent.vue';
// import CompotitionComponent from './components/CompotitionComponent.vue';

const greetingGuest = (name, gender) => {
  let greeting = 'Hello, '
  let male = 'Mr. '
  let female = 'Mrs. '

  switch (gender) {
    case 'M':
      greeting += male
      break

    case 'F':
      greeting += female
      break

    default:
      greeting += `${male}/${female} `
      break
  }
  greeting += name

  return greeting
}

const changeValue = () => {
  const myName = document.getElementById('yourName')
  const myUsername = document.getElementById('yourUsername')

  appState.dataSession.name = myName.value
  appState.dataSession.username = myUsername.value

  document.getElementById('yourName').value = null
  document.getElementById('yourUsername').value = null
}
</script>

<template>
  <MainButton :title="`Login`" />
  <MainButton :title="`Logout`" />
  <MainButton :disabled="true" />

  <!-- calling function -->
  <h1>{{ greetingGuest(appState.dataSession.name, 'M') }}</h1>

  <option-component />
  <CompotitionComponent />

  <!-- not rendered as tag html -->
  <div>{{ rawHtml }}</div>

  <!-- more safe from xss -->
  <div v-html="rawHtml" :id="idBlog"></div>

  <div>
    <label for="name">Name</label><br>
    <input type="text" id="yourName">
  </div>
  
  <br>

  <div>
    <label for="username">Username</label><br>
    <input type="text" id="yourUsername">
  </div>

  <br>

  <button @click="changeValue">Change</button>

</template>

<style scoped></style>
