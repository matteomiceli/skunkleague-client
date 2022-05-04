import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GamesView from "../views/GamesView.vue";
import AddPlayer from "../views/AddPlayer.vue";
import AdminGames from "../views/AdminGames.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/games",
    name: "games",
    component: GamesView,
  },
  {
    path: "/player/add",
    name: "add player",
    component: AddPlayer,
  },
  {
    path: "/admin/games",
    name: "admin games",
    component: AdminGames,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
