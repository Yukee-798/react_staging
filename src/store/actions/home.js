import {TAKEEVERY, TAKELATEST, THROTTLE} from '../constant'
export const takeEveryAction = data => ({ type: TAKEEVERY, data})
export const takeLatestAction = data => ({ type: TAKELATEST, data})
export const throttleAction = data => ({ type: THROTTLE, data})