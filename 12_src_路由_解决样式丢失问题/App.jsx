import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import MyNavLink from './components/MyNavLink'
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

                            {/* 样式缺失的问题： 
                                    1. 存在多级路径 <MyNavLink to="/momo/about">About</MyNavLink>
                                    2. 刷新页面后可能会出现样式缺失的问题

                                原因：
                                    在 public 下的 index 文件中通过 <link rel="stylesheet" href="./css/bootstrap.css"> 引入样式
                                       相当于引入 localhost:3000/momo/css/bootstrap.css，由于没有这个路径文件，所以缺失了样式

                                    解决方式一： <link rel="stylesheet" href="/css/bootstrap.css"> ，将 ./css 变为 /css
                                              ./css 相当于在当前目录/momo 下找 css
                                              /css 相当于直接在 public 中找 css

                                    解决方式二： %PUBLIC_URL%/css

                                    解决方式三： 使用 HashRouter

                                
                            
                            
                            */}
                            <MyNavLink to="/momo/about">About</MyNavLink>
                            <MyNavLink to="/momo/home">Home</MyNavLink>

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">

                                <Switch>
                                    <Route path="/momo/about" component={About} />
                                    <Route path="/momo/home" component={Home} />
                                </Switch>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
