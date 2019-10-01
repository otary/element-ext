# element-ext


## 工具类

### string

- 驼峰/Pascal转下划线格式

```
import {string} from 'element-ext';

string.toCamel('UserName');  // => user_name
string.toCamel("UserName", '#'); // => user#name;
```

### array

- 判断是否数组

```
import {array} from 'element-ext';

array.isArray([1,2]); // => true
```

### object

- 克隆

```
import {object} from 'element-ext';

let o1 = {
    a: 1, b: 2, c: {
        c1: 3,
        c2: 4
    }
};

// 浅复制
let o2 = object.clone(o1);  
o1 === o2 // => false

// 深复制
let o3 = object.cloneDeep(o1);  
o1 === o3 // => false

```

- 判断对象的属性是否满足某个条件

```
import {object} from 'element-ext';

object.conformsTo({a: 1, b: 2}, {
    'a': function (n) {
        return n == 1;
    }
}); // => true
```


### url

- 获取url参数

```
import {url} from 'element-ext';

url.getUriParam('username', 'http://www.baidu.com?username=chenzw');  // => chenzw
```

### dom

- 动态加载css资源

```
import {dom} from 'element-ext';
dom.loadCss('./theme.css');
```

- 动态加载js资源

```
import {dom} from 'element-ext';
dom.loadScript('./jquery.js');
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

