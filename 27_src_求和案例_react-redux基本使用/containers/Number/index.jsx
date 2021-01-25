import {connect} from 'react-redux';
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/number_action'
import NumberUI from '../../components/Number'


// 返回一个对象(里面是共享状态属性)映射给 UI 组件的 props
const mapStateToProps = state => ({number: state.number});

// 返回一个对象(里面是操作共享状态的方法)映射给 UI 组件的 props
const mapDispatchToProps = dispatch => ({
    add: (data) => {
        dispatch(createIncrementAction(data));
    },
    sub: (data) => {
        dispatch(createDecrementAction(data));
    },
    asyncAdd: (data, time) => {
        dispatch(createIncrementAsyncAction(data, time));
    }
});

// 为 NumberUI 组件创建容器组件
export default connect(mapStateToProps, mapDispatchToProps)(NumberUI);