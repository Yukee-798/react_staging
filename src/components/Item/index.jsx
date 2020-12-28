import React, { Component } from 'react'

export default class Item extends Component {
    state = { id: '',  avatar_url: '', login: '', html_url: ''}

    static getDerivedStateFromProps(props, state) {
        return props;
    }
    render() {
        return (
            <div>
                <div className="card">
                    <a href={this.state.html_url} target="_blank" rel="noreferrer">
                        <img src={this.state.avatar_url} alt='' style={{ width: '100px' }} />
                    </a>
                    <p className="card-text">{this.state.login}</p>
                </div>                
            </div>
        )
    }
}
