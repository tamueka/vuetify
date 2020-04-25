<template>
  <v-app id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>
