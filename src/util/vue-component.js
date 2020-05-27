const Vue = require('vue')

/**
 * 将指定目录下的所有vue组件进行挂载
 *
 * @author chenzw
 * @param path
 * @param useSubdirectories
 * @param regExp
 */
const loadByPath = ({path, useSubdirectories = true, regExp = /\.vue/}) => {
    const requireComponents = require.context(path, useSubdirectories, regExp);

    requireComponents.keys().forEach((fileName) => {
        const component = requireComponents(fileName);
        // 截取路径作为组件名
        const componentName = fileName.split('/')[1];

        // 组件挂载
        Vue.default.component(componentName, component.default || component);
    });
}

/**
 * 查找指定名称的父组件
 *
 * @author chenzw
 * @param context
 * @param componentName
 * @returns {Vue | *}
 */
const findParentComponent = (context, componentName) => {
    let parent = context.$parent;
    let name = parent.$options.name;

    while (parent && (!name || [componentName].indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
};

/**
 * 查找所有指定名称的父组件
 *
 * @author chenzw
 * @param context
 * @param componentName
 */
const findParentComponents = (context, componentName) => {
    const parents = [];
    const parent = context.$parent;

    if (parent) {
        if (parent.$options.name === componentName) parents.push(parent);
        return parents.concat(findParentComponents(parent, componentName));
    }
    return [];
};

/**
 * 查找指定名称的子组件
 *
 * @author chenzw
 * @param context
 * @param componentName
 * @returns {*}
 */
const findChildComponent = (context, componentName) => {
    const childrens = context.$children;
    let children = null;

    if (childrens.length) {
        for (const child of childrens) {
            const name = child.$options.name;

            if (name === componentName) {
                children = child;
                break;
            } else {
                children = findChildComponent(child, componentName);
                if (children) break;
            }
        }
    }
    return children;
};

/**
 * 查找所有指定名称的子组件
 *
 * @author chenzw
 * @param context
 * @param componentName
 * @returns {*}
 */
const findChildComponents = (context, componentName) => {
    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) components.push(child);
        const foundChilds = findChildComponents(child, componentName);
        return components.concat(foundChilds);
    }, []);
};

/**
 * 查找兄弟组件
 *
 * @author chenzw
 * @param context
 * @param componentName
 * @param selfInclude
 * @returns {Vue[]}
 */
const findSiblingsComponents = (context, componentName, selfInclude = false) => {
    const res = context.$parent.$children.filter(item => item.$options.name === componentName);
    const index = res.findIndex(item => item._uid === context._uid);
    if (!selfInclude) res.splice(index, 1);
    return res;
};


module.exports = {
    loadByPath,
    findParentComponent,
    findParentComponents,
    findChildComponent,
    findChildComponents,
    findSiblingsComponents
};
