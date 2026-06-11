import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LugarDetailView from "../views/LugarDetailView.vue";
import LoginView from "../views/LoginView.vue";
import store from "../store";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/ciudad/:id",
        name: "detalle",
        component: LugarDetailView,
        props: true,
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next("/login");
    } else {
        next();
    }
});

export default router;
