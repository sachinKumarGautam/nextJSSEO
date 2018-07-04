import initialState from './prescriptionModal'

import {
  GET_PRESCRIPTION_LIST_LOADING,
  GET_PRESCRIPTION_LIST_SUCCESS,
  GET_PRESCRIPTION_LIST_FAILURE
} from './prescriptionActionTypes'

export default function prescriptionReducers (state = initialState, action) {
  switch (action.type) {
    // update loading details of prescription list API
    case GET_PRESCRIPTION_LIST_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    // update success details of prescription list API
    case GET_PRESCRIPTION_LIST_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        isLoading: action.isLoading
      }

    // update failure details of prescription list API
    case GET_PRESCRIPTION_LIST_FAILURE:
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
