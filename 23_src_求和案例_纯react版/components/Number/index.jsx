import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Number extends Component {
    state = {
        number: 0
    }


    componentDidMount() {
        this.token = PubSub.subscribe('control', (msg, control) => {
            let { number: oldNum } = this.state;
            this.setState(
                control.type === 'add' ? { number: oldNum + parseInt(control.value) } :
                control.type === 'sub' ? { number: oldNum - parseInt(control.value) } :
                control.type === 'addIfOdd' ? this.state.number % 2 === 0 ? { number: oldNum + parseInt(control.value) } : { number: this.state.number } :
                { number: oldNum + parseInt(control.value)  }
            );
        });
    }


    componentWillUnmount() {

    }
    
    render() {
        return (
            <div>
                <span>当前求和为：{this.state.number}</span>
            </div>
        )
    }
}
