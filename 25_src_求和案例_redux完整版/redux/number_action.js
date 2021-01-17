/* 
    该文件专门为 Number 组件生成 action 对象
*/
import {ADD, SUB} from './constant'
export const createIncrementAction = data => ({type: ADD, data});
export const createDecrementAction = data => ({type: SUB, data});