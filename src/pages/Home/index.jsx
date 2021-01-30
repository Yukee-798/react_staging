import {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {takeEveryAction, takeLatestAction, throttleAction} from '../../store/actions/home'
// import { TAKEEVERY, TAKELATEST, THROTTLE } from '../../store/constant'

const Home = () => {
    const takeEveryBtnRef = useRef()
    const takeLatestBtnRef = useRef()
    const throttleBtnRef = useRef()

    const dispatch = useDispatch();
    const handleClick = (e) => {
        switch (e.target) {
            case takeEveryBtnRef.current:
                dispatch(takeEveryAction({username: 'k909397116', passward: '1320'}))
                break;

            case takeLatestBtnRef.current:
                dispatch(takeLatestAction({ username: 'q9768321', passward: '2012312' }))
                break;
            case throttleBtnRef.current:
                dispatch(throttleAction({ username: 'mlow9123', passward: '1223021' }))
                break;
            default:
                break;
        }
    }

    return (
        <div>

            <form action='#' onClick={handleClick}>
                <button ref={takeEveryBtnRef} >点击发送 takeEvery</button>
                <button ref={takeLatestBtnRef} >点击发送 takeLatest</button>
                <button ref={throttleBtnRef} >点击发送 throttle</button>                
            </form>
        </div>
    )
}

export default Home