/**
 * 获取文件后缀名
 * @param fileName
 */
export function getFileExtension(fileName) {
    return fileName.split('.').pop();
}

/**
 * 获取文件名
 * @param fileName
 * @returns {string}
 */
export function getFileName(fileName) {
    return fileName.substring(fileName.lastIndexOf('/') + 1, fileName.lastIndexOf("."));
}

/**
 * 文件转DataURL
 * @param file
 * @returns {Promise<any>}
 */
export function file2DataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

/**
 * DataURL 转 File对象
 * @param dataURL
 * @param fileName
 * @returns {File}
 */
export function dataURL2File(dataURL, fileName = '') {
    var arr = dataURL.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, {type:mime});
}

module.exports = {
    getFileExtension,
    getFileName,
    file2DataURL,
    dataURL2File
};
