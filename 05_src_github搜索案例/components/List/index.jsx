import React, { Component } from 'react'
import Item from '../Item';
import './index.css'

export default class List extends Component {
    render() {
        const {isFirst, isLoading,users, err } = this.props;
        return (
           
            <div className="row">
                {
                      isFirst ? <h2>Enter the keyword</h2> :
                    isLoading ? <h2>Loading...</h2>        :
                          err ? <h2 style={{color: 'red'}}>{err.message}</h2>             : 
                    users.map((user) => {
                        return <Item key={ user.id } {...user}/>
                    })
                }
            </div>
        )
    }
}
