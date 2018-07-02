import initialState from './productDetailsModal'

import {
  GET_PRODUCT_DETAILS_LOADING,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_SUCCESS
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

    default:
      return state
  }
}
