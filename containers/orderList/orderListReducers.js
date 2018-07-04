import initialState from './orderListModel'

import {
  GET_ORDER_LIST_DETAILS_LOADING,
  GET_ORDER_LIST_DETAILS_SUCCESS,
  GET_ORDER_LIST_DETAILS_FAILURE
} from './orderListActionTypes'

export default function orderListReducers (state = initialState, action) {
  switch (action.type) {
    // update loading details of order list details API
    case GET_ORDER_LIST_DETAILS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    // update success details of order list details API
    case GET_ORDER_LIST_DETAILS_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        isLoading: action.isLoading
      }

    // update failure details of order list details API
    case GET_ORDER_LIST_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    default:
      return state
  }
}
