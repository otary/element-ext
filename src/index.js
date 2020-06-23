const Link = require('./components/Link.vue');

const components = [
    Link
];

const install = function (Vue, opts = {}) {
    components.forEach((component) => {
        Vue.component(component.name, component);
    });
};


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = require('./util/index.js');
module.exports = require('./filters/index.js');
