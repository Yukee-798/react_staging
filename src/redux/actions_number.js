import { ADD, SUB } from './constant'


export const createAddAction = data => ({type: ADD, data});
export const createSubAction = data => ({type: SUB, data});
export const createAsyncAddAction = (data, ms) => {
    return disptach => {
        setTimeout(() => {
            disptach(createAddAction(data, ms))
        }, ms)
    }
};



