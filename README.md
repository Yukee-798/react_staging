# 学习收获

## 一、文件目录说明
---
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
---
1. 拆分组件: 拆分界面,抽取组件
2. 实现静态组件: 使用组件实现静态页面效果
3. 实现动态组件 <br/>
    (1) 动态显示初始化数据 <br/>
    (2) 数据类型 <br/>
    (3) 数据名称 <br/>
    (4) 保存在哪个组件? <br/>
    (4)交互(从绑定事件监听开始) <br/>

## 三、TodoList 案例的收获
---
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
---
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

## 五、路由
---
### 路由的基本使用
1. 明确好界面中的导航区、展示区
2. 导航区的 a 标签改为 Link 标签
`<Link to="/点击该链接后跳转的路径">Demo</Link>`
3. 展示区写Route标签进行路径的匹配，匹配成功则放置后面的组件
`<Route path= "/匹配路径" component={Demo}/>`
4. 在 index.js 中的 `<App />` 的最外侧包裹一个 `<BrowserRouter>` 或 `<HashRouter>`



### 路由组件与一般组件
1. 写法不同：
   * 一般组件：`<Demo/>`
   * 路由组件：`<Route path=" /demo" component={Demo}/>`
2. 存放位置不同：
   * 一般组件：components
   * 路由组件：pages
3. 接收到的props不同：
   * 一般组件：写组件标签时传递了什么，就能收到什么
   * 路由组件：接收到 **三个固定的属性**
    ```js
    history:
      go: ƒ go(n)
      goBack: ƒ goBack()
      goForward: ƒ goForward()
      push: ƒ push(path, state)
      replace: ƒ replace(path, state)

    location:
      pathname: "/about"
      search: ""
      state: undefined

    match:
      params: {}
      path: "/about"
      url: "/about"
    ```

### NavLink 与封装 NavLink
1. `NavLink` 可以实现路由链接的高亮，通过 `activeClassName` 指定样式名
2. 标签体内容是一个特殊的标签属性
3. 通过 `this.props.children` 可以获取标签体内容

### Switch 的使用
1. 通常情况下，path 和 component是一一对应的关系
2. 使用 Switch 组件包裹路由：当某一个路由匹配上路径的时候，就不会再继续往下进行搜索匹配了




### 解决多级路径刷新页面样式丢失的问题
1. public/index.html 中引入样式时不写 ./ 写 /
2. public/index.html 中引入样式时不写 ./ 写 %PUBLIC_URL%
3. 使用 HashRouter



### 路由的严格匹配与模糊匹配
1. 默认使用的是模糊匹配(简单记:[输入的路径]必须包含要[匹配的路径]，且顺序要一致)
2. 开启严格匹配: `<Route exact={true} path="/ about" component={About}/>`
3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由


### Redirect 的使用
1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到 `Redirect` 指定的路由
2. 例子：
```js
<Switch>
  <Route path="/about" component={About} />
  <Route path="/home" component={Home} />
  <Redirect to="/about" />
</Switch>
```


### 多级路由
1. 注册子路由时要写上父路由的path值
2. 路由的匹配是按照注册路由的顺序进行的



### 向路由组件传递参数
1. params 参数
   * 路由链接(携带参数): `<Link to='/demo/test/tom/18'>详情</Link>`
   * 注册路由(声明接收): `<Route path='/demo/test/:name/:age' component={Test}/>` ，这里相当于接收了 `{name: 'tom', age: '18'}` 
   * 在路由组件内部接收参数: `const {id,title} = this.props.match.params`


2. search参数
   * 路由链接(携带参数): `<Link to= '/demo/test?name=tom&age=18'>详情</Link>`
   * 注册路由(无需声明，正常注册即可): `<Route path='/demo/test' component={Test}/>`
   * 接收参数: this.props.location I
   * 获取到的 search 是 urlencoded 编码字符串，可以借助脚手架自带的库 querystring 解析


3. state参数
   * 路由链接(携带参数): `<Link to={{path: '/demo/test', state: {name: 'tom', age: 18}}}>详情</Link>`
   * 注册路由(无需声明，正常注册即可): `<Route path='/demo/test' component={Test}/>`
   * 接收参数: this.props.location.state
   * 备注:刷新也可以保留住参数


