<script setup></script>
<template class="root">
  <div class="container">
    <slot name="cards"></slot>
  </div>
</template>

<style>
.container {
  padding: 20px 200px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}
</style>
