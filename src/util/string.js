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
    for (let i = 0; i < size - val.toString().length; i++) {
        result += padStr;
    }
    return result + val;
}

/**
 * 右填充
 * @param val
 * @param size
 * @param padStr
 */
function rightPad(val, size, padStr) {
    if (!size || !padStr) {
        return val;
    }
    let result = val;
    for (let i = 0; i < size - val.toString().length; i++) {
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
    let tokenReg = /(\\)?\{([^\\{\\}\\]+)(\\)?\}/g;

    return template.replace(tokenReg, function (word, slash1, token, slash2) {
        if (slash1 || slash2) {
            return word.replace('\\', '');
        }
        let variables = token.replace(/\s/g, '').split('.');
        let current = context;
        let i, length;

        for (i = 0, length = variables.length; i < length; ++i) {
            current = current[variables[i]];
            if (current === undefined || current === null) return '';
        }
        return current;
    })
}


/**
 * 截取字符串并添加省略号
 *
 * @param str
 * @param length
 */
function ellipsis(str, length) {
    if (!str || str.length == 0) {
        return "";
    }
    if (str.length > length) {
        return str.substr(0, length) + "...";
    }
    return str;
}

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function guid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

/**
 * HTML编码字符串
 * @param source
 * @returns {string}
 */
function encodeHTML(source) {
    return String(source)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/**
 *  HTML解码字符串
 * @param source
 * @returns {string}
 */
function decodeHTML(source) {
    const str = String(source)
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');

    // 处理转义的中文和实体字符
    return str.replace(/&#([\d]+);/g, ($0, $1) => String.fromCodePoint(parseInt($1, 10)));
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

module.exports = {
    toCamel,
    leftPad,
    rightPad,
    render,
    ellipsis,
    uuid,
    guid,
    encodeHTML,
    decodeHTML,
    unicode2Text
};
