import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SportsView from "../views/SportsView.vue";
import CodeView from "../views/CodeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sports",
      name: "sports",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SportsView,
    },
    {
      path: "/code",
      name: "code",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CodeView,
    },
  ],
});

export default router;
