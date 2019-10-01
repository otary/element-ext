# element-ext


## 工具类

### string

- 驼峰/Pascal转下划线格式

```
import {string} from 'element-ext';

string.toCamel('UserName');  // => user_name
string.toCamel("UserName", '#'); // => user#name;
```

### url

- 获取url参数

```
import {url} from 'element-ext';

url.getUriParam('username', 'http://www.baidu.com?username=chenzw');  // => chenzw
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build-bundle
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

