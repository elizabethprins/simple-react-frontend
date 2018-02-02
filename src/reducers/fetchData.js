import { FETCHED_DATA } from '../actions/fetch'

export default (state = null, { type, payload } = {}) => {
  switch (type) {
    case FETCHED_DATA :
      return payload

    default :
      return state
  }
}
