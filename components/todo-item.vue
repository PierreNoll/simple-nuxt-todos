<template>
<div>
  <v-list-tile>
    <v-list-tile-action @click.stop.prevent="updateStatus()">
      <v-checkbox v-model="todo.status" :readonly="true" false-value="not-done" true-value="done"></v-checkbox>
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
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      status: ''
    }
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  computed: {
    isChecked() {
      return this.todo.status === 'done' ? true : false
    }
  },
  methods: {
    ...mapActions('todo', ['removeTodo']),
    openUpdate() {
      this.$store.dispatch('todo/setCurrentTodo', this.todo)
      this.$store.dispatch('setDialog', true)
    },
    async updateStatus() {
      //this.status = status
      this.$store.dispatch('todo/setCurrentTodo', {
        ...this.todo,
        status: this.status
      })
      try {
        await this.$store.dispatch('todo/updateTodo', {
          ...this.todo,
          status: this.todo.status === 'done' ? 'not-done' : 'done'
        })
      } catch (e) {
        throw e
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
