/**
 * 动态加载css资源
 * @author chenzw
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
 * @author chenzw
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
 * 延迟阻塞执行
 * @author chenzw
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
 * @author chenzw
 * @param cssPropertyName
 * @returns {boolean}
 */
const supportCssProperty = (cssPropertyName) => {
    if (cssPropertyName in document.documentElement.style) {
        return true;
    }
    return false;
};

/**
 * 添加监听事件
 *
 * @author chenzw
 */
const on = (function () {
    if (document.addEventListener) {
        return function (el, event, handler) {
            if (el && event && handler) {
                el.addEventListener(event, handler, false);
            }
        }
    }
    return function (el, event, handler) {
        if (el && event && handler) {
            el.attatchEvent(`on${event}`, handler);
        }
    }
}());

/**
 * 移除监听事件
 *
 * @author chenzw
 */
const off = (function () {
    if (document.removeEventListener) {
        return function (element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false);
            }
        };
    }
    return function (element, event, handler) {
        if (element && event) {
            element.detachEvent(`on${event}`, handler);
        }
    };
}());

/**
 * 添加一次性事件
 *
 * @author chenzw
 * @param el
 * @param event
 * @param fn
 */
const once = (el, event, fn) => {
    const listener = function () {
        if (fn) {
            fn.apply(this, [el, event, fn]);
        }
        off(el, event, listener);
    };
    on(el, event, listener);
};


module.exports = {
    loadCss,
    loadScript,
    delayInit,
    supportCssProperty,
    on,
    off,
    once
};
