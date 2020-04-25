
<template>
  <v-container class="mb-5" grid-list-xs>
    <v-layout>
      <v-flex>
        <hr />
        <h1 class="mb-5 display-2">BOTONES VUETIFY</h1>
        <v-btn>Boton</v-btn>
        <v-btn class="ml-5" color="primary">Boton</v-btn>
        <v-btn color="ml-5 blue" dark>Boton</v-btn>
        <v-btn class="ml-5" color="secondary" text>Sin fondo</v-btn>
        <v-btn class="ml-5" color="error" large>Largo</v-btn>
        <v-btn class="ml-5" color="error" small>Small</v-btn>
        <v-btn class="ml-5" color="success" large disabled>Largo</v-btn>
        <v-btn icon color="pink">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon color="indigo">
          <v-icon>mdi-star</v-icon>
        </v-btn>
        <v-btn icon color="deep-orange">
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark small color="primary">
          <v-icon dark>mdi-minus</v-icon>
        </v-btn>

        <v-btn class="mx-2" fab dark small color="pink">
          <v-icon dark>mdi-heart</v-icon>
        </v-btn>

        <v-btn class="mx-2" fab dark color="indigo">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>

        <v-btn class="mx-2" fab dark color="teal">
          <v-icon dark>mdi-format-list-bulleted-square</v-icon>
        </v-btn>
        <v-btn class="ma-2" outlined color="indigo">Outlined Button</v-btn>
        <v-btn class="ma-2" outlined fab color="teal">
          <v-icon>mdi-format-list-bulleted-square</v-icon>
        </v-btn>
        <v-btn class="ma-2" outlined large fab color="indigo">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>

    <div class="text-center">
    <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="loader = 'loading'"
    >
      Accept Terms
    </v-btn>

    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
      Upload
      <v-icon right dark>mdi-cloud-upload</v-icon>
    </v-btn>

    <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
    >
      Custom Loader
      <template v-slot:loader>
        <span>Loading...</span>
      </template>
    </v-btn>

    <v-btn
      class="ma-2"
      :loading="loading4"
      :disabled="loading4"
      color="info"
      @click="loader = 'loading4'"
    >
      Icon Loader
      <template v-slot:loader>
        <span class="custom-loader">
          <v-icon light>cached</v-icon>
        </span>
      </template>
    </v-btn>

    <v-btn
      :loading="loading5"
      :disabled="loading5"
      color="blue-grey"
      class="ma-2 white--text"
      fab
      @click="loader = 'loading5'"
    >
      <v-icon dark>mdi-cloud-upload</v-icon>
    </v-btn>
  </div>
  <v-btn block color="warining" dark>Block Button</v-btn>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        loading5: false,
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
  }
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>