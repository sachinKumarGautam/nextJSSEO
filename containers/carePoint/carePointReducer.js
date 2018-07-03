import initialState from './carePointModal'

import {
  GET_CARE_POINT_DETAILS_LOADING,
  GET_CARE_POINT_DETAILS_SUCCESS,
  GET_CARE_POINT_DETAILS_FAILURE
} from './carePointActionTypes'

export default function carePointReducer (state = initialState, action) {
  switch (action.type) {
    // update loading details of care point deatils API
    case GET_CARE_POINT_DETAILS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    // update success details of care point deatils API
    case GET_CARE_POINT_DETAILS_SUCCESS:
      return {
        ...state,
        payload: {
          ...state.payload,
          customer_wallet: {
            ...state.payload.customer_wallet,
            bonus: action.payload.customer_wallet.bonus,
            cash: action.payload.customer_wallet.cash,
            refundable_cash: action.payload.customer_wallet.refundable_cash,
            customer_id: action.payload.customer_wallet.customer_id
          },
          customer_wallet_transactions: action.payload.customer_wallet_transactions
        },
        isLoading: action.isLoading
      }

    // update failure details of care point deatils API
    case GET_CARE_POINT_DETAILS_FAILURE:
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
