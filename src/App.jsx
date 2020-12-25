import React, { Component } from 'react';

import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

import './App.css';


class App extends Component {
    state = {
        todos: [
            {id: '001', name: '睡觉', done: true},
            {id: '002', name: '吃饭', done: false},
            {id: '003', name: '写作业', done: false}
        ]
    }
    render() {
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header />
                        <List todos={this.state.todos}/>
                        <Footer />
                   
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