## 六、redux 
---

### redux 的基本使用
1. 目录结构
    > -src
    > &emsp;-redux
    > &emsp;&emsp;&emsp;-store.js
    > &emsp;&emsp;&emsp;-number_reducer.js

2. store.js 的使用
     * 通过 redux 引入 createStore 函数来创建 store 对象
     * 调用 createStore 时需要传入一个 reducer
     * 通过 `store.dispatch(actionObj)` 通知 reducer 用什么方式处理数据
     * 通过 `store.getState()` 来获取 reducer 加工后的状态数据
     * 通过 `store.subscribe(() => {})` 来监控共享状态改变后执行回调
3. number_reducer.js 的使用
     * reducer 本质上是一个函数，接收：preState, action 两个参数，返回加工后的状态数据到 store 对象中
     * reducer 的作用：初始化状态和加工状态
     * 在页面加载时，store 会自动调用一次 reducer 来初始化共享状态，此时的 preState 为 undefined，action 为一个随机字符串

4. number_action.js 专门用于创建 Number 组件的 action 对象
5. constant.js 保存 action 的 type 常量

### 同步和异步 action
1. 同步 action：`store.dispatch()` 中的 action 对象就是一个普通的 Object 对象
2. 异步 action：`store.dispatch()` 中的 action 对象是一个函数

> 在求和案例中，对于异步加，之前使用的同步 action，所以异步操作是放在了组件里面实现的，如果使用异步 action，那么异步操作就是放在 action 函数中实现的。

**启动异步 action 步骤**
1. store.js 中 `import thunk from 'redux-thunk'`、`import {createStore, applyMiddleware} from 'redux'`
2. store.js 中 `export default createStore(number_reducer, applyMiddleware(thunk))`
3. 创建异步 action
    ```js
    export const createIncrementAsyncAction = (data, time) => {
        return (dispatch) => {
            setTimeout(() => {
                dispatch(createIncrementAction(data));
            }, time);
        }
    };
    ```
4. 在组件中需要执行该 action 来修改状态的地方 `store.dispatch(createIncrementAsyncAction(value, 1000));`

注意：
* 创建异步 action 的实质就是返回了一个函数对象，这个函数实现了异步的调用同步 action 的逻辑
* 创建 store 时，传入了 `applyMiddleware(thunk)` 目的是在 store 分发(dispatch) action 时，如果返回的是函数则直接调用，如果是一个 action 对象，形如：{type:'', data: ''}，则通知 reducer
* 异步 action 不是必须要写的，完全可以组件中实现异步操作，不一定只在 action 中实现



### react-redux 的基本使用
#### UI 组件
1. 不能使用 redux 的任何 api
2. 只能通过 props 接收来自容器组件传来的 `状态` 和 `操作状态的方法` 进而来实现页面渲染和交互

#### 容器组件
1. 容器组件的创建：`connect(mapStateToProps, mapDispatchToProps)(NumberUI)`，通过 react-redux 中的 `connect` 来创建，调用后会返回容器组件对象
2. 向容器组件传入 store，`<Container store={store}> </Container>`
3. 容器组件连接 UI 组件，自此容器组件就成为了 `UI 组件` 和 `redux` 之间的桥梁
4. mapStateToProps：用于向 UI 组件传递状态数据，有一个默认的参数即 UI 组件的共享状态 `state`，需要返回一个对象，形如 `{age: state.age}`，该返回的对象的属性会追加到 UI 组件的 props 中
5. mapDispatchToProps：
    * 用于向 UI 组件传递操作状态的方法，有一个默认参数即 dispatch
    * 简写方式：直接传入一个对象，对象中的属性就是 createAction 的方法，形如： {add: createIncrementAction}
6. 使用了 react-redux 后，容器组件自动实现了共享状态的监测和页面重新渲染，因此不用再订阅了(connect 底层实现的)


#### Provider 组件
使用场景：
```js
ReactDOM.render(
    // Provider 用于向所有容器组件传递 store
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
```

  
