import {
  FETCH_CONSTANTS_LOADING,
  FETCH_CONSTANTS_SUCCESS,
  FETCH_CONSTANTS_FAILURE
} from './constantsActionTypes'

export function fetchConstantsLoading (constantsState) {
  return {
    type: FETCH_CONSTANTS_LOADING,
    constantsState,
    isLoading: true,
    error: {},
    isError: false
  }
}

export function fetchConstantsSuccess (constantsState, result) {
  const payload = result.body
  return {
    type: FETCH_CONSTANTS_SUCCESS,
    constantsState,
    isLoading: false,
    conversion_rate: payload.conversion_rate,
    discount_percentage_applied: payload.discount_percentage_applied,
    invitee_credit_amount: payload.invitee_credit_amount,
    inviter_credit_amount: payload.inviter_credit_amount,
    order_discount_percentage: payload.order_discount_percentage,
    urgent_delivery_assured_reason: payload.urgent_delivery_assured_reason,
    express_delivery_charge: payload.express_delivery_charge,
    express_lcassured_undelivered_cashback: payload.express_lcassured_undelivered_cashback,
    maximum_express_lcassured_cashback: payload.maximum_express_lcassured_cashback
  }
}

export function fetchConstantsFailure (constantsState, error) {
  return {
    type: FETCH_CONSTANTS_FAILURE,
    constantsState,
    isLoading: false,
    error: error,
    isError: true
  }
}
