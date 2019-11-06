/**
 * 动态加载css资源
 * @param url
 */
function loadCss(url) {
    let tag = document.createElement('link');
    for (let i = 0; i < document.links.length; i++) {
        if (document.links[0].href == url) {
            return;
        }
    }
    tag.setAttribute("type", "text/css");
    tag.setAttribute("ref", "style/sheet");
    tag.setAttribute("href", url);

    document.body.appendChild(tag);
}

/**
 * 加载js资源
 * @param url
 */
function loadScript(url) {
    let tag = document.createElement('script');
    for (let i = 0; i < document.scripts.length; i++) {
        if (document.scripts[0].src == url) {
            return;
        }
    }
    tag.setAttribute("src", url);

    document.body.appendChild(tag);
}

function delayInit(o, callback) {
    if (typeof o == 'undefined') {
        let timer = setInterval(function () {
            if (typeof o == 'undefined') {
                return false;
            }
            clearInterval(timer);
            callback(o);
        }, 50);
    } else {
        callback(o);
    }
}


module.exports = {
    loadCss,
    loadScript
}