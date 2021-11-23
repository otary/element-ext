/**
 * 获取PPI
 */
function getPPI() {
    const el = document.createElement('div');
    el.style.width = "1in";
    el.style.padding = '0';
    document.body.appendChild(el);
    const ppi = el.offsetWidth;
    document.body.removeChild(el);
    return ppi;
}


module.exports = {
    getPPI
}
