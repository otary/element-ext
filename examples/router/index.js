import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: () => import('../views/Home.vue')
        }
    ]
});

