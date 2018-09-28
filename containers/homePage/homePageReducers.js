import initialState from './homePageModal'

import {
  GET_USER_REVIEW_LOADING,
  GET_USER_REVIEW_SUCCESS,
  GET_USER_REVIEW_FAILURE
} from './homePageActionTypes'

export default function homePageReducers (state = initialState, action) {
  switch (action.type) {
    // update loading details of home page user review list
    case GET_USER_REVIEW_LOADING:
      return {
        ...state,
        userReview: {
          ...state.userReview,
          isLoading: action.isLoading,
          errorState: {
            ...state.userReview.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    // update success details of home page user review list
    case GET_USER_REVIEW_SUCCESS:
      return {
        ...state,
        userReview: {
          ...state.userReview,
          isLoading: action.isLoading,
          payload: action.payload
        }
      }

    // update failure details of home page user review list
    case GET_USER_REVIEW_FAILURE:
      return {
        ...state,
        userReview: {
          ...state.userReview,
          isLoading: action.isLoading,
          errorState: {
            ...state.userReview.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    default:
      return state
  }
}
