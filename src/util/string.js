/**
 * 驼峰/Pascal转下划线格式
 *
 * @author chenzw
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

/**
 * 左填充
 *
 * @author chenzw
 * @param val
 * @param size
 * @param padStr
 * @returns {string}
 */
function leftPad(val, size, padStr) {
    if (!size || !padStr) {
        return val;
    }
    let result = "";
    for (let i = 0; i < size; i++) {
        result += padStr;
    }
    return result;
}

/**
 * 字符串模版（暂不支持数组）
 * @param template 模版,占位符: {}
 * @param context 数据对象
 * @returns {*}
 */
function render(template, context) {
    let tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;

    return template.replace(tokenReg, function (word, slash1, token, slash2) {
        if (slash1 || slash2) {
            return word.replace('\\', '');
        }
        let variables = token.replace(/\s/g, '').split('.');
        let currentObject = context;
        let i, length;

        for (i = 0, length = variables.length; i < length; ++i) {
            currentObject = currentObject[variables[i]];
            if (currentObject === undefined || currentObject === null) return '';
        }
        return currentObject;
    })
}

module.exports = {
    toCamel,
    leftPad,
    render
};
