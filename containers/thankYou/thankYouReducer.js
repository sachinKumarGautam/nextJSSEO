import initialState from './thankYouModel'

import {
  SUBMIT_REFILL_DATE_LOADING,
  SUBMIT_REFILL_DATE_SUCCESS,
  SUBMIT_REFILL_DATE_FAILURE
} from './thankYouActionTypes'

export default function thankYouReducer (state = initialState, action) {
  switch (action.type) {
    // update loading details of marking next refill date
    case SUBMIT_REFILL_DATE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    // update success details of marking next refill date
    case SUBMIT_REFILL_DATE_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        isLoading: action.isLoading
      }

    // update failure details of marking next refill date
    case SUBMIT_REFILL_DATE_FAILURE:
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
