/* 
    该文件专门为 Number 组件生成 action 对象
*/
import {ADD, SUB} from './constant'
export const createIncrementAction = data => ({type: ADD, data});
export const createDecrementAction = data => ({type: SUB, data});

// 异步 action，在异步 action 中一般都会调用同步 action
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        }, time);
    }
};