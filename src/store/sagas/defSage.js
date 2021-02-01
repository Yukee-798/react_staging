import {
    call,
    select,
    takeEvery,
    takeLatest,
    throttle
} from 'redux-saga/effects'

import axios from 'axios'


import {TAKEEVERY, TAKELATEST, THROTTLE} from '../constant'



export default function* defSaga() {
    yield takeEvery(TAKEEVERY, takeEveryCallback)
    
    yield takeLatest(TAKELATEST, takeLatestCallback)

    yield throttle(10000, THROTTLE, throttleCallback)
}

function* takeEveryCallback() {
    console.log(yield select());
    // const res = yield call(axios.get, 'https://cnodejs.org/api/v1/topics', {
    //     params: {
    //         page: 1,
    //         limit: 10
    //     }
    // })
    // console.log('takeEvery', res);
}

function* takeLatestCallback() {

    const res = yield call(axios.get, 'https://cnodejs.org/api/v1/topics', {
        params: {
            page: 1,
            limit: 10
        }
    })
    console.log('takeLatest', res);
}


function* throttleCallback() {
    // const allStates = yield select()
    // console.log(allStates);
    const res = yield call(axios.get, 'https://cnodejs.org/api/v1/topics', {
        params: {
            page: 1,
            limit: 10
        }
    })
    console.log('throttle', res);
}