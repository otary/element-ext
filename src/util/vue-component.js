module.exports = {

    /**
     * 将目录下的所有vue组件进行挂载
     * @param path
     * @param useSubdirectories
     * @param regExp
     */
    loadByPath: function ({path, useSubdirectories = true, regExp = /\.vue/}) {
        const requireComponents = require.context(path, useSubdirectories, regExp);

        requireComponents.keys().forEach((fileName) => {
            const component = requireComponents(fileName);
            // 截取路径作为组件名
            const componentName = fileName.split('/')[1];

            // 组件挂载
            Vue.component(componentName, component.default || component);
        });

    }
};