import Link from './components/Link.vue';
import StringExt from './util/StringExt';

const components = [
    Link
];

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    StringExt,



};
