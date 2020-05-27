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

/**
 * 是否IPv4
 *
 * @author chenzw
 * @param value
 * @returns {boolean}
 */
function isIPv4(value) {
    return /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/.test(value);
}

/**
 * 是否IPv6
 *
 * @author chenzw
 * @param value
 * @returns {boolean}
 */
function isIPv6(value) {
    return /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/.test(value);
}

/**
 * 是否IP（IPv4或IPv6）
 *
 * @author chenzw
 * @param value
 */
function isIP(value) {
    return isIPv4(value) || isIPv6(value);
}

/**
 * 是否中文字符
 *
 * @author chenzw
 * @param value
 * @returns {boolean}
 */
function isChinese(value) {
    return /^[a-zA-Z]+$/.test(value);
}

/**
 * 是否手机号
 *
 * @author chenzw
 * @param value
 * @returns {boolean}
 */
function isPhoneNumber(value) {
    return /^1[3|4|5|6|7|8][0-9]{9}$/.test(value);
}

/**
 * 是否电子邮箱
 *
 * @author chenzw
 * @param value
 */
function isEmail(value) {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value);
}

/**
 * 是否身份证号码
 *
 * @author chenzw
 * @param value
 * @returns {boolean}
 */
function isIdCard(value) {
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);
}

/**
 * 是否URL
 *
 * @author chenzw
 * @param value
 * @returns {boolean}
 */
function isURL(value) {
    return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(value);
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
