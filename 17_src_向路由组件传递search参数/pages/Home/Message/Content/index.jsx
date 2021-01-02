import React, { Component } from 'react'
// import PubSub from 'pubsub-js';

// 这是 React 脚手架自带的库
import qs from 'querystring'
/*
    qs库用于处理下面的场景： js 对象 和 urlencode 的转换
        qs.stringfy(obj)：
            const obj = {name: 'tom', age: '10'}  ====> const str = 'name=tom&age=10'
        qs.parse(str)：         
            const str = 'name=tom&age=10'  ====>  const obj = {name: 'tom', age: '10'}

*/


export default class Content extends Component {
    state = {
        id: '',
        title: ''
    };


    static getDerivedStateFromProps(props, state) {
        // 接收 params 参数
        // const params = props.match.params;

        // 接收并处理 search 参数
        const obj = qs.parse(props.location.search.slice(1));


        return obj;
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        Object.keys(this.state).map((prop) => {
                            return <li key={prop}>{`${prop}：${this.state[prop]}`}</li>
                        })
                    }
                </ul>

            </div>
        )
    }
}
