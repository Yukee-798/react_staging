import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers/index'
import {defSaga} from './sagas/defSage'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

// 通过 applyMiddleware 将 store 和 saga 关联起来
export default createStore( reducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(defSaga)