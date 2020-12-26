import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Item extends Component {
    state = {id: this.props.id, isMouseIn: false, isChecked: false}
    static propTypes = {
        updateTodos: PropTypes.func.isRequired
    }

    onMouseEnter = () => this.setState({ isMouseIn: true })
    onMouseLeave = () => this.setState({ isMouseIn: false })

    handleCheck = (event) => {
        const { checked } = event.target;
        this.setState({ isChecked: checked });

        const {updateTodos} = this.props;
        updateTodos({id: this.state.id, checked: checked});
    }
    
    handleDelete = () => {
        let isDelete = window.confirm('你确定删除吗？');
        if (isDelete) {
            const { updateTodos } = this.props;
            updateTodos({ id: this.state.id });
        }

    }

    render() {
        const {name} = this.props;
        return (

            <li 
                onMouseEnter={ this.onMouseEnter } 
                onMouseLeave={ this.onMouseLeave }
                style={{ background: this.state.isMouseIn ? '#ddd' : 'white'} }
            >
                <label>
                    <input type="checkbox" onChange={ this.handleCheck } checked={ this.state.isChecked }/>
                    <span>{ name }</span>
                </label>
                <button 
                    className="btn btn-danger" 
                    style={{ display: this.state.isMouseIn ? 'inline' : 'none' }}
                    onClick={() => this.handleDelete()}
                >
                    删除
                </button>
            </li>

        );
    }
}

export default Item;
