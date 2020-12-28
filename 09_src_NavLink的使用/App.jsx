import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 导航区 */}
                            {/* 原生 html 中靠 a 标签来跳转不同的页面 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a> */}

                            {/* 在 React 中靠路由链接实现浏览器 path 的切换 ———— 编写路由链接 */}
                            {/* NavLink 与普通的 Link 区别就是，被点击后会在其类名后面默认追加一个 active 类名 */}
                            {/* 我们可以通过 activeClassName 来修改这个默认追加值 */}
                            <NavLink activeClassName='active' className="list-group-item" to="/about" >About</NavLink>
                            <NavLink activeClassName='active' className="list-group-item" to="/home" >Home</NavLink>

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 如果路径为 /about 则展示 About 组件 */}
                                {/* 如果路径为 /home 则展示 Home 组件 */}
                                {/* 组册路由组件 */}
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
