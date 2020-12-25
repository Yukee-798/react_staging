import React, { Component } from 'react';

import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

import './App.css';

/*
    这里说一下整个项目的思路：
        App组件：
            (1) state 保存了由 Header 组件传来的 todo 对象数据
            (2) 通过向 Header 传入一个函数，实现 子组件向父组件传递数据
            (3) 向 List 传入了其 state 保存的数据

        Header组件：
            (1) 通过 props 接收由 App 组件传来的函数
            (2) 通过这个函数传入数据，来更新 App 的状态

        List组件：
            (1) 通过 props 接收来自 App 组件传来的数据
            (2) 再通过数组的 map 方法来生成一个由 Item 组件包裹，并且向 Item 传入了数组的每个数据

        Item组件：
            (1) 通过 props 来接收 List 组件传来的数据生成相应的 todo


*/


class App extends Component {
    state = {
        todos: [
            {id: '001', name: '占位测试', done: true},
            {id: '002', name: '占位测试', done: false},
            {id: '003', name: '占位测试', done: false}
        ]
    }

    // 用于子组件传递给父组件数据
    updateTodos = (todo) => {
        const {todos} = this.state;
        todos.unshift(todo);
        this.setState({todos});
    }

    render() {
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header updateTodos = {this.updateTodos} />
                        <List todos={this.state.todos}/>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
