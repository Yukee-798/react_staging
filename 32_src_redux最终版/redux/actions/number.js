import { ADD, SUB } from '../constant'


export const add = data => ({type: ADD, data});
export const sub = data => ({type: SUB, data});
export const asyncAdd = (data, ms) => {
    return disptach => {
        setTimeout(() => {
            disptach(add(data, ms))
        }, ms)
    }
};



