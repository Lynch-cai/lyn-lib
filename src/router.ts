import { createRouter, createWebHistory } from "vue-router";
import { LynButton } from "./components";

const routes = [
    {
        path: "/button",
        name: "button",
        component: LynButton,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
