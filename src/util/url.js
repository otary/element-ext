/**
 * 获取url参数
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
 * @param paramName
 * @param url
 * @returns {boolean}
 */
function existsParam(paramName, url = window.location.href) {
    let searchParams = new URLSearchParams(url);
    return searchParams.has(paramName);
}

/**
 * @author chenzw
 */
module.exports = {
    getUriParam,
    getUriParams,
    existsParam
}