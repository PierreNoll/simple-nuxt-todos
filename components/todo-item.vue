<template>
<div>
  <v-list-tile>
    <v-list-tile-action>
      <v-checkbox v-model="todo.status" false-value="not-done" true-value="done"></v-checkbox>
    </v-list-tile-action>

    <v-list-tile-content>
      {{todo.value}}
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
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: mapActions('todo', ['removeTodo'])
}
</script>

<style lang="css" scoped>
</style>
