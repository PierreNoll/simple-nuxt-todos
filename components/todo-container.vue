<template>
<v-card>
  <v-toolbar card color="blue-grey" dark>
    <v-toolbar-title><span>{{todosLength}} Todos :</span> <span class="ml-4">{{doneTodosLength}}</span> <v-icon>check</v-icon> <span class="ml-4 mr-1">{{notDoneTodosLength}}</span><v-icon>date_range</v-icon>
    </v-toolbar-title>
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
import { mapGetters } from 'vuex'
import TodoItem from '@/components/todo-item.vue'

export default {
  components: {
    TodoItem
  },
  computed: {
    ...mapState('todo', ['todos']),
    ...mapGetters('todo', [
      'todosLength',
      'doneTodosLength',
      'notDoneTodosLength'
    ])
  },
  methods: {
    ...mapActions('todo', ['createTodo']),
    ...mapActions(['setDialog'])
  }
}
</script>

<style lang="css" scoped>
</style>
