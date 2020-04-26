
<template>
  <v-container>
    <v-layout>
      <v-flex>
        <div class="users">
          <h1>Usuarios {{ total }}:</h1>
          <v-btn @click="loadUsers" color="primary" x-large dark>Cargar Usuarios</v-btn>
          <ul v-for="user in users" :key="user.id" @click="loadUser(user)">
            <usuario :user="user"></usuario>
          </ul>
          <button v-if="ifNext" @click="next">Siguiente</button>
          <button v-if="ifPrev" @click="prev">Anterior</button>
          <div v-if="userSelect">
            <usuario :user="userSelect"></usuario>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import Usuario from "./Usuario";

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
.users {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
