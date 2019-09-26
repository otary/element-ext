export default {
    getAllParams: (url = window.location.href) => {
        const paramPattern = /(\w+)=(\w+)/ig;
        let params = {};
        url.replace(paramPattern, (o, name, value) => {
            params[name] = value;
        });
        return params;
    },

    getParams: (paramName, url) => {
        const params = getAllParams(url) || [];


    }


}