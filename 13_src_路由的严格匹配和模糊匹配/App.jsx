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

                            {/* 
                                关于路径的模糊匹配和精准匹配：
                                    1. 模糊匹配
                                        link: /home/a/b
                                        route: /home   ----- 会匹配

                                        link: /home
                                        route: /home  ----- 会匹配

                                        link: /a/home/b 
                                        route: /home ---- 不会匹配

                                    2. 精准匹配
                                        link: /home/a/b
                                        route: exact={true} /home/a/b ---- 会匹配

                                        link: /home/a/b
                                        route: exact /home  ---- 不会匹配
                            */}
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">

                                <Switch>
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                </Switch>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
