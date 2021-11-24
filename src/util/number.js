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

/**
 * 格式化金钱（每3位加一个逗号）
 * @param num
 */
function formatMoney(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // 其它写法
    /* return str.split('').reverse().reduce((prev, next, index) => {
         return ((index % 3) ? next : (next + ',')) + prev
     })*/
}

/**
 * 生成指定范围随机数
 * @param min
 * @param max
 */
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 获取小数点位数
 * @param num
 * @returns {number}
 */
function getDecimalDigits(num) {
    try {
        return num.toString().split(".")[1].length;
    } catch (e) {
        return 0;
    }
}

/**
 * 相加（解决小数精度丢失问题）
 *
 * @param args 数组
 * @returns {*}
 */
function add(args) {
    return args.reduce((sum, item) => {
        const m = Math.pow(10, Math.max(getDecimalDigits(sum), getDecimalDigits(item)));
        return (sum * m + item * m) / m;
    }, 0);
}

/**
 * 相减（解决小数精度丢失问题）
 */
function sub(a, b) {
    const maxDigits = Math.max(getDecimalDigits(a), getDecimalDigits(b));
    const m = Math.pow(10, maxDigits);
    return Number(((a * m - b * m) / m).toFixed(maxDigits));
}

/**
 * 相除（解决小数精度丢失问题）
 *
 * @param a
 * @param b
 * @returns {number}
 */
function div(a, b) {
    const aDigits = getDecimalDigits(a);
    const bDigits = getDecimalDigits(b);

    const ia = Number(a.toString().replace(".", ""));
    const ib = Number(b.toString().replace(".", ""));
    return (ia / ib) * Math.pow(10, bDigits - aDigits)
}

/**
 * 相乘（解决小数精度丢失问题）
 * @param a
 * @param b
 * @returns {number}
 */
function multiply(a, b) {
    const m = getDecimalDigits(a) + getDecimalDigits(b);
    const ia = Number(a.toString().replace(".", ""));
    const ib = Number(b.toString().replace(".", ""));
    return ia * ib / Math.pow(10, m);
}

/**
 * 数字超过规定大小加上指定的后缀（如: 数字超过99显示99+）
 *
 * @param num
 * @param maxNum
 */
function crossNum(num, maxNum, suffix = '+') {
    const n = num ? num - 0 : 0;
    if (n > maxNum) {
        return maxNum + suffix;
    }
    return n;
}

/**
 * 数字 => 中文金钱大写
 * @param num
 * @returns {string}
 */
function toChineseMoney(num) {
    const cnNums = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"]; // 汉字的数字
    const cnRadices = ["", "拾", "佰", "仟"]; // 基数单位
    const cnUnits = ["", "万", "亿", "兆"];  // 大数单位
    const cnDecimalUnits = ["角", "分", "毫", "厘"];  // 小数部分单位
    const cnIntSuffix = "整"; // 整数后缀
    const cnIntYuan = "元";
    let result = "";

    if (num === "") {
        return "";
    }

    if (parseFloat(num) === 0) {
        return cnNums[0] + cnIntYuan + cnIntSuffix;
    }

    // 分离整数和小数部分
    const numParts = num.toString().split(".");
    const intPart = numParts[0];
    let decimalPart = '';
    if (numParts.length > 1) {
        decimalPart = numParts[1].substring(0, 4); // 只支持到厘
    }

    // 整数部分处理
    if (parseInt(intPart, 10) > 0) {
        let zeroCount = 0;
        for (let i = 0; i < intPart.length; i++) {
            const current = intPart.substr(i, 1);

            const p = intPart.length - i - 1;
            const unitIndex = p / 4;
            const radiceIndex = p % 4;

            if (current == "0") {
                zeroCount++;
            } else {
                if (zeroCount > 0) {
                    result += cnNums[0];
                }
                zeroCount = 0;
                result += cnNums[parseInt(current)] + cnRadices[radiceIndex];
            }

            if (radiceIndex == 0 && zeroCount < 4) {
                result += cnUnits[unitIndex];
            }
        }
        result += cnIntYuan;
    }

    // 小数部分处理
    if (decimalPart != '') {
        for (let i = 0; i < decimalPart.length; i++) {
            const current = decimalPart.substr(i, 1);
            if (current != "0") {
                result += cnNums[parseInt(current)] + cnDecimalUnits[i];
            }
        }
    } else {
        result += cnIntSuffix;
    }
    return result;
}


module.exports = {
    intToHex,
    binToHex,
    formatMoney,
    random,
    getDecimalDigits,
    add,
    sub,
    div,
    multiply,
    crossNum,
    toChineseMoney
};
