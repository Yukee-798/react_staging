import { all } from "redux-saga/effects";
import helloSaga from './helloSaga'
import defSaga from './defSage'

export default function* rootSaga() {
    yield all([
        helloSaga(),
        defSaga()
    ])
}