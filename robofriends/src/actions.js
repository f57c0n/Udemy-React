import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants'


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

//export const requestRobots = (dispatch) => {}
//now make requestRobots a higher order function => a function that returns a function.
//by redux-thunk, the below function is able to return another function, and that function returns the actions
//below function is not receiving any parameters from the calling function, instead it runs another function => dispatch
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  //built-in on fetch => response to convert to json, data to hold data from API, error otherwise
  fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())

  //apiCall('https://jsonplaceholder.typicode.com/users')
          .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
          .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}
