import initialState from './pincodeModal'

import {
  CHECK_PINCODE_LOADING,
  CHECK_PINCODE_SUCCESS,
  CHECK_PINCODE_FAILURE
} from './pincodeActionTypes'

export default function checkPincodeReducer (state = initialState, action) {
  switch (action.type) {
    // update loading details of check pincode api
    case CHECK_PINCODE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

      // update success details of check pincode api
    case CHECK_PINCODE_SUCCESS:
      return {
        ...state,
        // payload: action.payload,
        isLoading: action.isLoading
      }

      // update failure details of check pincode api
    case CHECK_PINCODE_FAILURE:
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
