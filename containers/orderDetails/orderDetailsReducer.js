import initialState from './orderDetailsModal'

import {
  GET_ORDER_DETAILS_LOADING,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILURE,
  GET_PAYMENT_CHANNELS_LOADING,
  GET_PAYMENT_CHANNELS_SUCCESS,
  GET_PAYMENT_CHANNELS_FAILURE
} from './orderDetailsActionTypes'

export default function orderDetailsReducer (state = initialState, action) {
  switch (action.type) {
    // update loading details of order details API
    case GET_ORDER_DETAILS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    // update success details of order details API
    case GET_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        payload: {
          ...state.payload,
          id: action.id,
          uid: action.uid,
          patient_id: action.patient_id,
          customer_id: action.customer_id,
          created_at: action.created_at,
          shipping_address_id: action.shipping_address_id,
          shipping_address: action.shipping_address,
          customer_full_name: action.customer_full_name,
          patient_full_name: action.patient_full_name,
          patient_first_name: action.patient_first_name,
          patient_last_name: action.patient_last_name,
          discount: action.discount,
          redeemed_care_points: action.redeemed_care_points,
          redeemed_cash: action.redeemed_cash,
          total_mrp: action.total_mrp,
          total_sale_price: action.total_sale_price,
          total_tax_amount: action.total_tax_amount,
          facility_code: action.facility_code,
          status: action.status,
          source: action.source,
          activeStep: action.activeStep,
          viewStatus: action.viewStatus,
          payment_method: action.payment_method,
          promised_delivery_date: action.promised_delivery_date,
          order_items: action.order_items,
          order_prescriptions: action.order_prescriptions,
          source_type: action.source_type,
          delivery_option: action.delivery_option,
          service_type: action.service_type,
          seller_name: action.seller_name
        },
        isLoading: action.isLoading
      }

    // update failure details of order details API
    case GET_ORDER_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case GET_PAYMENT_CHANNELS_LOADING:
      return {
        ...state,
        payment_channels: {
          ...state.payment_channels,
          isLoading: action.isLoading,
          errorState: {
            ...state.payment_channels.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    case GET_PAYMENT_CHANNELS_SUCCESS:
      return {
        ...state,
        payment_channels: {
          ...state.payment_channels,
          isLoading: action.isLoading,
          payload: action.payment_channels
        }
      }

    case GET_PAYMENT_CHANNELS_FAILURE:
      return {
        ...state,
        payment_channels: {
          ...state.payment_channels,
          isLoading: action.isLoading,
          errorState: {
            ...state.payment_channels.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    default:
      return state
  }
}
