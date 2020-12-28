import React, { Component } from 'react'
import Search from './components/Seartch'
import List from './components/List'

export default class App extends Component {
    state = {
        users: [
            // {
            //     id: 57055112
            //     avatar_url: 'https://avatars1.githubusercontent.com/u/57055112?v=4', 
            //     login: 'Yukee-798',
            //     html_url: 'https://github.com/Yukee-798'
            // }
        ],
        // 是否为第一次打开页面
        isFirst: true,
        // 是否在搜索加载
        isLoading: false,
        err: '' // 存储请求相关错误信息
    }

    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Search updateAppState={this.updateAppState}/>
                    <List {...this.state}/>
               
                </div>
            </div>
        )
    }
}
