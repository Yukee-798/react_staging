import React, { Component } from 'react';
import './style.css';

class Console extends Component {
    
    handleClick = (event)=> {

        let value = this.select.value;

        switch(event.target) {
            case this.addBtn:
                // 通知 reducer 进行 add 类型处理状态数据

            break;

            case this.subBtn:
            break;

            case this.addIfOddBtn:
            break;

            case this.addAsyncBtn:
                        
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
