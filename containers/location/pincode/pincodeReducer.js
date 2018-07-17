import initialState from './pincodeModal'

import {
  CHECK_PINCODE_LOADING,
  CHECK_PINCODE_SUCCESS,
  CHECK_PINCODE_FAILURE,
  HANDLE_PINCODE_DIALOG
} from './pincodeActionTypes'

export default function checkPincodeReducer (state = initialState, action) {
  switch (action.type) {
    // update loading details of check pincode api
    case CHECK_PINCODE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

      // update success details of check pincode api
    case CHECK_PINCODE_SUCCESS:
      return {
        ...state,
        // payload: action.payload,
        isLoading: action.isLoading,
        payload: {
          ...state.payload,
          id: action.id,
          pincode: action.pincode,
          city: action.city,
          state: action.state,
          country: action.country,
          delivery_day: action.delivery_day,
          free_shipping_min_order: action.free_shipping_min_order,
          shipping_fee: action.shipping_fee,
          is_active: action.is_active,
          is_lc_assured_available: action.is_lc_assured_available,
          is_urgent_dl_available: action.is_lc_assured_available,
          urgent_delivery_charge: action.urgent_delivery_charge
        }
      }

      // update failure details of check pincode api
    case CHECK_PINCODE_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case HANDLE_PINCODE_DIALOG:
      return {
        ...state,
        isPincodeDialogOpen: action.isOpen
      }

    default:
      return state
  }
}
