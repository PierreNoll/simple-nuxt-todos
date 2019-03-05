<template>
<v-layout row justify-center>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Nouveau Todo</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field v-model="newTodo" label="Que voulez-vous faire ?"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="setDialog(false)">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="createTodo">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-layout>
</template>

<script>
import {
  mapState
} from 'vuex'
import {
  mapActions
} from 'vuex'
export default {
  data() {
    return {
      newTodo: ''
    }
  },
  computed: mapState(['dialog']),
  methods: {
    ...mapActions(['setDialog']),
    async createTodo() {
      try {
        await this.$store.dispatch('todo/createTodo', {
          status: 'not-done',
          value: this.newTodo
        })
      } catch (e) {
        throw e
      }
      this.setDialog(false)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
