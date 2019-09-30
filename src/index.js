/*import Link from './components/Link.vue';

const components = [
    Link
];

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}*/


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = {
    string: require('./util/string.js'),
    url: require('./util/url')
};
