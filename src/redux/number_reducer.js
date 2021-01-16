/* 
    1. 该文件作用是为 Number 组件创建其 reducer 对象，用来初始化其状态和更新其状态，本质上是一个函数
    2. reducer 函数会接收到两个参数，分别是：preState 表示该组件更新前的状态、action 表示要求 reducer 需要进行的哪种更新
    3. reducer 一般只用来处理一些简单的状态更新行为，比如加减... 如果有要求延迟加减、偶数的时候加这些细节需要放到其他代码中来判断
    4. 用于 reducer 加工的状态数据一般只是组件中需要与其他共享状态数据的数据，其他不需要共享的可以单独放在组件内部
    5. reducer 加工后的数据会返回给 store，所以在组件内部获取 reducer 的数据需要通过 store
    6. 组件的共享状态更新的时候是无法重新 render 的
*/


export default function numberReducer(preState = {number: 0}, action) {
    // 从 action 对象中获取 type 和 data
    const {type, data} = action;
    switch (type) {
        case 'add':
            return {
                number: preState.number + data * 1
            }

        case 'sub':
            return {
                number: preState.number - data * 1
            }

        // 初始化组件状态，在页面加载进来的时候，store 就会通知 reducer 开始工作，此时没有 preState 和 action
        // 则进行组件的初始化工作
        default:
            return preState
    }
}