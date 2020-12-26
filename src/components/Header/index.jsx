import React, { Component } from 'react';
// 随机 id 生成库
import {nanoid} from 'nanoid';
import './index.css';

class Header extends Component {
    state = {value: ''}

    change = (event) => {
        this.setState({value: event.target.value});
    }

    handleKeyUp = (event) => {

        const {keyCode} = event;

        // 如果按下回车键
        if (keyCode === 13) {
            let value = this.state.value.trim();
            // 判断一下输入的是否为空串
            if (value === '') {
                alert('你还没有输入任何任务哦～');
                return;
            }

            const { updateTodos } = this.props;
            let todo = null;

            // 生成 todo 对象
            todo = {id: nanoid(), name: value, checked: false};

            // 修改 App 父组件的状态
            updateTodos(todo);
            this.setState({value: ''});
        }
    }

    render() {
        return (
            <div className="todo-header">
                <input 
                    onKeyUp={this.handleKeyUp} 
                    onChange={this.change} 
                    type="text" 
                    value={this.state.value}
                    placeholder="请输入你的任务名称，按回车键确认" 
                />
            </div>     
        );
    }
}

export default Header;
