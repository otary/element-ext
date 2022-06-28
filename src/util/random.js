/**
 * 生成指定范围随机数
 * @param min
 * @param max
 */
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Unicode转文本
 * @param unicode
 * @returns {string}
 */
function unicode2Text(unicode) {
    if (!unicode) {
        return "";
    }
    let result = '';
    const parts = unicode.split(/[\\u|%u]/);
    for (let i = 0; i < parts.length; i++) {
        result += String.fromCharCode(parseInt(parts[i], 16).toString(10));
    }
    return result;
}

/**
 * 生成随机中文
 * @param size
 * @returns {string}
 */
function randomChinese(size = 1) {
    let result = '';
    for (let i = 0; i < size; i++) {
        const unicode = random(0x4e00, 0x9fa5).toString(16);
        result += unicode2Text(unicode);
    }
    return result;
}

module.exports = {
    random,
    randomChinese
}
