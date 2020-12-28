import React, { Component } from 'react'
import Search from './components/Seartch'
import List from './components/List'

export default class App extends Component {
    state = {
        users: [
            // {
            //     id: 57055112
            //     avatar_url: 'https://avatars1.githubusercontent.com/u/57055112?v=4', 
            //     login: 'Yukee-798',
            //     html_url: 'https://github.com/Yukee-798'
            // }
        ]
    }

    updateUsers = (users) => {
        this.setState({users});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Search updateUsers={this.updateUsers}/>
                    <List users={this.state.users}/>
               
                </div>
            </div>
        )
    }
}
