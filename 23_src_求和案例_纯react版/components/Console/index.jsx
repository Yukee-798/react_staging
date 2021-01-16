import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import './style.css';

class Console extends Component {
    
    handleClick = (event)=> {
        let control = {
            value: '',
            type: ''
        }
        control.value = this.select.value;

        switch(event.target) {
            case this.addBtn:
                control.type = 'add';
                PubSub.publish('control', control);

            break;

            case this.subBtn:
                control.type = 'sub';
                PubSub.publish('control', control);

            break;

            case this.addIfOddBtn:
                control.type = 'addIfOdd';
                PubSub.publish('control', control);

            break;

            case this.addAsyncBtn:
                setTimeout(() => {
                    control.type = 'addAsync';
                    PubSub.publish('control', control);
                    console.log(control.value);
                }, 2000);
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
