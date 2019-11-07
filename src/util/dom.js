/**
 * 动态加载css资源
 * @param url
 */
const loadCss = (url) => {
    let tag = document.createElement('link');
    for (let i = 0; i < document.links.length; i++) {
        if (document.links[0].href === url) {
            return;
        }
    }
    tag.setAttribute("type", "text/css");
    tag.setAttribute("ref", "style/sheet");
    tag.setAttribute("href", url);

    document.body.appendChild(tag);
};

/**
 * 加载js资源
 * @param url
 */
const loadScript = (url) => {
    let tag = document.createElement('script');
    for (let i = 0; i < document.scripts.length; i++) {
        if (document.scripts[0].src === url) {
            return;
        }
    }
    tag.setAttribute("src", url);

    document.body.appendChild(tag);
};

/**
 * 延迟阻塞
 *
 * @param matchFn
 * @param callbackFn
 */
const delayInit = (matchFn, callbackFn) => {
    if (matchFn()) {
        let timer = setInterval(function () {
            if (matchFn()) {
                clearInterval(timer);
                return callbackFn();
            }
        }, 50);
    } else {
        return callbackFn();
    }
};


/**
 * 是否支持某个CSS属性
 * @param cssPropertyName
 * @returns {boolean}
 */
const supportCssProperty = (cssPropertyName) => {
    if (cssPropertyName in document.documentElement.style) {
        return true;
    }
    return false;
};


module.exports = {
    loadCss,
    loadScript,
    delayInit,
    supportCssProperty
}