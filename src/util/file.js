/**
 * 获取文件后缀名
 * @param fileName
 */
function getFileExtension(fileName) {
    return fileName.split('.').pop();
}

/**
 * 获取文件名
 * @param fileName
 * @returns {string}
 */
function getFileName(fileName) {
    return fileName.substring(fileName.lastIndexOf('/') + 1, fileName.lastIndexOf("."));
}

/**
 * 人类的文件大小
 * @param size
 * @param fractionDigits
 */
function dataSizeHR(size, fractionDigits = 2) {
    if (!size) {
        return '0 B';
    }
    const units = new Array('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB');
    const fsize = parseFloat(size);
    const index = Math.floor(Math.log(fsize) / Math.log(1024));
    const _size = (fsize / Math.pow(1024, index))
        .toFixed(fractionDigits);
    return _size + ' ' + units[index];
}

/**
 * 文件转DataURL
 * @param file
 * @returns {Promise<any>}
 */
function file2DataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

/**
 * file转ArrayBuffer
 * @param file
 * @returns {Promise<any>}
 */
function file2ArrayBuffer(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
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
function dataURL2File(dataURL, fileName = '') {
    var arr = dataURL.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, {type: mime});
}

/**
 * DataURL 转 Blob
 * @param dataURL
 * @returns {Blob}
 */
function dataURL2Blob(dataURL) {
    var arr = dataURL.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
}

/**
 * ArrayBuffer 转 Base64
 * @param arrayBuffer
 * @returns {string}
 */
export function arrayBuffer2base64(arrayBuffer) {
    let binary = "";
    let bytes = new Uint8Array(arrayBuffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

/**
 * ArrayBuffer 转 DataURL
 * @param arrayBuffer
 * @param imageType
 * @returns {string}
 */
export function arrayBuffer2DataURL(arrayBuffer, imageType) {
    return `data:${imageType};base64,` + arrayBuffer2base64(arrayBuffer);
}


/**
 * 文件选择
 * @param opts
 */
export function choiceFile(opts = {}) {
    return new Promise((resolve, reject) => {
        const inputEl = document.createElement("input");
        inputEl.setAttribute("type", "file");
        if (opts.accept) {
            inputEl.setAttribute("accept", opts.accept);
        }
        inputEl.onchange = (e) => resolve(e.target.files);
        inputEl.click();
    });
}

/**
 * 将file对象转成url（blob）
 * @param object
 * @returns {string}
 */
export function createObjectURL(file) {
    return (window.URL) ? window.URL.createObjectURL(file) : window.webkitURL.createObjectURL(file);
}



function findChild(childrens = [], label, opts) {
    const found = childrens.find((item) => {
        return item[opts.labelField] === label;
    });
    if (found) {
        return found;
    }
    const node = {};
    node[opts.labelField] = label;
    childrens.push(node);
    return node;
}

/**
 * 生成树形结构
 * @param fileList
 * @param opts
 * @returns {Array}
 */
export function list2tree(fileList = [], opts = {}) {
    opts = Object.assign({
        originalTree: [],
        pathField: 'path',
        labelField: 'label',
        childField: 'childrens',
        extFields: () => {
            return {};
        }
    }, opts);

    const originalTree = opts.originalTree;

    fileList.forEach((item) => {
        const pathParts = extractPropVal(item, opts.pathField).split('/');
        let childrens = originalTree;
        for (let i = 0; i < pathParts.length; i++) {
            const pathPart = pathParts[i];
            const node = findChild(childrens, pathPart, opts);
            const isLeaf = (i === pathParts.length - 1);
            Object.assign(node,
                {leaf: isLeaf},
                opts.extFields(item, isLeaf) || {}
            );
            if (!node[opts.childrenField]) {
                node[opts.childrenField] = [];
            }
            childrens = node[opts.childrenField];
        }
    });
    return originalTree;
}

function extractPropVal(o, path) {
    if (path.indexOf(".") > -1) {
        const parts = path.split(".");
        let result = o;
        parts.forEach((part) => {
            result = result[part]
        });
        return result;
    }
    return o[path];
}

/**
 * 树遍历
 * @param childrens
 * @param index
 * @param level
 */
function recursionTree(childrens, index, level, opts) {
    if (typeof opts.nodeCallback === 'function') {
        opts.nodeCallback(childrens[index], childrens, index, level);
    }

    if (typeof opts.matches === 'function') {
        if (opts.matches(childrens[index], childrens, index, level)) {
            return {
                node: childrens[index],
                index,
                level
            };
        }
    }

    level++;
    const childs = childrens[index][opts.childrenField];
    for (let i = 0; i < childs.length; i++) {
        const result = recursionTree(childs, i, level, opts);
        if (result) {
            return result;
        }
    }
}

/**
 * 树迭代
 * @param fileTree
 */
export function iterateTree(fileTree = [], opts = {}) {
    opts = Object.assign({
        childField: 'childrens',
        nodeCallback: () => {
            return {};
        }
    }, opts);

    for (let i = 0; i < fileTree.length; i++) {
        recursionTree(fileTree, i, 0, opts);
    }
}

/**
 * 查找树节点
 * @param fileTree
 * @param opts
 * @returns {{node, level, index}}
 */
export function findTreeNode(fileTree = [], opts = {}) {
    opts = Object.assign({
        childField: 'childrens',
        matches: () => {
            return false;
        }
    }, opts);

    for (let i = 0; i < fileTree.length; i++) {
        return recursionTree(fileTree, i, 0, opts);
    }
}



module.exports = {
    getFileExtension,
    getFileName,
    file2DataURL,
    file2ArrayBuffer,
    dataURL2File,
    dataURL2Blob,
    choiceFile,
    createObjectURL,
    arrayBuffer2base64,
    arrayBuffer2DataURL,
    list2tree,
    iterateTree,
    findTreeNode,
    dataSizeHR
};
