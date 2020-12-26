import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
    state = { totalCnt: 0, finishedCnt: 0, checked: false }

    handleCheck = (event) => {
        // 点击 check 后 checked 变为 true
        const { checked } = event.target;

        // 修改状态
        this.setState({ checked });
        
        // 更新 App 组件中的 todo
        let { updateTodos } = this.props;

        updateTodos(checked);
    }

    deleteFinished = (event) => {
        if (this.state.finishedCnt === 0) alert('你还没有完成任何任务哦～');
        else if (window.confirm('你确定清除所有已完成的任务吗？')) {
            const { updateTodos, todos } = this.props;
            let finishedTodosId = [];

            // 找到所有已经完成的任务的 id
            todos.forEach((todoObj) => {
                if (todoObj.checked) {
                    finishedTodosId.push(todoObj.id);
                }
            });
            updateTodos(finishedTodosId);
        }
    }



    static getDerivedStateFromProps(props) {
        // 计数所有任务的数量
        let totalCnt = props.todos.length;

        // 计数已经完成了的任务的数量
        let finishedCnt = props.todos.reduce((accumulator, todo) => accumulator + (todo.checked ? 1 : 0), 0);

        return {totalCnt, finishedCnt};
    }

    render() {

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheck} checked={this.state.finishedCnt === this.state.totalCnt && this.state.finishedCnt !== 0}/>
                </label>
                <span>
                    <span>已完成{this.state.finishedCnt}</span> / 全部{this.state.totalCnt}
                </span>
                <button className="btn btn-danger" onClick={this.deleteFinished} >清除已完成任务</button>
            </div>                
        );
    }

}

export default Footer;
