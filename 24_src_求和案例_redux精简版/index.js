import React from 'react'
import ReactDOM from 'react-dom'

import store from './redux/store'


import App from './App'

// 共享区的状态更新则重新渲染整个页面，这样就可以不在所有单个组件中来监听了
ReactDOM.render(<App />, document.getElementById('root'));
store.subscribe(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
});
