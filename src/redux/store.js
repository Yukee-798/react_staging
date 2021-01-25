import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducerNumber from './reducer_number'

export default createStore(reducerNumber, applyMiddleware(thunk));


