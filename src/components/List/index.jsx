import React, { Component } from 'react';
import Item from '../Item';
import './index.css';

class List extends Component {
    render() {
        return (
            <ul className="todo-main">
                <Item />
                <Item />
                <Item />
            </ul>
        );
    }
}

export default List;
