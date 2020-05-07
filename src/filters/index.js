import Vue from 'vue';

const filters = {
    join: function (a = [], separator = ',') {
        return a.join(separator);
    }
}

Object.entries(filters).forEach((item)=>{
    Vue.filter('czw-' + item[0], item[1]);
})
