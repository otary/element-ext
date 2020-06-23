/**
 * 获取url参数
 *
 * @author chenzw
 * @param paramName
 * @param url
 * @returns {string}
 */
function getUriParam(paramName, url = window.location.href) {
    const reg = new RegExp("[?&]" + paramName + "=([^&#]*)", "i");
    const results = url.match(reg);
    if (results && results.length > 1) {
        return decodeURIComponent(results[1]);
    }
    return '';
}

/**
 * 获取url参数列表（数组）
 *
 * @author chenzw
 * @param paramName
 * @param url
 * @returns {string}
 */
function getUriParams(paramName, url = window.location.href) {
    let searchParams = new URLSearchParams(url);
    return searchParams.getAll(paramName);
}

/**
 * 是否存在指定的参数
 *
 * @author chenzw
 * @param paramName
 * @param url
 * @returns {boolean}
 */
function existsParam(paramName, url = window.location.href) {
    let searchParams = new URLSearchParams(url);
    return searchParams.has(paramName);
}

/**
 * 将Object对象转换成url参数字符串
 *  <p>
 *     createQueryString({
 *         a: '2'
 *         b: '3',
 *         c: '4'
 *     });  // => a=2&b=3&c=4
 *  </p>
 *
 * @param oParam
 * @returns {string}
 */
function createQueryString(oParam = {}) {
    return Object.keys(oParam).reduce((s, key) => {
        return s + (s == '' ? '' : '&') + encodeURIComponent(key) + '=' + encodeURIComponent(oParam[key]);
    }, '');
}

/**
 * @author chenzw
 */
module.exports = {
    getUriParam,
    getUriParams,
    existsParam,
    createQueryString
};
