/**
 * @author chenzw
 */
module.exports = {
    /**
     * 获取url参数
     * @param paramName
     * @param url
     * @returns {string}
     */
    getUriParam: (paramName, url = window.location.href) => {
        const reg = new RegExp("[?&]" + paramName + "=([^&#]*)", "i");
        const results = url.match(reg);
        if (results && results.length > 1) {
            return decodeURIComponent(results[1]);
        }
        return '';
    }


}