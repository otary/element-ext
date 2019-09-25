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
       /* params.map((item)=> item).filter((item, index) => {

         });*/

       Object.entries().forEach((o)=>{
           console.log(o);
       });
        /*let _search = window.location ? window.location.search : '';
        url = url || _search;
        let paramReg = getSearchReg(paramName);
        let results = url.match(paramReg);
        console.log(results);
        if (results) {
            return results[2];
        }*/

    }


}