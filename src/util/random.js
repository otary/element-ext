import {unicode2Text} from './string'

/**
 * 生成指定范围随机数
 * @param min
 * @param max
 */
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
