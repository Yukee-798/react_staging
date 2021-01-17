import React, { Component } from 'react';
import {createIncrementAction, createDecrementAction} from '../../redux/number_action'

// 获取 store 对象用于向 numberReducer 发出动作
import store from '../../redux/store'
import './style.css';

class Console extends Component {
    
    handleClick = (event)=> {

        let value = this.select.value;

        switch(event.target) {
            case this.addBtn:
                // 通知 reducer 进行 add 类型处理状态数据
                store.dispatch(createIncrementAction(value));

            break;

            case this.subBtn:
                store.dispatch(createDecrementAction(value));
            break;

            case this.addIfOddBtn:
                if (store.getState().number % 2 !== 0) store.dispatch(createIncrementAction(value));
            break;

            case this.addAsyncBtn:
                setTimeout(() => {
                    store.dispatch(createIncrementAction(value))
                }, 1000);
            break;

            default:
        }

    }


    render() {
        return (
            <div>
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
        );
    }
}

export default Console;
