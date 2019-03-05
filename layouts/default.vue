<template>
<v-app light>
  <v-toolbar :app="true" :light="true">
    <v-toolbar-title>Simple Nuxt Todo</v-toolbar-title>
  </v-toolbar>
  <v-content>
    <v-container>
      <nuxt />
    </v-container>
  </v-content>

  <v-footer>
    <span>&copy; 2019</span>
  </v-footer>
</v-app>
</template>


<script>
export default {
  data() {
    return {}
  }
}
</script>
