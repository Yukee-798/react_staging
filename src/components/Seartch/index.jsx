import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
    state = { content: '' }

    change = (event) => {
        this.setState({ content: event.target.value });
    }
    
    search = () => {
        
        // 获取用户的输入
        let inputContent = this.state.content;
        // 发送网络请求
        // https://api.github.com/search/users?q=xxxxxx
        // http://localhost:5000/search/users?q=xxxxxx
        axios.get(`/api1/search/users?q=${inputContent}`).then(
            reponse => { 

                // 处理一下返回的数据，只要里面的四种种数据
                let users = reponse.data.items.map((item) => {
                    let { id, avatar_url, login, html_url } = item;
                    return { id, avatar_url, login, html_url };
                });

                this.props.updateUsers(users);
            },
            error => { console.log('失败了', error); }
        );
        
    }
    render() {
        return (

            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input onChange={this.change} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>                

        )
    }
}
