import React, { useCallback, useRef } from 'react'
import { List, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { addPerson, deletePerson } from '../../redux/actions/person'
import {nanoid} from 'nanoid'
import './index.scss'


const Person = () => {

    const inputRef = useRef()
    const addBtnRef = useRef()
    const deleteBtnRef = useRef()

    const dispatch = useDispatch();
    const { personArr, counts } = useSelector(allStates => ({
        personArr: allStates.person.personArr,
        counts: allStates.number.counts
    }));


    const handleAddClick = useCallback(() => {
        const [order, name, age] = inputRef.current.value.split('-');
        const newPerson = { order, name, age };
        dispatch(addPerson(newPerson));
    }, [dispatch]);

    const handleDeleteClick = useCallback(() => {
        const deletedOrder = inputRef.current.value;
        dispatch(deletePerson(deletedOrder));
    }, [dispatch]);

    

    return (
        <div className='person-warp'>
            <h3>我是Person组件，接收到来自Number组件数据：{counts}</h3>
            <List className='person-list'
                header={
                    <div className='person-list-console'>
                        <form action="#">
                            <input ref={inputRef} type="text"className='person-list-console-input' placeholder="添加信息或待删除序号" />
                            <Button onClick={handleAddClick} ref={addBtnRef} type="primary" className='person-list-console-btn add'>
                                Add
                            </Button>
                            <Button onClick={handleDeleteClick} ref={deleteBtnRef} type="primary" className='person-list-console-btn delete'>
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

export default Person
