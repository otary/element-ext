/**
 * 判断是否数组对象
 * @param value
 * @returns {arg is Array<any>}
 */
function isArray(value) {
    return Array.isArray(value);
}

module.exports = {
    isArray
};