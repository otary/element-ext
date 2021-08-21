/**
 * 将十六进制颜色值转换成RGB
 * @param hexColor
 * @returns {{r: *, b: *, g: *}}
 */
function hexToRgb(hexColor) {

    if (hexColor.slice(0, 1) == "#") {
        hexColor = hexColor.slice(1);
    }

    if (hexColor.length == 3) {
        hexColor = toLongHex(hexColor);
    }

    let colors = [];
    for (let i = 0; i < hexColor.length; i += 2) {
        colors.push(parseInt("0x" + hexColor.slice(i, i + 2)))
    }
    return {
        r: colors[0],
        g: colors[1],
        b: colors[2]
    }
}

/**
 * 将十六进制颜色值转换成RGB字符串
 * @param hexColor
 * @returns {string}
 */
function hexToRgbString(hexColor) {
    const rgb = hexToRgb(hexColor);
    return "RGB(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
}

/**
 * 透明度转Hex
 * @param opacity
 */
function opacityToHex(opacity) {
    let hex = Math.floor((1 - (opacity/100)) * 255).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

function toLongHex(shortHexColor) {
    let result = '';
    for (let i = 0; i < shortHexColor.length; i++) {
        result += shortHexColor.charAt(i).concat(shortHexColor.charAt(i));
    }
    return result;
}


module.exports = {
    hexToRgb,
    hexToRgbString,
    opacityToHex
};

