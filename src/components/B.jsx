import React from 'react'
import C from './C'
import {NameContext} from './A';
export default class B extends React.Component {
    static contextType = NameContext;
    render() {
        return (
            <div style={{ border: '1px solid blue', padding: '10px' }}>
                <h3>我是B组件</h3>
                <h4>我从A组件拿到{this.context}</h4>

                < C />
            </div>
        );
    }
}