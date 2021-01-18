import React, { Component } from 'react';
import {createIncrementAsyncAction, createIncrementAction, createDecrementAction} from '../../redux/number_action'

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
                // 这里传递了一个函数给 store 去分发任务给 reducer，但是 store 是不认函数的，因为没有 type 和 action 无法让 reducer 工作
                // store.dispatch(createIncrementAsyncAction(value, 1000));

                // 我们希望的只是让 store 去执行一下这个 createIncrementAsyncAction(value, 1000) 返回的函数
                // 需要借助一个库里面的中间件，来让 store ：当传入一个函数的时候只需要执行一个这个函数，不需要通知 reducer 工作
                store.dispatch(createIncrementAsyncAction(value, 1000));
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
