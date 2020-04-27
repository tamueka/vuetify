import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Botones from '../views/Botones.vue';
import Usuarios from '@/views/Usuarios';

Vue.use(VueRouter)

  const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/botones",
      name: "Botones",
      component: Botones,
    },
    {
      path: "/usuarios",
      name: "Usuarios",
      component: Usuarios,
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
  ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
