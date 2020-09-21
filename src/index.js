import Link from './components/Link.vue'
import Util from './util/index.js'
//import Filters from './filters/index.js'

const components = [
    Link
];

const install = function (Vue, opts = {}) {
    components.forEach((component) => {
        Vue.component(component.name, component);
    });

    Vue.prototype.$$util = Util;
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
}

export {
    Util
}
