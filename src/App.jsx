import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

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


                                    {/* 相当于 default：当前面当路由都没有匹配上时，则重定向路径为 /about */}
                                    <Redirect to="/about" />
                                </Switch>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
