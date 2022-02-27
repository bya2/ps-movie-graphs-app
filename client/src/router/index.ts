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
    component: () => import("@/views/latest.vue"),
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
  {
    path: "/top_rated",
    name: "route-top-rated",
    component: () => import("@/views/top_rated.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
