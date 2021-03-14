import React, { Component } from 'react'
import Number from './containers/Number'
import Person from './containers/Person'
export default class App extends Component {
    render() {
        return (
            <div>
                <Number />
                <Person />
            </div>
        )
    }
}
