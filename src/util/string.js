/**
 * 驼峰/Pascal转下划线格式
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


module.exports = {
    toCamel
};