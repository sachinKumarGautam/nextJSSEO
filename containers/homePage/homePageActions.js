import {
  GET_USER_REVIEW_LOADING,
  GET_USER_REVIEW_SUCCESS,
  GET_USER_REVIEW_FAILURE
} from './homePageActionTypes'

/**
 * Represents to the loading state to get the home page user review.
 * @param {object} homePageState - The object maintained for payload, loading and error state.
 */
export function getUserReviewLoading (homePageState) {
  return {
    type: GET_USER_REVIEW_LOADING,
    homePageState,
    isLoading: true,
    isError: false,
    error: {}
  }
}

/**
 * Represents to the success state to get the home page user review.
 * @param {object} homePageState - The object maintained for payload, loading and error state.
 * @param {array} result - The home page background image payload obtained from the API response
 */
export function getUserReviewSuccess (homePageState, result) {
  return {
    type: GET_USER_REVIEW_SUCCESS,
    homePageState,
    isLoading: false,
    payload: result
  }
}

/**
 * Represents to the error state to get the home page user review.
 * @param {object} homePageState - The object maintained for payload, loading and error state.
 * @param {object} error - The error details when API throws an error
 */
export function getUserReviewFailure (homePageState, error) {
  return {
    type: GET_USER_REVIEW_FAILURE,
    homePageState,
    isLoading: false,
    isError: true,
    error: error
  }
}
