import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: "/",
        component: () => import('../views/Home.vue')
    }, {
        path: "/components/marquee-example",
        component: () => import('../views/components/MarqueeExamples.vue')
    }, {
        path: "/css/box",
        component: () => import('../views/css/BoxExamples.vue')
    }, {
        path: "/css/position",
        component: () => import('../views/css/PositionExamples.vue')
    }, {
        path: "/css/text",
        component: () => import('../views/css/TextExamples.vue')
    }, {
        path: "/css/animation",
        component: () => import('../views/css/Animation.vue')
    }, {
        path: "/css/util",
        component: () => import('../views/css/Util.vue')
    }
    ]
});

