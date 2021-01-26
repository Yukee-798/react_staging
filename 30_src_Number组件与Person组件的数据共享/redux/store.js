import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import reducerNumber from './reducers/number'
import reducerPerson from './reducers/person'

const allReducers = combineReducers(
    {
        numberState: reducerNumber,
        personState: reducerPerson 
    }
);

export default createStore(allReducers, applyMiddleware(thunk));


