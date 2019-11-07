import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: () => import('../views/Home.vue')
        }, {
            path: "/marquee-example",
            component: () => import('../views/MarqueeExamples.vue')
        }, {
            path: "/css/box",
            component: () => import('../views/css/BoxExamples.vue')
        }, {
            path: "/css/position",
            component: () => import('../views/css/PositionExamples.vue')
        }, {
            path: "/css/text",
            component: () => import('../views/css/TextExamples.vue')
        }
    ]
});

