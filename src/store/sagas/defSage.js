import {
    select,
    takeEvery,
    takeLatest,
    throttle,
} from 'redux-saga/effects'

import axios from 'axios'


import {TAKEEVERY, TAKELATEST, THROTTLE} from '../constant'



export function* defSaga() {
    yield takeEvery(TAKEEVERY, function* () {
        const data = yield select(allStates => allStates.home.data)
        console.log(data);
        yield
    })

    yield takeLatest(TAKELATEST, function* () {
        const {home: {data}} = yield select()
        setTimeout(() => {
            console.log('异步任务执行了');
        }, 1000)
        yield
    })

    yield throttle(2000, THROTTLE, function* () {
        const allStates = yield select()
        console.log(allStates);
        yield
    })
}