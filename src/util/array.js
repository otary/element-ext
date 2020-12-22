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
function flatUniqueSort(array) {
    return Array.from(new Set(array.flat(Infinity))).sort((a, b) => a - b);
}

/**
 * 分组
 * @param array
 * @param fieldName 分组的字段
 */
function group(array, fieldName) {
    let result = {};
    array.forEach((item) => {
        let itemValues = result[item[fieldName]];
        if (!itemValues) {
            itemValues = [];
        }
        itemValues.push(item);
        result[item[fieldName]] = itemValues;
    })
    return result;
}

/**
 * 数组交集
 *
 * @param arr1
 * @param arr2
 */
function intersection(arr1, arr2) {
    return arr1.filter(v => arr2.includes(v));
}

module.exports = {
    isArray,
    flatUniqueSort,
    group,
    intersection
};
