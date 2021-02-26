


import React, { Component } from 'react';

// 创建一个用于保存 name 的上下文
const NameContext = React.createContext()

class A extends Component {
    state = { name: 'tom' };
    render() {
        return (
            <div style={{ border: '1px solid red', padding: '10px' }}>
                <h3>我是A组件</h3>
                <h4>我的名字叫{this.state.name}</h4>
                {/* 让 B 组件及其后代组件全都可以拿到 NameContext 保存的值 */}
                <NameContext.Provider value={this.state.name}>
                    <B />
                </NameContext.Provider>
            </div>
        );
    }
}

class B extends Component {
    static contextType = NameContext;
    render() {
        return (
            <div style={{ border: '1px solid blue', padding: '10px' }}>
                <h3>我是B组件</h3>
                <h4>我从A组件拿到{this.context}</h4>

                < C />


            </div>
        );
    }
}
class C extends Component {
    static contextType = NameContext;
    render() {
        return (
            <div style={{ border: '1px solid black', padding: '10px' }}>
                <h3>我是C组件</h3>
                <h4>我从A组件拿到{this.context}</h4>
                <D />
            </div>
        );
    }
}

const D = () => {
    return (
        <div style={{ border: '1px solid black', padding: '10px' }}>
            <h3>我是D组件</h3>
            <h4>我从A组件拿到
                <NameContext.Consumer>
                    {
                        value => value
                    }
                </NameContext.Consumer>
            </h4>

        </div>
    )
}



export default A;
