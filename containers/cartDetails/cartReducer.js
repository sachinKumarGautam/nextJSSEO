import initialState from './cartModal'

import {
  GET_ANONYMOUS_CART_ID_LOADING,
  GET_ANONYMOUS_CART_ID_SUCCESS,
  GET_ANONYMOUS_CART_ID_FAILURE
} from './cartActionTypes'

export default function cartReducer (state = initialState, action) {
  switch (action.type) {
    case GET_ANONYMOUS_CART_ID_LOADING:
      return {

      }

    default:
      return state
  } 
}