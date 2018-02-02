import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from './loading'

import ApiClient from '../api/client'

export const FETCHED_DATA = 'FETCHED_DATA'

const api = new ApiClient()

export default () => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    api.get('recipes')
    .then((response) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({ type: LOAD_SUCCESS })
      dispatch({
        type: FETCHED_DATA,
        payload: response.body
      })
    })
    .catch((error) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({
        type: LOAD_ERROR,
        payload: error.message
      })
    })
  }
}
