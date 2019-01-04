import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

const initialStateSearch = {
  searchField: ''
}

//ES6 => initialize the parameters with default values => state=initialStateSearch
//searchRobots used in App.js
export const searchRobots = (state=initialStateSearch, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
    //built-in syntax = Object.assign{} => takes what you want to change [state], and how [{searchField:...}]
    //could use ...state instead of [Object.assign{}, state]
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state
  }
}

const initialStateRobots = {
  robots: [],
  isPending: true
}

export const requestRobots = (state=initialStateRobots, action={}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {robots: action.payload, isPending: false})
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}
