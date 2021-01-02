import Content from './Content'
import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
// import PubSub from 'pubsub-js';


// 这里模拟 Ajax 从服务端请求过来的数据
const data = [
    {
        id: '001',
        title: '今天天气真好',
        content: '如题'
    },
    {
        id: '002',
        title: '如何评价 M1 芯片',
        content: '如何平均 M1 芯片？'
    },
    {
        id: '003',
        title: 'offer 选择求建议',
        content: '秋招拿了 50 个 offer'
    }
];

export default class Message extends Component {
    // state = {
    //     msgArr: [];
    // }

    // // 订阅消息
    // componentDidMount() {
    //     this.token = PubSub.subscribe('updateMsgList', (msg, stateObj) => {
    //         this.setState(stateObj)
    //     });
    // }

    // // 取消订阅
    // componentWillUnmount() {
    //     PubSub.unsubscribe(this.token);
    // }    

    getData = () => {
        return data;
    }

    render() {
        const data = this.getData();

        return (
            <div>
                <div>
                    <ul>
                        {
                            data.map((msg) => {
                                return (
                                    <li key={msg.id}>
                                        <Link to={`/home/message/${msg.id}/${msg.title}`}>{msg.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>                    
                </div>




                <Switch>
                    {/* 路由接收 link 传来的 id ，以键值对的形式发送到路由组件的 props.match.params*/}
                    <Route path="/home/message/:id/:title" component={Content}/>
                </Switch>
            </div>



        )
    }
}
