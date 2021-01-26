import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import reducerNumber from './reducers/number'
import reducerPerson from './reducers/person'
import {composeWithDevTools} from 'redux-devtools-extension'

const allReducers = combineReducers(
    {
        numberState: reducerNumber,
        personState: reducerPerson 
    }
);

export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));


