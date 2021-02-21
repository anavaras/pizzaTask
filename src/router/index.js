import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/orders.vue";
import view from "../components/orderDetails.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/view/:id",
        name: "Details",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../components/orderDetails.vue")
    },
    {
        path: "/details",
        name: "view",
        component: view
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;