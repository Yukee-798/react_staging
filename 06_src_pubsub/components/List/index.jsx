import React, { Component } from 'react';
import PubSub from 'pubsub-js';

import Item from '../Item';
import './index.css';

export default class List extends Component {

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

    // 订阅消息
    componentDidMount() {
        this.token = PubSub.subscribe('updateListState', (msg ,stateObj) => {
            this.setState(stateObj)
        });
    }

    // 取消订阅
    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }


    render() {
        const {isFirst, isLoading,users, err } = this.state;
        return (
           
            <div className="row">
                {
                      isFirst ? <h2>Enter the keyword</h2> :
                    isLoading ? <h2>Loading...</h2>        :
                          err ? <h2 style={{color: 'red'}}>{err.message}</h2>             : 
                    users.map((user) => {
                        return <Item key={ user.id } {...user}/>
                    })
                }
            </div>
        )
    }
}
