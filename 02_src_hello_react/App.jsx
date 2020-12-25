/* 创建'外壳'组件 App */
import React,{Component} from 'react'
// 导入 Hello 组件
import Hello from './components/Hello/Hello'
// 导入 Welcome 组件
import Welcome from './components/Welcome/Welcome'

// 创建并暴露 App 组件
export default class App extends Component {
    render() {
        return (
            <div>
                <Hello/>
                <Welcome />
            </div>
        );
    }
}


