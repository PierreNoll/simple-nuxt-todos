<template>
<v-card>
  <v-toolbar card color="blue-grey" dark>
    <v-toolbar-title>Todos</v-toolbar-title>
  </v-toolbar>
  <v-card-text>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </v-card-text>
</v-card>
</template>

<script>
import {
  mapState
} from 'vuex'
import TodoItem from '@/components/todo-item.vue'
export default {
  components: {
    TodoItem
  },
  computed: mapState('todo', ['todos'])
}
</script>

<style lang="css" scoped>
</style>
