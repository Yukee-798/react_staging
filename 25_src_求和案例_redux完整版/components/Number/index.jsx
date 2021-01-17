import React, { Component } from 'react'
// import PubSub from 'pubsub-js'

// 获取 store 对象来获取 reducer 处理的状态数据
import store from '../../redux/store'
export default class Number extends Component {

    state = { myName: 'momo'}


    // 下面的监测共享区状态变化还可以直接写到 index.js 中 (入口文件)
    // componentDidMount() {
    //     // 检测 redux 中共享状态的变换，只要变化就手动调用 render (因为 react 不会自动调用，只有私有状态改变才会自动调用)
    //     store.subscribe(() => {
    //         this.setState({});
    //         // this.render() 这样重新调用 render 没有用，只能通过上面的方式
    //     });
    // }


    componentWillUnmount() {
    }
    
    render() {

        console.log(store.getState().number);
        return (
            <div>
                <span>当前求和为：{store.getState().number}</span>
            </div>
        )
    }
}
