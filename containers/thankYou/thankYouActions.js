import {
  SUBMIT_REFILL_DATE_LOADING,
  SUBMIT_REFILL_DATE_SUCCESS,
  SUBMIT_REFILL_DATE_FAILURE
} from './thankYouActionTypes'

/**
 * Represents to the loading state to mark refill date.
 * @param {object} thankYouState - The object maintained for payload, loading and error state.
 * @param {number} orderId - the order id in which refill date is set.
 * @param {number} repeatDay - The value of the repeatDay according to which refill date is set
 */
export function submitRefillDateLoading (thankYouState, orderId, repeatDay) {
  return {
    type: SUBMIT_REFILL_DATE_LOADING,
    thankYouState,
    isLoading: true,
    isError: false,
    error: {},
    orderId: orderId,
    repeatDay: repeatDay
  }
}

/**
 * Represents to the success state to mark refill date.
 * @param {object} thankYouState - The object maintained for payload, loading and error state.
 * @param {array} result - The order object obtained from the API response
 */
export function submitRefillDateSuccess (thankYouState, result) {
  return {
    type: SUBMIT_REFILL_DATE_SUCCESS,
    thankYouState,
    isLoading: false,
    payload: result
  }
}

/**
 * Represents to the error state to mark refill date.
 * @param {object} thankYouState - The object maintained for payload, loading and error state.
 * @param {object} error - The error details when API throws an error
 */
export function submitRefillDateFailure (thankYouState, error) {
  return {
    type: SUBMIT_REFILL_DATE_FAILURE,
    thankYouState,
    isLoading: false,
    isError: true,
    error: error
  }
}
