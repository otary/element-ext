const string = require('./string');

/**
 * 十进制转Hex
 * @param intVal
 * @param size
 * @returns {string}
 */
function intToHex(intVal, size){
    let hex = intVal.toString(16);
    if(size){
        let paddingSize = parseInt(size) - hex.length;
        if (paddingSize > 0){
           return string.leftPad(hex, paddingSize, "0") + hex;
        }
    }
    return hex;
}

module.exports = {
    intToHex
};