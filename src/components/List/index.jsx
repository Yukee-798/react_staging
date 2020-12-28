import React, { Component } from 'react'
import Item from '../Item';
import './index.css'

export default class List extends Component {
    render() {
        const { users } = this.props;
        return (
            <div className="row">
                {
                    users.map((user) => {
                        return <Item key={ user.id } {...user}/>
                    })
                }
            </div>
        )
    }
}
