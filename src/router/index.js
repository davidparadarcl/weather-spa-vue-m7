import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LugarDetailView from "../views/LugarDetailView.vue";

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
