const number = require('./number');
const Vue = require('vue');

/**
 * 获取浏览器指纹
 * @author chenzw
 */
function getFingerPrint() {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext("2d");
    let txt = "bqrdh.com";
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = "otary";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText(txt, 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText(txt, 4, 17);
    let base64Data = canvas.toDataURL().replace("data:image/png;base64,", "");
    let bin = atob(base64Data);
    return number.binToHex(bin.slice(-16, -12));
}

/**
 * 是否IE浏览器（不包括Edge）
 *
 * @returns {boolean}
 */
function isIE() {
    return !Vue.default.prototype.$isServer && !isNaN(Number(document.documentMode));
}

/**
 * 是否是ieEdge浏览器
 * @returns {boolean}
 */
function isEdge() {
    return !Vue.default.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1;
}

module.exports = {
    getFingerPrint,
    isIE,
    isEdge
};
