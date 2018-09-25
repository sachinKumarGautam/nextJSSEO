import {
  GET_ORDER_LIST_DETAILS_LOADING,
  GET_ORDER_LIST_DETAILS_SUCCESS,
  GET_ORDER_LIST_DETAILS_FAILURE
} from './orderListActionTypes'

/**
 * Represents to the loading state to get the order list details according to the salt name.
 * @param {object} orderListState - The object maintained for payload, loading and error state.
 * @param {number} customerId - The value of the customerId according to which list will occur
 * @param {number} page - The page number whose medicines to be shown
 * @param {number} size - The size of list per page
 */
export function getOrderListDetailsLoading (orderListState, customerId, page, size) {
  return {
    type: GET_ORDER_LIST_DETAILS_LOADING,
    orderListState,
    isLoading: true,
    isError: false,
    error: {},
    customerId: customerId,
    page: page,
    size: size
  }
}

/**
 * Represents to the success state to get the order list details.
 * @param {object} orderListState - The object maintained for payload, loading and error state.
 * @param {array} result - The order list details obtained from the API response
 */
export function getOrderListDetailsSuccess (orderListState, result, totalPages) {
  return {
    type: GET_ORDER_LIST_DETAILS_SUCCESS,
    orderListState,
    isLoading: false,
    totalPages: totalPages,
    payload: result
  }
}

/**
 * Represents to the error state to get the order list details.
 * @param {object} orderListState - The object maintained for payload, loading and error state.
 * @param {object} error - The error details when API throws an error
 */
export function getOrderListDetailsFailure (orderListState, error) {
  return {
    type: GET_ORDER_LIST_DETAILS_FAILURE,
    orderListState,
    isLoading: false,
    isError: true,
    error: error
  }
}
