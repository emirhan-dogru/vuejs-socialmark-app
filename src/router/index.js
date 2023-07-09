import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "homePage",
    path: "/",
    component: () => import("@/views/Home_view"),
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("@/views/Login_view"),
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("@/views/Register_view"),
  },
  {
    name: "NewBookmarkPage",
    path: "/new",
    component: () => import("@/views/NewBookmark_view"),
  },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
