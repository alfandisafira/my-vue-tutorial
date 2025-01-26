<script setup>
import todos from './assets/utils'
</script>

<template>
  <div>
    Completed Task
    <ol>
      <template v-for="todo in todos" :key="todo.id">
        <li v-if="todo.completed">
          {{ todo.todo }}
        </li>
      </template>
    </ol>
  </div>

  <div>
    Uncompleted Task
    <ol>
      <template v-for="todo in todos" :key="todo.id">
        <li v-if="!todo.completed">
          {{ todo.todo }}
        </li>
      </template>
    </ol>
  </div>
</template>

<style scoped></style>
