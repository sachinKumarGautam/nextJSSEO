import initialState from './constantsModal'

import {
  FETCH_CONSTANTS_LOADING,
  FETCH_CONSTANTS_SUCCESS,
  FETCH_CONSTANTS_FAILURE
} from './constantsActionTypes'

export default function constantsReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_CONSTANTS_LOADING:
      return {
        ...state,
        constants: {
          ...state.constants,
          isLoading: action.isLoading,
          errorState: {
            ...state.constants.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    case FETCH_CONSTANTS_SUCCESS:
      return {
        ...state,
        constants: {
          ...state.constants,
          isLoading: action.isLoading,
          payload: {
            ...state.constants.payload,
            conversion_rate: action.conversion_rate,
            discount_percentage_applied: action.discount_percentage_applied,
            invitee_credit_amount: action.invitee_credit_amount,
            inviter_credit_amount: action.inviter_credit_amount,
            order_discount_percentage: action.order_discount_percentage,
            urgent_delivery_assured_reason: action.urgent_delivery_assured_reason,
            express_delivery_charge: action.express_delivery_charge,
            express_lcassured_undelivered_cashback: action.express_lcassured_undelivered_cashback,
            maximum_express_lcassured_cashback: action.maximum_express_lcassured_cashback
          }
        }
      }

    case FETCH_CONSTANTS_FAILURE:
      return {
        ...state,
        constants: {
          ...state.constants,
          isLoading: action.isLoading,
          errorState: {
            ...state.constants.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    default:
      return state
  }
}
