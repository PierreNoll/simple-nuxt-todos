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
              <v-text-field :value="currentTodo.value" @input="newTodo = $event" label="Que voulez-vous faire ?"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="setDialog(false)">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="onSave">Save</v-btn>
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
  computed: {
    ...mapState(['dialog']),
    ...mapState('todo', ['currentTodo'])
  },
  methods: {
    ...mapActions(['setDialog']),
    async onSave() {
      if (this.currentTodo.id) { // si l'id est defini alors il s'agit d'un update
        try {
          await this.$store.dispatch('todo/updateTodo', {
            id: this.currentTodo.id,
            value: this.newTodo,
            status: this.currentTodo.status
          })
        } catch (e) {
          throw e
        }
        this.setDialog(false)
      } else { // sinon il s'agit d'un nouveau todo
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
}
</script>

<style lang="css" scoped>
</style>
