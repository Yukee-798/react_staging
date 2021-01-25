/* 
    该文件专门用于暴露 store 对象，一个应用只需要一个 store 对象

*/
// 引入 createStore 专门用于创建 store 对象的 (BOSS)
import {createStore, applyMiddleware} from 'redux';

// 引入 redux-thunk 用于支持异步 action
import thunk from 'redux-thunk'

// 引入为 Number 组件服务的 reducer
import number_reducer from './number_reducer'


export default createStore(number_reducer, applyMiddleware(thunk));