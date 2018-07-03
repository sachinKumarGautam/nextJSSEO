import {
  GET_CARE_POINT_DETAILS_LOADING,
  GET_CARE_POINT_DETAILS_SUCCESS,
  GET_CARE_POINT_DETAILS_FAILURE
} from './carePointActionTypes'

/**
 * Represents to the loading state to get the care point detail according to the customer id.
 * @param {object} carePointState - The object maintained for payload, loading and error state.
 * @param {number} customerId - The value of the customer id according to which list will occur
 * @param {string} cashType - The bonus type according to which care point or care point + detail will occur
 */
export function getCarePointDetailsLoading (
  carePointState,
  customerId,
  cashType
) {
  return {
    type: GET_CARE_POINT_DETAILS_LOADING,
    carePointState,
    isLoading: true,
    isError: false,
    error: {},
    customerId: customerId,
    cashType: cashType
  }
}

/**
 * Represents to the success state to get the care point detail.
 * @param {object} carePointState - The object maintained for payload, loading and error state.
 * @param {object} result - The medicine list obtained from the API response
 */
export function getCarePointDetailsSuccess (carePointState, result) {
  return {
    type: GET_CARE_POINT_DETAILS_SUCCESS,
    carePointState,
    isLoading: false,
    payload: result
  }
}

/**
 * Represents to the error state to get the care point detail.
 * @param {object} carePointState - The object maintained for payload, loading and error state.
 * @param {object} error - The error details when API throws an error
 */
export function getCarePointDetailsFailure (carePointState, error) {
  return {
    type: GET_CARE_POINT_DETAILS_FAILURE,
    carePointState,
    isLoading: false,
    isError: true,
    error: error
  }
}
