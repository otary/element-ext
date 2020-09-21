/**
 * 下载文件
 * @param url
 */
function download(url) {
    const iframeEl = document.createElement("iframe");
    iframeEl.src = url;
    iframeEl.style.display = 'none';
    document.body.appendChild(iframeEl);
}

/**
 * 下载ArrayBuffer数据
 * @param data arraybuffer数据
 * @param fileName 生成的文件名
 * @example
 * <p>
 *    axios.post(`/downloadExp`, data, {
 *      responseType: 'arraybuffer'
 *   }).then((resp)=> {
 *      stream.downloadArrayBuffer(resp.data);
 *   });
 * </p>
 */
function downloadArrayBuffer(data, fileName) {
    const aEl = document.createElement("a");
    aEl.href = window.URL.createObjectURL(new Blob[data]);
    aEl.download = fileName;
    document.body.appendChild(aEl);
    aEl.click();

    window.URL.revokeObjectURL(aEl.href);
    document.body.removeChild(aEl);
}


module.exports = {
    download,
    downloadArrayBuffer
}