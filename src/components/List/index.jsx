import React, { Component } from 'react';
import Item from '../Item';
import './index.css';

class List extends Component {

    render() {
        const {todos, updateTodos} = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} {...todo} updateTodos={updateTodos}/>
                    })
                }
            </ul>
        );
    }
}

export default List;
