<template>
  <v-container>
    <v-app id="app">
      <v-layout>
        <v-flex>
          <Header></Header>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex>
          <router-view />
        </v-flex>
      </v-layout>
    </v-app>
  </v-container>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>
