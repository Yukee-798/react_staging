import React, { Component } from 'react';
import B from './B'

// 创建一个用于保存 name 的上下文
export const NameContext = React.createContext();

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





export default A;
