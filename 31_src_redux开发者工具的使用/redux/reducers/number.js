import {ADD, SUB} from '../constant'

export default function numberReducer(preState = {number: 0}, action) {
    const {type, data} = action
    switch (type) {
        case ADD:
            return {number: preState.number + data * 1}
        case SUB:
            return {number: preState.number - data * 1}
        default: 
            return preState
    }
}