import React, { Component } from 'react';

import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

import './App.css';


class App extends Component {
    render() {
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header />
                        <List />
                        <Footer />
                   
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
