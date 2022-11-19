const _isEqual = require('loadsh/isEqual');

/**
 * 判断数组是否一样
 * @param a1
 * @param a2
 * @returns {boolean}
 */
function isSameArray(a1, a2) {
    return _isEqual(a1, a2);
}

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
    return Array.from(
        new Set(array.flat(Infinity))
    ).sort((a, b) => a - b);
}

/**
 * 数组对象去重
 * @param array
 * @param uniqueValueFn
 * @returns {*}
 */
function unique(array, uniqueValueFn = ((item) => item)) {
    const cache = new Map();
    return array.filter((item) => {
        const value = uniqueValueFn(item);
        if (!cache.has(value)) {
            cache.set(value, 1);
            return true;
        }
        return false;
    });
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

/**
 * 数组差集
 * @param arr1
 * @param arr2
 * @param matchesFn
 * @param isSymmetrical 是否对称差集
 * 1. 对称差集：（arr1 - arr2） + （arr2 - arr1）
 * 2. 非对称差集：（arr1 - arr2）
 * @returns {*}
 */
function subtraction(arr1, arr2, matchesFn, isSymmetrical = false) {
    if (isSymmetrical) {
        const rs1 = arr1.filter(a1 => {
            return !arr2.find((a2) => matchesFn(a1, a2));
        });
        const rs2 = arr2.filter((a2) => {
            return !arr1.find((a1) => matchesFn(a1, a2));
        });
        return rs1.concat(rs2);
    } else {
        return arr1.filter(a1 => {
            return !arr2.find((a2) => matchesFn(a1, a2));
        });
    }
}


/**
 * 数组合并
 * @param listA
 * @param listB
 * @param matchesFn
 * @returns {*}
 */
function merge(listA, listB, matchesFn) {
    const list = listA.concat(listB);
    return list.reduce((prev, current) => {
        const found = prev.find(item => matchesFn(item, current));
        if (found) {
            Object.assign(found, current);
        } else {
            prev.push(current);
        }
        return prev;
    }, []);
}

/**
 * 数组乱序
 * @param arr
 * @returns {*}
 */
function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

module.exports = {
    isSameArray,
    isArray,
    flatUniqueSort,
    unique,
    group,
    intersection,
    subtraction,
    merge,
    shuffle
};
