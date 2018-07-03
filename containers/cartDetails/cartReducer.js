import initialState from './cartModal'

import * as cartActionTypes from './cartActionTypes'

export default function cartReducer (state = initialState, action) {
  switch (action.type) {
    case cartActionTypes.GET_ANONYMOUS_CART_ID_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          error: action.error,
          isError: action.isError
        }
      }

    case cartActionTypes.GET_ANONYMOUS_CART_ID_SUCCESS:
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

    case cartActionTypes.GET_ANONYMOUS_CART_ID_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case cartActionTypes.GET_CART_DETAILS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError
        }
      }

    case cartActionTypes.GET_CART_DETAILS_SUCCESS:
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
            ...state.cartDetails.payload.cart_items,
            payload: action.cart_items
          },
          cart_prescriptions: action.cart_prescriptions,
          source_type: action.source_type,
          delivery_option: action.delivery_option,
          service_type: action.service_type
        }
      }

    case cartActionTypes.GET_CART_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case cartActionTypes.INCREMENT_CART_ITEM_LOADING:
      return state

    case cartActionTypes.DECREMENT_CART_ITEM_LOADING:
      return state

    case cartActionTypes.PUT_CART_ITEM_SUCCESS:
      return {
        ...state,
        payload: {
          ...state.payload,
          cart_items: {
            ...state.payload.cart_items,
            payload: action.cartItems
          }
        }
      }

    case cartActionTypes.PUT_CART_ITEM_FAILURE:
      return {
        ...state,
        payload: {
          ...state.payload,
          cart_items: {
            ...state.payload.cart_items,
            payload: action.cartItems
          }
        }
      }

    default:
      return state
  }
}
