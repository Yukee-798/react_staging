import {ADD, SUB} from '../constant'

export default function numberReducer(preState = {counts: 0}, action) {
    const {type, data} = action
    switch (type) {
        case ADD:
            return {counts: preState.counts + data * 1}
        case SUB:
            return {counts: preState.counts - data * 1}
        default: 
            return preState
    }
}