import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("../../src/Views/HomePage.vue"),
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("../../src/Views/LoginPage.vue"),
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("../../src/Views/RegisterPage.vue"),
  },
  {
    name: "NewBookMark",
    path: "/new",
    component: () => import("@/Views/NewBookMark.vue"),
  },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
