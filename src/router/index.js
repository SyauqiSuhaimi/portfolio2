import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import workExp from "../views/workExp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        index: 0,
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/exp",
      name: "exp",
      component: workExp,
      meta: {
        index: 1,
      },
    },
  ],
});

export default router;
