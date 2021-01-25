import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'


import App from './App'
import { Provider } from 'react-redux';

// 共享区的状态更新则重新渲染整个页面，这样就可以不在所有单个组件中来监听了

ReactDOM.render(
    // Provider 用于向所有容器组件传递 store
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// 使用了 react-redux 后，容器组件自动实现了共享状态的监测和页面重新渲染，因此不用再订阅了
// store.subscribe(() => {
//     ReactDOM.render(<App />, document.getElementById('root'));
// });

