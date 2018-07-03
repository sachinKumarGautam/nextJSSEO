import {
  GET_PRESCRIPTION_LIST_LOADING,
  GET_PRESCRIPTION_LIST_SUCCESS,
  GET_PRESCRIPTION_LIST_FAILURE
} from './prescriptionActionTypes'

/**
 * Represents to the loading state to get the prescription list according to the salt name.
 * @param {object} prescriptionState - The object maintained for payload, loading and error state.
 * @param {string} customerId - The value of the customerId according to which list will occur
 */
export function getPrescriptionListLoading (prescriptionState, customerId) {
  return {
    type: GET_PRESCRIPTION_LIST_LOADING,
    prescriptionState,
    isLoading: true,
    isError: false,
    error: {},
    customerId: customerId
  }
}

/**
 * Represents to the success state to get the prescription list.
 * @param {object} prescriptionState - The object maintained for payload, loading and error state.
 * @param {array} result - The prescription list obtained from the API response
 */
export function getPrescriptionListSuccess (prescriptionState, result) {
  return {
    type: GET_PRESCRIPTION_LIST_SUCCESS,
    prescriptionState,
    isLoading: false,
    payload: result
  }
}

/**
 * Represents to the error state to get the prescription list.
 * @param {object} prescriptionState - The object maintained for payload, loading and error state.
 * @param {object} error - The error details when API throws an error
 */
export function getPrescriptionListFailure (prescriptionState, error) {
  return {
    type: GET_PRESCRIPTION_LIST_FAILURE,
    prescriptionState,
    isLoading: false,
    isError: true,
    error: error
  }
}
