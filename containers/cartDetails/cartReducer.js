import initialState from './cartModal'

import {
  GET_ANONYMOUS_CART_ID_LOADING,
  GET_ANONYMOUS_CART_ID_SUCCESS,
  GET_ANONYMOUS_CART_ID_FAILURE,
  CART_TRANSFER_LOADING,
  CART_TRANSFER_SUCCESS,
  CART_TRANSFER_FAILURE
} from './cartActionTypes'

export default function cartReducer (state = initialState, action) {
  switch (action.type) {
    case GET_ANONYMOUS_CART_ID_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          error: action.error,
          isError: action.isError
        }
      }

    case GET_ANONYMOUS_CART_ID_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        payload: {
          ...state.payload,
          id: action.id,
          uid: action.uid,
          patient_id: action.patient_id,
          cart_items: {
            ...state.payload.cart_items,
            payload: action.cart_items
          },
          cart_prescriptions: action.cart_prescriptions,
          is_doctor_callback: {
            ...state.payload.is_doctor_callback,
            payload: action.is_doctor_callback
          },
          source_type: action.source_type,
          facility_code: action.facility_code
        }
      }

    case GET_ANONYMOUS_CART_ID_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case CART_TRANSFER_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case CART_TRANSFER_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        payload: {
          ...state.payload,
          id: action.id,
          uid: action.uid,
          customer_id: action.customer_id,
          customer_first_name: action.customer_first_name,
          customer_last_name: action.customer_last_name,
          facility_code: action.facility_code,
          status: action.status,
          source: action.source,
          cart_items: {
            ...state.payload.cart_items,
            payload: action.cart_items
          },
          cart_prescriptions: action.cart_prescriptions,
          is_cart_transfered: action.is_cart_transfered,
          source_type: action.source_type,
          is_doctor_callback: {
            ...state.payload.is_doctor_callback,
            payload: action.doctor_callback
          }
        }
      }

    case CART_TRANSFER_FAILURE:
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
