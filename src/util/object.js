const _clone = require('lodash/clone');
const _cloneDeep = require('lodash/cloneDeep');
const _conformsTo = require('lodash/conformsTo');

/**
 * 浅复制
 *
 * @author chenzw
 * @param value
 * @returns {*}
 */
function clone(value) {
    return _clone(value);
}

/**
 * 深复制
 *
 * @author chenzw
 * @param value
 * @returns {*}
 */
function cloneDeep(value) {
    return _cloneDeep(value);
}

/**
 * 判断对象的属性是否满足某个条件
 *
 * @author chenzw
 * @param object
 * @param source
 * @returns {boolean}
 */
function conformsTo(object, source) {
    return _conformsTo(object, source);
}

/**
 * 获取对象类型
 *
 * @author chenzw
 * @param o
 * @returns {string}
 */
function getType(o) {
    return Object.prototype.toString.call(o).slice(8, -1);
}

/**
 * 是否对象值
 *
 * @author chenzw
 * @param value
 * @returns {boolean}
 */
function isObject(value) {
    return getType(value) === "Object";
}

/**
 * 是否字符串类型
 *
 * @author chenzw
 * @param value
 * @returns {boolean}
 */
function isString(value) {
    return getType(value) === "String";
}

/**
 * 是否数值类型
 *
 * @author chenzw
 * @param value
 * @returns {boolean}
 */
function isNumber(value) {
    return getType(value) === "Number";
}

/**
 * 是否数组类型
 *
 * @author chenzw
 * @param value
 * @returns {boolean}
 */
function isArray(value) {
    return getType(value) === "Array";
}

/**
 * 是否Function类型
 *
 * @author chenzw
 * @param value
 * @returns {boolean}
 */
function isFunction(value) {
    return getType(value) === "Function";
}

/**
 * 是否日期类型
 *
 * @author chenzw
 * @param value
 * @returns {boolean}
 */
function isDate(value) {
    return getType(value) === "Date";
}

module.exports = {
    clone,
    cloneDeep,
    conformsTo,
    isObject,
    isString,
    isNumber,
    isArray,
    isFunction,
    isDate,
    isIPv4,
    isIPv6,
    isIP,
    isChinese,
    isEmail,
    isIdCard,
    isURL
};
