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
 * 解析url
 * @param url
 * @returns {{path: string, protocol: string, file, port: string, query: string, host: string, params: {}, url, hash: string, relative, segments: string[]}}
 * @example parseUrl("https://www.baidu.com:80/s/index.html?ie=utf-8&f=8") => {"url":"https://www.baidu.com:80/s/index.html?ie=utf-8&f=8","protocol":"https","host":"www.baidu.com","port":"80","query":"?ie=utf-8&f=8","params":{"ie":"utf-8","f":"8"},"file":"index.html","hash":"","path":"/s/index.html","relative":"/s/index.html?ie=utf-8&f=8","segments":["s","index.html"]}
 */
function parseUrl(url) {
    const ael = document.createElement("a");
    ael.href = url;

    return {
        url,
        protocol: ael.protocol.replace(':', ''),
        host: ael.hostname,
        port: ael.port,
        query: ael.search,
        params: (function () {
            let ret = {},
                seg = ael.search.replace(/^\?/, '').split('&'),
                len = seg.length, i = 0, s;
            for (; i < len; i++) {
                if (!seg[i]) {
                    continue;
                }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (ael.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: ael.hash.replace('#', ''),
        path: ael.pathname.replace(/^([^\/])/, '/$1'),
        relative: (ael.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: ael.pathname.replace(/^\//, '').split('/')
    }
}

/**
 * 替换URL参数值
 * @param replaceMap
 * @param url
 * @returns {string}
 */
export function replaceUriParams(replaceMap, url = window.location.href) {
    Object.entries(replaceMap).forEach((map) => {
        const name = map[0];
        const value = map[1];
        url = url.replace(
            new RegExp(name + "=[^&]", "gi"),
            name + "=" + value
        );
    });
    return url;
}

/**
 * @author chenzw
 */
module.exports = {
    getUriParam,
    getUriParams,
    existsParam,
    createQueryString,
    parseUrl,
    replaceUriParams
};
