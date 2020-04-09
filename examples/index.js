import Vue from 'vue';
import App from './views/App.vue';
import router from './router/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@babel/polyfill';

Vue.config.productionTip = false;


Vue.use(ElementUI);

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app');
