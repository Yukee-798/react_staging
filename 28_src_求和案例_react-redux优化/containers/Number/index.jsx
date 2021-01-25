import {connect} from 'react-redux';
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/number_action'


import React, { Component } from 'react'
import './style.css'
/* 
    UI 组件只能通过 props 来接收容器组件传送过来的东西
    1. 共享状态的数据 (创建容器组件时，mapStateToProps方法返回)
    2. 操作状态的函数 (创建容器组件时，mapDispatchProps方法返回)


*/

class Number extends Component {

    state = { myName: 'momo' }
    handleClick = (event) => {

        let value = this.select.value * 1;

        const { add, sub, asyncAdd, number } = this.props;

        switch (event.target) {
            case this.addBtn:
                add(value);

                break;

            case this.subBtn:
                sub(value);
                break;

            case this.addIfOddBtn:
                if (number % 2 !== 0) add(value);
                break;

            case this.addAsyncBtn:
                asyncAdd(value, 1000);
                break;
            default:
        }

    }
    render() {

        return (
            <div>
                <span>当前求和为：{this.props.number}</span>
                <form action="" onClick={this.handleClick}>
                    <select name="" id="select" ref={c => this.select = c}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button ref={c => this.addBtn = c} type="button" >+</button>
                    <button ref={c => this.subBtn = c} type="button" >-</button>
                    <button ref={c => this.addIfOddBtn = c} type="button">increment if odd</button>
                    <button ref={c => this.addAsyncBtn = c} type="button">increment async</button>
                </form>
            </div>
        )
    }
}



// 为 NumberUI 组件创建容器组件
export default connect (
        // mapStateToProps
        state => ({number: state.number}), 
        // mapDispatchToProps 简写：只需要传递 action 给 UI 组件，UI 组件调用后，react-redux 会自动 dispatch action
        {
            add: createIncrementAction,
            sub: createDecrementAction,
            asyncAdd: createIncrementAsyncAction 
        }
    )
(Number);




