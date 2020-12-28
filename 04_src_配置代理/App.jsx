import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {

    /*
        第一种使用脚手架配置代理解决跨域问题的方式：
            1. 在 package.json 中添加   "proxy": "http://localhost:5000"
            2. 出现的问题：
                (1) 如果使用 get 请求 http://localhost:3000/students 那么会先在当前 3000 端口 (脚手架的 public 根目录) 下寻找 students
                (2) 如果寻找到了就会返回这个文件的内容作为请求发送后，服务端返回的数据
                (3) 如果没找到，则会去 5000 端口下寻找
                (4) 如果 5000 端口下依旧没找到，则会返回请求失败错误

                这里的问题就是如果本地端口的文件与目标服务端口的文件重叠，则就无法从服务端获取正确的数据了
    */

    getStuData = () => {
        // 如果3000端口没有 student，则走 api1 下的 5000 端口请求数据
        axios.get('http://localhost:3000/api1/students').then(
            response => {console.log('成功了', response.data);},
            error => {console.log('失败了', error);}
        )
    }

    getCarData = () => {
        // 如果3000端口没有 cars，则走 api2 下的 5000 端口请求数据
        axios.get('http://localhost:3000/api2/cars').then(
            response => { console.log('成功了', response.data); },
            error => { console.log('失败了', error); }
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStuData}>点我获取学生数据</button>
                <button onClick={this.getCarData}>点我获取汽车数据</button>
            </div>
        );
    }
}

export default App;
