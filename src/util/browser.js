const number = require('./number');

/**
 * 获取浏览器指纹
 */
function getFingerPrint() {
    let canvas = document.createElement('canvas');
    let base64Data = canvas.toDataURL().replace("data:image/png;base64,", "");
    let bin = atob(base64Data);
    return number.binToHex(bin.slice(-16, -12));
}

module.exports = {
    getFingerPrint
};