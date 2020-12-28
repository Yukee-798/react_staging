import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

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
                            <Link className="list-group-item" to="/about" >About</Link>
                            <Link className="list-group-item" to="/home" >Home</Link>

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
