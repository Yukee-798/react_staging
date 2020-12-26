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



## 二、功能界面的组件化编码流程
1. 拆分组件: 拆分界面,抽取组件
2. 实现静态组件: 使用组件实现静态页面效果
3. 实现动态组件
    (1) 动态显示初始化数据
    (2) 数据类型
    (3) 数据名称
    (4) 保存在哪个组件?
    (4)交互(从绑定事件监听开始)

## TodoList 案例的收获
1. 组件拆分、实现静态组件，注意：`className`、`style` 的写法
2. 动态初始化列表，如何确定将数据放在哪个组件的 `state` 中？
    (1) 供某个组件使用的数据：放在其自身的 `state` 中
    (2) 供某些组件使用的数据：放在它们共同的祖先组件的 `state` 中 (状态提升)
3. 关于父子组件之间的通信
    (1) 「 父组件 」 给 「 子组件 」 传递数据：通过 `props` 传递
    (2) 「 子组件 」 给 「 父组件 」 传递数据：让父组件给子组件通过 `props` 传递一个函数，这个函数可以修改 **父组件的状态** ，然后 **子组件** 通过这个函数 **传递数据** 给 **父组件**
4. 注意 `checkbox` 中 `defaultChecked` 和 `checked` 的区别，类似的还有 `defaultValue` 和 `value`
5. 状态在哪，操作状态的方法就定义在哪
6. 理解数组的三个方法：`map`、`filter`、`reduce`
7. 理解 `getDerivedStateFromProps` 用法
