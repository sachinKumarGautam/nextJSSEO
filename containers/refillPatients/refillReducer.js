import initialState from './refillModal'

import {
  GET_PAST_MEDICINES_LOADING,
  GET_PAST_MEDICINES_SUCCESS,
  GET_PAST_MEDICINES_FAILURE
} from './refillActionTypes'

export default function refillReducer (state = initialState, action) {
  switch (action.types) {
    case GET_PAST_MEDICINES_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case GET_PAST_MEDICINES_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        payload: action.payload
      }

    case GET_PAST_MEDICINES_FAILURE:
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
