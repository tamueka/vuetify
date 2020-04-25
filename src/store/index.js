import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

Vue.filter("ponerGuion", (text) => `--${text}--`);

Vue.filter("currency", (price) => `${price} €`);

export default new Vuex.Store({
  state: {
    user: [],
    total: 0,
    selectUser: null,
  },
  actions: {
    clickUser(context, userId) {
      axios.get(`https://reqres.in/api/users/${userId}`).then((response) => {
        const user = response.data.data;
        context.commit("loadUser", user);
      });
    },
    changeTotal(context, total) {
      context.commit("changeTotal", total);
    },
  },
  mutations: {
    loadUser(state, user) {
      state.selectUser = user;
    },
    changeTotal(state, total) {
      state.total = total;
    },
  },
  getters: {
    totalPrint(state) {
      return `**${state.total}**`;
    },
  },
});
