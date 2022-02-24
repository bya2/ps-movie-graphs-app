import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "route-now-playing",
    component: () => import("@/views/now_playing.vue"),
  },
  {
    path: "/latest",
    name: "route-latest",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/lastest.vue"),
  },
  {
    path: "/upcoming",
    name: "route-upcoming",
    component: () => import("@/views/upcoming.vue"),
  },
  {
    path: "/popular",
    name: "route-popular",
    component: () => import("@/views/popular.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
