# element-ext

`element-ui` 扩展

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c2bd9fe0366a4ee5a3a44b04a1eeff1b)](https://www.codacy.com/manual/otary/easy-security?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=otary/easy-security&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/otary/element-ext.svg?branch=master)](https://travis-ci.org/otary/element-ext)

## 文档

[中文文档](https://otary.github.io/element-ext/docs/)

## demo

[demo](https://otary.github.io/element-ext/demo/)

## 样式类

统一以 `czw-` 开头

### box

[demo](https://otary.github.io/element-ext/demo/#/css/box)

> 美化滚动条

兼容性    
- [x] chrome
- [x] edge

``` html
<div class="czw-scrollbar-beautify-6">

</div>
```

> 隐藏滚动条

``` html
<div class="czw-scrollbar-beautify-hide">

</div>
```

> 遮罩

- 区域遮罩

``` html
<div style="position: relative; height: 100px;">
    <div class="czw-mask-absolute"></div>
</div>
```

- 全局遮罩

``` html
<div class="czw-mask-fixed"></div>

```

> 七彩颜色条

``` html
<div style="height: 5px;" class="czw-bg-colorful"></div>
```

> 七彩边框

``` html
<div style="border: 2px solid transparent;" class="czw-border-colorful">

</div>
```

---

### position

[demo](https://otary.github.io/element-ext/demo/#/css/position)

> 水平居中

``` html
<div style="height: 50px;">
   <div style="width: 200px;" class="czw-box-border czw-center-block">
        block
    </div>
</div>

<!-- block -->
<div style="position: relative; height: 100px;">
    <div class="czw-box-border czw-center">
        block
    </div>
</div>

<!-- inline -->
<div style="position: relative; height: 100px;">
    <span class="czw-box-border czw-center">
        inline
    </span>
</div>
```

> 垂直居中

``` html
<!-- block -->
<div style="position: relative; height: 100px;">
    <div class="czw-box-border czw-middle">
        block
    </div>
</div>

<!-- inline -->
<div style="position: relative; height: 100px;">
     <span class="czw-box-border czw-middle">
        inlne
     </span>
</div>
```

> 水平垂直居中

``` html
<!-- block -->
<div style="position: relative; height: 50px;">
   <div class="czw-box-border czw-center-middle">
       block
   </div>
</div>

<!-- inline -->
<div style="position: relative; height: 50px;">
   <span class="czw-box-border czw-center-middle">
      inline
   </span>
</div>
```

---
### text

[demo](https://otary.github.io/element-ext/demo/#/css/text)

> 单行省略号

``` html
<div style="width: 500px;" class="czw-text-ellipsis">
   2019年10月30日，国家烟草专卖局、国家市场监督管理总局发布《关于进一步保护未成年人免受电子烟侵害的通告》（附件一），敦促电商平台及时关闭电子烟店铺，并将电子烟产品及时下架。2019年11月6日，根据该通知要求，浙江省烟草专卖局《关于立即关闭电子烟店铺、下架电子烟产品的函》（附件二），要求阿里巴巴集团即日起关闭平台上电子烟店铺，并将电子烟产品及时下架。
</div>
```

> 多行省略号

``` html
<div style="width: 500px;" class="czw-text-ecllipsis-2">
     2019年10月30日，国家烟草专卖局、国家市场监督管理总局发布《关于进一步保护未成年人免受电子烟侵害的通告》（附件一），敦促电商平台及时关闭电子烟店铺，并将电子烟产品及时下架。2019年11月6日，根据该通知要求，浙江省烟草专卖局《关于立即关闭电子烟店铺、下架电子烟产品的函》
     （附件二），要求阿里巴巴集团即日起关闭平台上电子烟店铺，并将电子烟产品及时下架。
</div>
```

---
### animation

[demo](https://otary.github.io/element-ext/demo/#/css/animation)

> 点扩散效果

``` html
<div style="width: 10px;height: 10px;background-color: #ccc;border-radius: 50%; animation: czw-pulsate-2 1s ease-out infinite;">
</div>
```


---
### util

[demo](https://otary.github.io/element-ext/demo/#/css/util)

> 三角形

``` html
<div class="czw-triangle-left"></div>
<div class="czw-triangle-top"></div>
<div class="czw-triangle-bottom"></div>
<div class="czw-triangle-right"></div>

<div class="czw-triangle-right-4"></div>
<div class="czw-triangle-right-6"></div>
<div class="czw-triangle-right-8"></div>
<div class="czw-triangle-right-10"></div>
```

---

## 工具类

### string

- 驼峰/Pascal转下划线格式

``` javascript
import {string} from 'element-ext';

string.toCamel('UserName');  // => user_name
string.toCamel("UserName", '#'); // => user#name;
```

### array

- 判断是否数组

``` javascript
import {array} from 'element-ext';

array.isArray([1,2]); // => true
```

### object

- 克隆

``` javascript
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

``` javascript
import {object} from 'element-ext';

object.conformsTo({a: 1, b: 2}, {
    'a': function (n) {
        return n == 1;
    }
}); // => true
```


### url

- 获取url参数

``` javascript
import {url} from 'element-ext';

url.getUriParam('username', 'http://www.baidu.com?username=chenzw');  // => chenzw
```

### dom

- 动态加载css资源

``` javascript
import {dom} from 'element-ext';
dom.loadCss('./theme.css');
```

- 动态加载js资源

``` javascript
import {dom} from 'element-ext';
dom.loadScript('./jquery.js');
```

---

- 延迟加载

``` javascript
let loadFinished = false;
window.setTimeout(() => {
    loadFinished = true;
}, 2000);


dom.delayInit(() => {
   return loadFinished;
}, () => {
   return 'finish';
});  // => finish

```

- 是否支持某个CSS属性

``` javascript

```

## 安装
```
npm install
```

### 运行
```
npm run serve
```

### 编译

```
npm run build

// 编译js文件
npm run build:bundle
// 编译css文件
npm run build:scss
```

### 测试
```
npm run test
```

