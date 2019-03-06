<template>
<v-card>
  <v-toolbar card color="blue-grey" dark>
    <v-toolbar-title>Todos</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="setDialog(true)">
      <v-icon>add</v-icon>
    </v-btn>
  </v-toolbar>
  <v-card-text>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </v-card-text>
</v-card>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import TodoItem from '@/components/todo-item.vue'
export default {
  components: {
    TodoItem
  },
  computed: mapState('todo', ['todos']),
  methods: {
    ...mapActions('todo', ['createTodo']),
    ...mapActions(['setDialog'])
  }
}
</script>

<style lang="css" scoped>
</style>
