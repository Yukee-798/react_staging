import { ADD_PERSON, DELETE_PERSON} from '../constant'
export default function personReducer(preState = {personArr: []}, action) {
    const {type, data} = action
    switch (type) {
        case ADD_PERSON: 
            // newPersonArr = preState.personArr;
            // newPersonArr.push(data)
            return {personArr: [...preState.personArr, data]}

        case DELETE_PERSON:
            let newPersonArr = [];
            newPersonArr = preState.personArr.filter(item => item.order !== data)
            return {personArr: newPersonArr}

        default: 
            return preState
    }
}