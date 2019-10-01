const _clone = require('lodash/clone');
const _cloneDeep = require('lodash/cloneDeep');
const _conformsTo = require('lodash/conformsTo');

/**
 * 浅复制
 * @param value
 * @returns {*}
 */
function clone(value) {
    return _clone(value);
}

/**
 * 深复制
 * @param value
 * @returns {*}
 */
function cloneDeep(value) {
    return _cloneDeep(value);
}

/**
 * 判断对象的属性是否满足某个条件
 *
 * @param object
 * @param source
 * @returns {boolean}
 */
function conformsTo(object, source) {
    return _conformsTo(object, source);
}

module.exports = {
    clone,
    cloneDeep,
    conformsTo
}