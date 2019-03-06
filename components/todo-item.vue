<template>
<div>
  <v-list-tile>
    <v-list-tile-action>
      <v-checkbox v-model="todo.status" false-value="not-done" true-value="done"></v-checkbox>
    </v-list-tile-action>

    <v-list-tile-content @click.stop.prevent="openUpdate">
      <span>{{todo.value}}</span>
    </v-list-tile-content>
    <v-list-tile-action @click="removeTodo(todo.id)">
      <v-icon color="red">delete</v-icon>
    </v-list-tile-action>
  </v-list-tile>
</div>
</template>

<script>
import {
  mapActions
} from 'vuex'
export default {
  data() {
    return {
      toggleInput: false,
    }
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('todo', ['removeTodo']),
    openUpdate() {
      this.$store.dispatch('todo/setCurrentTodo', this.todo)
      this.$store.dispatch('setDialog', true)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
