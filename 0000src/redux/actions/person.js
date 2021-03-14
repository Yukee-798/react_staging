import {ADD_PERSON, DELETE_PERSON} from '../constant'

export const addPerson = (data) => ({type: ADD_PERSON, data})
export const deletePerson = (data) => ({type: DELETE_PERSON, data})