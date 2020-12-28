import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
    state = { buffer: new Set(), content: '' }

    change = (event) => {
        this.setState({ content: event.target.value });
    }
    
    search = () => {
        let { buffer } = this.state;
        // 获取用户的输入
        let inputContent = this.state.content;

        if (inputContent === '') return;

        let arrBuffer = Array.from(buffer);

        console.log(buffer);

        // 防止用户重复请求
        if (buffer.size !== 0 &&  arrBuffer[arrBuffer.length - 1] === inputContent) {
            console.log(1);
            return;
        }
        // 让后添加的缓存重新覆盖到前面来
        if (buffer.has(inputContent)) {
            buffer.delete(inputContent);
            buffer.add(inputContent);
        } 
        buffer.add(inputContent);


        
        this.setState({ buffer });


        // 发送请求前改变 App 状态
        this.props.updateAppState({ isFirst: false, isLoading: true });
        console.log(2);
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


                // 请求成功后通知 App 更新状态
                this.props.updateAppState({ isLoading: false, users });
            },
            error => { 
                // 请求失败后通知 App 更新状态
                this.props.updateAppState({ isLoading: false, err: error });

            }
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
