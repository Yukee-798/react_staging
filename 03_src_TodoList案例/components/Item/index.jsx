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
        // 点击 check 后 checked 变为 true
        const { checked } = event.target;

        // 修改状态
        this.setState({ isChecked: checked });

        // 更新 App 组件中的 todo
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

    static getDerivedStateFromProps(props) {
        return {isChecked: props.checked};
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
