import store from "../store";
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

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  const _isAuthenticated = store.getters._isAuthenticated;
  const authRequiredRoutes = ["homePage"];
  const authNotRequiredRoutes = ["LoginPage", "RegisterPage"];
  if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) {
    next(false);
  }

  if (authRequiredRoutes.indexOf(to.name) > -1) {
    if (_isAuthenticated) {
      next();
    } else {
      next({ name: "LoginPage" });
    }
  } else {
    next();
  }

  // if (to.name == "homePage" && _isAuthenticated) {
  //   next();
  // }
});

export default router;
