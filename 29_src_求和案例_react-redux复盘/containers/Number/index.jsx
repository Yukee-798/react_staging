import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAddAction, createSubAction, createAsyncAddAction } from '../../redux/actions_number'
import './index.scss'

class Number extends Component {
    handleClick = e => {
        let { add, sub, asyncAdd } = this.props;
        let { addBtn, subBtn, addAsyncBtn, select } = this;
        let value = select.value * 1;
        let target = e.target;
        
        switch (target) {
            case addBtn: 
                add(value);
            break;
            case subBtn: 
                sub(value);
            break;
            case addAsyncBtn: 
                asyncAdd(value, 1000);
            break;
            default: 
            break;
        }
    }
    

    render() {
        const {number} = this.props;
        return (
            <div className='number-warp'>
                <div className='number-title'>
                    <h3>number: {number}</h3>
                </div>
                <div className='number-console'>
                    <form action="#" onClick={this.handleClick}>
                        <select  ref={c => this.select = c} id="number-console-select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <button ref={c => this.addBtn = c} className='number-console-btn add' >+</button>
                        <button ref={c => this.subBtn = c} className='number-console-btn sub' >-</button>
                        <button ref={c => this.addAsyncBtn = c} className='number-console-btn add async' >asyncAdd</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({number: state.number}),
    {
        add: createAddAction,
        sub: createSubAction,
        asyncAdd: createAsyncAddAction
    }
)(Number);
