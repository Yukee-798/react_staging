import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';
import './index.css';

class List extends Component {

    static propTypes = {
        updateTodos: PropTypes.func.isRequired,
        todos: PropTypes.array.isRequired
    }

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
