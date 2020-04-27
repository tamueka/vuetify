
<template>
  <v-container>
    <v-layout class="users">
      <v-flex>
        <div>
          <v-btn @click="loadUsers" color="primary" dark>
            Cargar Usuarios
            <v-icon class="ml-2" dark>mdi-cloud-upload</v-icon>
          </v-btn>
        </div>
        <div v-for="user in users" :key="user.id" @click="loadUser(user)">
          <usuario :user="user"></usuario>
        </div>
        <v-btn v-if="ifNext" @click="next" color="primary" dark>
          Siguiente
          <v-icon class="ml-2" dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn v-if="ifPrev" @click="prev" color="primary" dark>
          <v-icon class="mr-2" dark>mdi-chevron-left</v-icon>Anterior
        </v-btn>
        <div v-if="userSelect">
          <usuario :user="userSelect"></usuario>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import Usuario from "../components/Usuario";

function loadUsers() {
  axios.get(`https://reqres.in/api/users?page=${this.page}`).then(response => {
    // eslint-disable-next-line camelcase
    const { data, page, total, total_pages } = response.data;
    this.users = data;
    this.page = page;
    this.$store.dispatch("changeTotal", total);
    // eslint-disable-next-line camelcase
    this.totalPages = total_pages;
  });
}

export default {
  name: "Usuarios",
  components: {
    Usuario
  },
  data() {
    return {
      users: [],
      page: 1,
      totalPages: 0
    };
  },
  methods: {
    loadUser(user) {
      this.$store.dispatch("clickUser", user.id);
    },
    loadUsers() {
      loadUsers.bind(this)();
    },
    next() {
      this.page += 1;
      loadUsers.bind(this)();
    },
    prev() {
      this.page -= 1;
      loadUsers.bind(this)();
    }
  },
  computed: {
    ifNext() {
      return this.totalPages > this.page;
    },
    ifPrev() {
      return this.page > 1;
    },
    userSelect() {
      return this.$store.state.selectUser;
    },
    total() {
      return this.$store.getters.totalPrint;
    }
  }
};
</script>

<style scoped>
</style>
