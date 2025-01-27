<script setup>
defineProps({
  imgSource: {
    type: String,
  },
  nameImg: {
    type: String,
  },
  type: {
    type: String,
  },
  merk: {
    type: String,
  },
  price: {
    type: String,
  },
})
</script>
<template>
  <div class="card">
    <div class="img-card">
      <img :src="imgSource" :alt="nameImg" />
    </div>

    <div class="label-card">
      <div class="brand">
        <span class="type">{{ type }}</span>
        <span class="merk">{{ merk }}</span>
      </div>

      <div class="price">
        <span>{{ price }}</span>
      </div>
    </div>
  </div>
</template>
<style>
.card {
  width: 150px;
  height: 250px;
  background-color: #eee;
  border-radius: 10px;
  box-shadow: #aaa 2px;
  padding: 20px;

  .img-card {
    display: flex;
    justify-content: center;
  }

  .label-card {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 50%;
    gap: 10px;

    .brand {
      display: flex;
      flex-direction: column;
      gap: 5px;

      .type {
        font-size: 20px;
        font-weight: 600;
      }
      .merk {
        font-size: 15px;
      }
    }
  }

  img {
    width: 130px;
  }
}
</style>
