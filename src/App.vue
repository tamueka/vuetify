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

        <v-app-bar-nav-icon @click="drawer = !drawer">
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
        </v-menu>

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab router-link to="/">Home</v-tab>
            <v-tab router-link to="/botones">Botones</v-tab>
            <v-tab router-link to="/usuarios">Usuarios</v-tab>
            <v-tab router-link to="/about">Modal</v-tab>
            <v-tab router-link to="/tareas-crud">Tareas</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet id="scrolling-techniques-4" class="overflow-y-auto" style="height: 100vh;">
        <v-content>
          <v-container style="margin-top: 260px;">
            <router-view></router-view>
          </v-container>
        </v-content>
      </v-sheet>
       <!-- FOOTER -->
      <Footer></Footer>
    </v-card>
    <!-- NAVEGACION LATERAL -->
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>

import Footer from "./components/Footer";
import NavegacionLateral from "./components/NavegacionLateral";
import About from "./views/About";

export default {
  name: "App",
  data() {
    return {
      dialog: false,
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-home", link: "/" },
        { title: "Botones", icon: "mdi-buffer", link: "/botones" },
        { title: "Usuarios", icon: "mdi-emoticon-cool", link: "/usuarios" },
        { title: "Modal", icon: "mdi-window-restore", link: "/about" },
        { title: "Tareas", icon: "mdi-worker", link: "/tareas-crud" },
      ]
    };
  },
  components: {
    Footer,
    About,
    NavegacionLateral,
  }
};
</script>