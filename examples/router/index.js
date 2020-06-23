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
    }, {
        path: "/js/number",
        component: () => import('../views/js/Number.vue')
    }, {
        path: "/js/browser",
        component: () => import('../views/js/Browser.vue')
    }, {
        path: "/js/array",
        component: () => import('../views/js/Array.vue')
    },  {
        path: "/js/dom",
        component: () => import('../views/js/Dom.vue')
    },  {
        path: "/js/string",
        component: () => import('../views/js/String.vue')
    }, {
        path: "/js/url",
        component: () => import('../views/js/Url.vue')
    }, {
        path: "/filter/index",
        component: () => import('../views/filters/index.vue')
    }, {
        path: "/test/index",
        component: () => import('../views/test/index.vue')
    }
    ]
});

