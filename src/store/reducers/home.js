import {TAKEEVERY, TAKELATEST, THROTTLE} from '../constant'
const initState = {func: '', data: ''};
export default function homeReducer(preState = initState, action) {
    const {type, data} = action
    switch (type) {
        case TAKEEVERY:
            return {func: TAKEEVERY, data}
        case TAKELATEST:
            return {func: TAKELATEST, data}
        case THROTTLE:
            return {func: THROTTLE, data}
        default: 
            return initState
    }
}