import React, {Component} from 'react'
import {NameContext} from '../context';
import D from './D'
export default class C extends Component {
    static contextType = NameContext;
    render() {
        return (
            <div style={{ border: '1px solid black', padding: '10px' }}>
                <h3>我是C组件</h3>
                <h4>我从A组件拿到{this.context}</h4>
                <D />
            </div>
        );
    }
}