import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers/index'
import rootSaga from './sagas/rootSaga'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

// 通过 applyMiddleware 将 store 和 saga 关联起来
export default createStore( reducer,applyMiddleware(sagaMiddleware))


// 该代码用来执行一次 saga 生成器函数(从头到尾跑一遍函数体内部代码)
sagaMiddleware.run(rootSaga)