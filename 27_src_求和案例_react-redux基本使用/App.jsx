import React, { Component } from 'react';
import Number from './containers/Number';
import store from './redux/store';

class App extends Component {
    render() {
        return (

            <div>
                <Number store={store}/>
            </div>
        );
    }
}

export default App;
