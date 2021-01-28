import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, sub, asyncAdd } from '../../redux/actions/number'
import './index.scss'

const Number = (props) => {

    const { number, personCounts } = useSelector(allStates => ({
        number: allStates.number.counts, 
        personCounts: allStates.person.personArr.length
    }));
    
    const dispatch = useDispatch();

    const selectRef = React.useRef();
    const addBtnRef = React.useRef();
    const subBtnRef = React.useRef();
    const addAsyncRef = React.useRef();



    const handleClick = useCallback(e => {
        let value = selectRef.current.value * 1;
        let target = e.target;

        switch (target) {
            case addBtnRef.current:
                dispatch(add(value))
                break;
            case subBtnRef.current:
                dispatch(sub(value))
                break;
            case addAsyncRef.current:
                dispatch(asyncAdd(value, 1000))
                break;
            default:
                break;
        }
    }, [dispatch])
    
    return (
        <div className='number-warp'>
            <h3>我是Number组件，接收到来自Person组件数据：{personCounts}人</h3>
            <div className='number-title'>
                <h3>number: {number}</h3>
            </div>
            <div className='number-console'>
                <form action="#" onClick={handleClick}>
                    <select  ref={selectRef} id="number-console-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button ref={addBtnRef} className='number-console-btn add' >+</button>
                    <button ref={subBtnRef} className='number-console-btn sub' >-</button>
                    <button ref={addAsyncRef} className='number-console-btn add async' >asyncAdd</button>
                </form>
            </div>
        </div>
    );
}

export default Number

