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
                                        {/* 向路由组件传递 params 参数 */}
                                        {/* <Link to={`/home/message/content/${msg.id}/${msg.title}`}>{msg.title}</Link> */}

                                        {/* 向路由组件传递 search 参数 */}
                                        {/* <Link to={`/home/message/content/?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link> */}

                                        {/* 向路由组件传递 state 参数 */}
                                        <Link replace to={{ pathname: '/home/message/content', state: {id: msg.id, title: msg.title, content: msg.content}}}>{msg.title}</Link>

                                    </li>
                                )
                            })
                        }
                    </ul>                    
                </div>




                <Switch>
                    {/* 声明发送 params 参数：路由接收 link 传来的 id ，以键值对的形式发送到路由组件的 props.match.params*/}
                    {/* <Route path="/home/message/content/:id/:title" component={Content}/> */}

                    {/* 声明发送 search 参数：无需特意发送，这里直接就将 link 的 「 ? 及以后的内容 」 以字符串形式发送给了路由组件的 props.location.search */}
                    {/* <Route path="/home/message/content" component={Content}/> */}

                    {/* 声明发送 state 参数：无需特意发送，直接将路由路径中的 state 对象发送给了 this.props.location.state */}
                    <Route path="/home/message/content" component={Content}/>



                </Switch>
            </div>



        )
    }
}
