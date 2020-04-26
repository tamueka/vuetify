<template>
  <v-container>
    <v-layout wrap>
      <v-flex class="primary" xs12>
        <h1>12 columns</h1>
      </v-flex>
      <v-flex class="secondary" xs6>
        <h1>6</h1>
      </v-flex>
      <v-flex class="error" xs6>
        <h1>6</h1>
      </v-flex>
    </v-layout>

    <v-layout
      class="mt-5"
      justify-center
      align-center
      style="height: 300px; background-color: grey"
    >
      <v-flex class="info" xs3>
        <h1>Centrado</h1>
      </v-flex>
      <v-flex class="pink lighten-1 white--text" xs3>
        <h1>Centrado</h1>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <h1 class="display-1 text-uppercase">Lorem, ipsum dolor.</h1>
        <h1 class="display-2 text-lowercase">Lorem, ipsum dolor.</h1>
        <h1 class="display-3 text-center">Lorem, ipsum dolor.</h1>
        <h1 class="display-4 primary pa-5">Lorem, ipsum dolor.</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>
