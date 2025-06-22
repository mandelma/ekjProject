import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        name: "homepage",
        component: () => import("../components/Homepage")
    },
    {
        path: "/services",
        name: "services",
        component: () => import("../components/Services")
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import("../components/Contact")
    },
    {
        path: "/reference",
        name: "reference",
        component: () => import("../components/Reference")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;