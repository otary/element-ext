import Vue from 'vue';
import App from './views/App.vue';
import router from './router/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@babel/polyfill';
import  '@/filters/index';
import animated from 'animate.css'


Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(animated)


new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app');
