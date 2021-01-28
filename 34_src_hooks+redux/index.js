import { Provider } from "react-redux"
import ReactDOM from 'react-dom'
import App from './App.jsx'
import store from './redux/store'
import 'antd/dist/antd.css'
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)