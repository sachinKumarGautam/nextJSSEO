import {
  GET_PRODUCT_DETAILS_LOADING,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILURE,
  // GET_PRODUCT_DETAILS_SUMMARY_LOADING,
  // GET_PRODUCT_DETAILS_SUMMARY_SUCCESS,
  // GET_PRODUCT_DETAILS_SUMMARY_FAILURE
} from './productDetailsActionTypes'

export function getProductDetailLoading (productDetailsState, sku) {
  return {
    type: GET_PRODUCT_DETAILS_LOADING,
    productDetailsState,
    sku,
    isLoading: true,
    isError: false,
    error: null
  }
}

export function getProductDetailSuccess (productDetailsState, result) {
  return {
    type: GET_PRODUCT_DETAILS_SUCCESS,
    productDetailsState,
    isLoading: false
  }
}

export function getProductDetailFailure (productDetailsState, error) {
  return {
    type: GET_PRODUCT_DETAILS_FAILURE,
    productDetailsState,
    isLoading: false,
    isError: true,
    error: error
  }
}

// export function getProductDetailSummaryLoading (productDetailsState, sku) {
//   return {
//     type: GET_PRODUCT_DETAILS_SUMMARY_LOADING,
//     productDetailsState,
//     sku,
//     isLoading: true,
//     isError: false,
//     error: null
//   }
// }

// export function getProductDetailSummarySuccess (productDetailsState, result) {
//   return {
//     type: GET_PRODUCT_DETAILS_SUMMARY_SUCCESS,
//     productDetailsState,
//     isLoading: false
//   }
// }

// export function getProductDetailSummaryFailure (productDetailsState, error) {
//   return {
//     type: GET_PRODUCT_DETAILS_SUMMARY_FAILURE,
//     productDetailsState,
//     isLoading: false,
//     isError: true,
//     error: error
//   }
// }

