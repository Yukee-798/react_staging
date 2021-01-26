import React, { Component } from 'react'
import { List, Button } from 'antd'
import { connect } from 'react-redux';
import { createAddPersonAction, createDeletePersonAction } from '../../redux/actions/person'
import {nanoid} from 'nanoid'
import './index.scss'

class Person extends Component {
    handleAddClick = () => {
        const [order, name, age] = this.input.value.split('-');
        const { addPerson } = this.props;
        const newPerson = {order, name, age};
        addPerson(newPerson);
    }

    handleDeleteClick = () => {
        const { deletePerson } = this.props;
        const deletedOrder = this.input.value;
        deletePerson(deletedOrder);
    }

    render() {
        const { personArr, number } = this.props;
        return (
            <div className='person-warp'>
                <h3>我是Person组件，接收到来自Number组件数据：{number}</h3>
                <List className='person-list'
                    header={
                        <div className='person-list-console'>
                            <form action="#">
                                <input ref={c => this.input = c} type="text"className='person-list-console-input' placeholder="添加信息或待删除序号" />
                                <Button onClick={this.handleAddClick} ref={c => this.addBtn = c} type="primary" className='person-list-console-btn add'>
                                    Add
                                </Button>
                                <Button onClick={this.handleDeleteClick} ref={c => this.deleteBtn = c} type="primary" className='person-list-console-btn delete'>
                                    Delete
                                </Button>
                            </form>
                        </div>
                    }
                    bordered
                    dataSource={personArr}
                    renderItem={
                        item => (
                            <List.Item key={ nanoid() }>
                                <span className='person-list-item order'>{item.order}</span>
                                <span className='person-list-item name'>{item.name}</span>
                                <span className='person-list-item age'>{item.age}</span>
                            </List.Item>
                        )
                    }
                />
            </div>
        )
    }
}


export default connect(
    allStates => (
        {
            personArr: allStates.personState.personArr,
            number: allStates.numberState.number
        }
    ),
    {
        addPerson: createAddPersonAction,
        deletePerson: createDeletePersonAction
    }
)(Person)
