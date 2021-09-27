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
 * 透明度 转 Hex（8位）
 * @param opacity
 */
function opacityToHex(opacity) {
    let hex = Math.floor((1 - (opacity / 100)) * 255).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

/**
 * RGB 转 HSL
 * @param rgb
 * @returns {{s: number, h: number, l: number, complete: string, o: number}}
 */
function rgbToHsl(rgb) {
    var r = Number(rgb.r) / 255,
        g = Number(rgb.g) / 255,
        b = Number(rgb.b) / 255,
        o = Number(rgb.o),
        max = Math.max(r, g, b),
        min = Math.min(r, g, b),
        h, s, l = (max + min) / 2;
    if (max == min) {
        h = s = 0;
    } else {
        var d = max - min;
        s = l < 0.5 ? d / (max + min) : d / (2 - max - min);
        switch (max) {
            case r:
                h = (g - b) / d;
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h = h * 60;
        h = h < 0 ? h + 360 : h;
    }
    h = Math.round(h);
    s = Math.round(s * 100) + "%";
    l = Math.round(l * 100) + "%";
    return {
        h: h,
        s: parseInt(s) / 100,
        l: parseInt(l) / 100,
        o: o,
        complete: o == 1 ?
            ("hsl(" + [h, s, l].join(",") + ")") :
            ("hsla(" + [h, s, l, o].join(",") + ")")
    }
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
    opacityToHex,
    rgbToHsl
};

