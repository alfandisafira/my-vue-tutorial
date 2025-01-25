<script setup>

const rawHtml = '<p class="my-html">My Html</p>';
const idBlog = 'myBlog';

// local register
import MainButton from '@/components/MainButton.vue'

/**
 * move to global
 */
// import OptionComponent from './components/OptionComponent.vue';
// import CompotitionComponent from './components/CompotitionComponent.vue';

const nameGuest = 'Alfandi'

const greetingGuest = (name, gender) => {
  let greeting = 'Hello, '
  let male = 'Mr. ';
  let female = 'Mrs. ';

  switch (gender) {
    case 'M':
      greeting += male;
      break;

    case 'F':
      greeting += female;
      break;
  
    default:
      greeting += `${male}/${female} `
      break;
  }
  greeting += name;

  return greeting
}

</script>

<template>
  <MainButton />

  <!-- calling function -->
  <h1>{{ greetingGuest(nameGuest, 'M') }}</h1>

  <option-component />
  <CompotitionComponent />

  <!-- not rendered as tag html -->
  <div>{{ rawHtml }}</div>

  <!-- more safe from xss -->
  <div v-html="rawHtml" :id="idBlog"></div> 
</template>

<style scoped></style>
