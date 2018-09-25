import initialState from './medicineListModal'

import {
  GET_RELATED_MEDICINES_LOADING,
  GET_RELATED_MEDICINES_SUCCESS,
  GET_RELATED_MEDICINES_FAILURE
} from './medicineListActionTypes'

export default function medicineListReducer (state = initialState, action) {
  switch (action.type) {
    // update loading details of medicine list API
    case GET_RELATED_MEDICINES_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        },
        isShowMore: action.isShowMore
      }

    // update success details of medicine list API
    case GET_RELATED_MEDICINES_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        totalPages: action.totalPages,
        isLoading: action.isLoading
      }

    // update failure details of medicine list API
    case GET_RELATED_MEDICINES_FAILURE:
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
