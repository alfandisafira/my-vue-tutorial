<script setup>
import ContainerComponent from './components/ContainerComponent.vue'
import CardComponent from './components/CardComponent.vue'

import { cardData } from './assets/utils'
</script>

<template>
  <ContainerComponent>
    <template #cards>
      <template v-for="(card, index) in cardData" :key="index">
        <CardComponent
          :img-source="card.imgSource"
          :name-img="card.nameImg"
          :type="card.type"
          :merk="card.merk"
          :price="card.price"
        />
      </template>
    </template>
  </ContainerComponent>
</template>

<style scoped></style>
