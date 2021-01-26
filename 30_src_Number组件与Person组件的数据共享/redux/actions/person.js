import {ADD_PERSON, DELETE_PERSON} from '../constant'

export const createAddPersonAction = (data) => ({type: ADD_PERSON, data})
export const createDeletePersonAction = (data) => ({type: DELETE_PERSON, data})