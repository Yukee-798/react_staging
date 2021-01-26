import React from 'react'
import ReactDOM from 'react-dom'


const Count = () => {
    /*
        useState 钩子：
            1. 传入一个初始状态一个数据给组件然后调用
            2. 返回一个当前状态该数据的 key 「 number 」 和 修改 value 的方法 「 setNumber」
            3. 每次 setNumber 时都会重新调用该函数组件，但是 React 底层处理了 useState 这个方法，不会每次都初始化状态
            4. setNumber 方法有两种写法：
                (1) setNumber(preNumber => preNumber + 1)
                (2) setNumber(number + 1)
            5. useState 可以多次使用，表示初始化和操作多个状态 key 

            这里的函数组件状态跟之前的不一样，这里状态可以理解为多个值，useState 返回的第一个数组元素就是这个值的 key，第二个元素是操作这个值的方法
            每次 useState 时都会新增一个 key


        useEffect 钩子：
            1. 「 不写第二个参数」 表示监测所有的状态变化，组件 「 初次挂载完毕 」 和 「 监测的状态 」 更新时，都会执行回调函数
                React.useEffect(() => {

                })
            
            2. 「 第二个参数传入一个空数组 」 表示不监测任何状态变化，只有组件 「 初次挂载完毕 」 才会执行回调函数
                React.useEffect(() => {

                }, [])

                相当于 componentDidMount

            3. 「 第二个参数传入某个状态 key 」 表示只监测该 key 的状态变化，组件 「 初次挂载完毕 」 和 「 该 key 对应的状态变化时 」 才会执行回调函数
                React.useEffect(() => {

                }, [number])

            4. 回调函数中 「 返回一个函数 」 的内部相当于 componentWillUnmount
                React.useEffect(() => {
                    let timer =  setInterval(() => {
                        setNumber(number + 1)
                    }, 1000)

                    return () => {
                        console.log('组件即将卸载');
                        clearInterval(timer)
                    }
                }, [])

            5. 可以把 useEffect Hook 看做如下三个函数的组合
                componentDidMount()
                componentDidUpdate()
                componentWillUnmount()
            
        useRef 钩子：
            1. const selectRef = React.useRef() 创建 ref
            2. 在需要使用 ref 的结点内设置好 ref
            3. selectRef.current 表示当前设置了 selectRef 的结点对象
            
            
    */



    const [number, setNumber] = React.useState(0);
    const [time, setTime] = React.useState(new Date().toString().substring(15, 24))

    const selectRef = React.useRef()


    const increment = () => {
        setNumber(number + selectRef.current.value * 1)
    }
    const unmount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    React.useEffect(() => {
        let timer = setInterval(() => {
            setTime(new Date().toString().substring(15, 24))
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [time])




    return (
        <div>
            <h3 className='count-title'>number: {number} &emsp; time: {time}</h3>
            <form action="#" className='count-console'>
                <select className='count-console-select' ref={selectRef}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={increment} className='count-console-btn increment'>+</button>
                <button type='button' onClick={unmount} className='count-console-btn unmount_component'>unmount</button>
            </form>
        </div>
    )
}

export default Count