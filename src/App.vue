<template>
  <v-app id="app">
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-4"
      >
        <template v-slot:img="{ props }">
          <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
        </template>

        <v-app-bar-nav-icon>
          <v-icon>mdi-menu</v-icon>
        </v-app-bar-nav-icon>

        <v-toolbar-title>Vuetify</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn icon color="yellow" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab router-link to="/">Home</v-tab>
            <v-tab router-link to="/botones">Botones</v-tab>
            <v-tab router-link to="/usuarios">Usuarios</v-tab>
            <v-tab router-link to="/about">About</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet id="scrolling-techniques-4" class="overflow-y-auto">
        <v-content>
          <v-container style="height: 100vh; margin-top: 260px;">
            <router-view></router-view>
          </v-container>
        </v-content>

        <Footer></Footer>
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Footer
  }
};
</script>
