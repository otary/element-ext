import Test from './components/Test.vue';
import StringExt from './util/StringExt';

const components = [
    Test
];

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default [
    StringExt,
    Test
];