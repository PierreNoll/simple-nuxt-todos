<template>
<div>
  <v-list-tile>
    <v-list-tile-action>
      <v-checkbox v-model="todo.status" false-value="not-done" true-value="done"></v-checkbox>
    </v-list-tile-action>

    <v-list-tile-content>
      {{todo.value}}
    </v-list-tile-content>
  </v-list-tile>
</div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
</style>
