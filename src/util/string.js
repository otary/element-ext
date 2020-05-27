/**
 * 驼峰/Pascal转下划线格式
 *
 * @author chenzw
 * @param name
 * @param separator
 * @param firstLetterCapitalized
 * @returns {*}
 */
function toCamel(name, separator = '_', firstLetterCapitalized = false) {
    if (!name) {
        return name;
    }
    let firstLetter = name.slice(0, 1);
    if (firstLetterCapitalized) {
        firstLetter = firstLetter.toUpperCase();
    } else {
        firstLetter = firstLetter.toLowerCase();
    }
    return firstLetter + name.substring(1).replace(/([A-Z])/g, `${separator}$1`).toLowerCase();
}

/**
 * 左填充
 *
 * @author chenzw
 * @param val
 * @param size
 * @param padStr
 * @returns {string}
 */
function leftPad(val, size, padStr){
    if(!size || !padStr){
        return val;
    }
    let result = "";
    for (let i = 0; i < size; i++) {
        result+=padStr;
    }
    return result;
}

module.exports = {
    toCamel,
    leftPad
};
