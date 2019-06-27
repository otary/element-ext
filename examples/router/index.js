import VueRouter from 'vue-router';

export default new VueRouter({
    routes: [
        {
            path: "/app",
            component: () => import('../views/App.vue')
        },
        {
            path: "/",
            component: () => import('../views/App.vue')
        }
    ]
});

