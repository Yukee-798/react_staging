# 学习收获

## 一、文件目录说明
### node_moduels
脚手架导入的依赖文件。

### public
静态资源文件夹。

* favicon.icon ------ 网站页签图标
* **index.html -------- 主页面** ，用于承载各个组件的 html 容器
* logo192.png ------- logo图
* logo512.png ------- logo图
* manifest.json ----- 应用加壳的配置文件
* robots.txt -------- 爬虫协议文件



### src
源码文件夹。

* App.css -------- App组件的样式
* **App.js --------- App组件**
* App.test.js ---- 用于给App做测试
* index.css ------ 样式
* **index.js ------- 入口文件**
* logo.svg ------- logo图
* reportWebVitals.js --- 页面性能分析文件(需要web-vitals库的支持)
* setupTests.js ---- 组件单元测试的文件(需要jest-dom库的支持)

<br/>

## 二、功能界面的组件化编码流程
1. 拆分组件: 拆分界面,抽取组件
2. 实现静态组件: 使用组件实现静态页面效果
3. 实现动态组件 <br/>
    (1) 动态显示初始化数据 <br/>
    (2) 数据类型 <br/>
    (3) 数据名称 <br/>
    (4) 保存在哪个组件? <br/>
    (4)交互(从绑定事件监听开始) <br/>

## 三、TodoList 案例的收获
1. 组件拆分、实现静态组件，注意：`className`、`style` 的写法
2. 动态初始化列表，如何确定将数据放在哪个组件的 `state` 中？ <br/>
    (1) 供某个组件使用的数据：放在其自身的 `state` 中 <br/>
    (2) 供某些组件使用的数据：放在它们共同的祖先组件的 `state` 中 (状态提升) <br/>
3. 关于父子组件之间的通信 <br/>
    (1) 「 父组件 」 给 「 子组件 」 传递数据：通过 `props` 传递 <br/>
    (2) 「 子组件 」 给 「 父组件 」 传递数据：让父组件给子组件通过 `props` 传递一个函数，这个函数可以修改 **父组件的状态** ，然后 **子组件** 通过这个函数 **传递数据** 给 **父组件** <br/>
4. 注意 `checkbox` 中 `defaultChecked` 和 `checked` 的区别，类似的还有 `defaultValue` 和 `value`
5. 状态在哪，操作状态的方法就定义在哪
6. 理解数组的三个方法：`map`、`filter`、`reduce`
7. 理解 `getDerivedStateFromProps` 用法

<br/>

## 四、React and AJAX

### 前置说明
1. React 本身只关注于界面, 并不包含发送 ajax 请求的代码
2. 前端应用需要通过 ajax 请求与后台进行交互 ( json 数据)
3. react 应用中需要集成第三方 ajax 库 (或自己封装)


### 常用的 AJAX 请求库
1. jQuery: 比较重, 如果需要另外引入不建议使用
2. axios: 轻量级, 建议使用 <br/>
    (1) 封装 XmlHttpRequest 对象的 ajax <br/>
    (2) promise 风格 <br/>
    (3) 可以用在浏览器端和 node 服务器端
<br/>

### axios
1. 文档：https://github.com/axios/axios
2. 相关 API <br/>
    (1) GET 请求 <br/>
    ```javascript
    axios.get('/user?ID=12345')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get('/user', {
        params: {
          ID: 12345
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    ```
    <br/>

    (2) POST 请求 <br/>
    ```javascript
    axios.post('/user', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
    ```

<br/>
 
### react 脚手架配置代理总结
#### 方法一

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）



#### 方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const proxy = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。