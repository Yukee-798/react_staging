import React, { Component } from 'react';
import Console from './components/Console';
import Number from './components/Number';

class App extends Component {
    render() {
        return (

            <div>
                <Number />
                <Console />
            </div>
        );
    }
}

export default App;
