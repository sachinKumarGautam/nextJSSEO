import initialState from './productDetailsModal'

import {
  GET_PRODUCT_DETAILS_LOADING,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_SUCCESS, 
  // GET_PRODUCT_DETAILS_SUMMARY_LOADING, 
  // GET_PRODUCT_DETAILS_SUMMARY_SUCCESS, 
  // GET_PRODUCT_DETAILS_SUMMARY_FAILURE
} from './productDetailsActionTypes'

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_LOADING:
      return {
        ...state,
        isLoadingGetProductDetails: action.isLoading,
        errorStateGetProductDetails: {
          ...state.errorStateGetProductDetails,
          isError: action.isError,
          error: action.error
        }
      }

    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        isLoadingGetProductDetails: action.isLoading,
        payload: {
          ...state.payload

        }
      }

    case GET_PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        isLoadingGetProductDetails: action.isLoading,
        errorStateGetProductDetails: {
          ...state.errorStateGetProductDetails,
          isError: action.isError,
          error: action.error
        }
      }

    //   case GET_PRODUCT_DETAILS_SUMMARY_LOADING :
    //   return {
    //     ...state,
    //     isLoadingGetProductDetailsSummary: action.isLoading,
    //     errorStateGetProductDetailsSummary: {
    //       ...state.errorStateGetProductDetailsSummary,
    //       isError: action.isError,
    //       error: action.error
    //     }
    //   }

    // case GET_PRODUCT_DETAILS_SUMMARY_SUCCESS :
    //   return {
    //     ...state,
    //     isLoadingGetProductDetailsSummary: action.isLoading,
    //     payload: {
    //       ...state.payload

    //     }
    //   }

    // case GET_PRODUCT_DETAILS_SUMMARY_FAILURE:
    //   return {
    //     ...state,
    //     isLoadingGetProductDetailsSummary: action.isLoading,
    //     errorStateGetProductDetailsSummary: {
    //       ...state.errorStateGetProductDetailsSummary,
    //       isError: action.isError,
    //       error: action.error
    //     }
    //   }

    default:
      return state
  }
}
