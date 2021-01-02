import React, { Component } from 'react'
// import PubSub from 'pubsub-js';


export default class Content extends Component {
    state = {
        id: '',
        title: ''
    };


    static getDerivedStateFromProps(props, state) {

        const params = props.match.params;

        return params;
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        Object.keys(this.state).map((prop) => {
                            return <li key={prop}>{`${prop}：${this.state[prop]}`}</li>
                        })
                    }
                </ul>

            </div>
        )
    }
}
