import { push } from 'react-router-redux'
import API from '../api/client'

export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'

const api = new API()

export default () => {
  return dispatch => {
    console.log('signing out...')
    api.signOut()
    // redirect programatically:
    dispatch(push('/login'))
    dispatch({ type: USER_SIGNED_OUT })
  }
}
