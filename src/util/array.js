/**
 * 判断是否数组对象
 * @author chenzw
 * @param value
 * @returns {arg is Array<any>}
 */
function isArray(value) {
    return Array.isArray(value);
}

/**
 * 数组扁平化、去重、排序
 * @author chenzw
 * @param arr
 * @returns {any[]}
 */
function flatUniqueSort(arr) {
    return Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b);
}

module.exports = {
    isArray,
    flatUniqueSort
};
