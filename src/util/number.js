const string = require('./string');

/**
 * 十进制转Hex
 * @author chenzw
 * @param intVal
 * @param size
 * @returns {string}
 */
function intToHex(intVal, size) {
    let hex = intVal.toString(16);
    if (size) {
        let paddingSize = parseInt(size) - hex.length;
        if (paddingSize > 0) {
            return string.leftPad(hex, paddingSize, "0") + hex;
        }
    }
    return hex;
}

/**
 * bin转hex
 * @author chenzw
 * @param str
 * @returns {string}
 */
function binToHex(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += intToHex(str.charCodeAt(i), 4);
    }
    return result;
}

module.exports = {
    intToHex,
    binToHex
};
