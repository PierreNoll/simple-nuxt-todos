<template>
<v-app light>
  <v-toolbar :app="true" :light="true">
    <v-toolbar-title>Simple Nuxt Todo</v-toolbar-title>
  </v-toolbar>
  <v-content>
    <v-container id="main-container">
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

<style lang="css" scoped>
#main-container{
  padding-top: 75px;
  padding-bottom: 75px;
}
</style>
