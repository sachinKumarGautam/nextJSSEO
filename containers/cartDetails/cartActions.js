import {
  GET_ANONYMOUS_CART_ID_LOADING,
  GET_ANONYMOUS_CART_ID_SUCCESS,
  GET_ANONYMOUS_CART_ID_FAILURE
} from './cartActionTypes'

export function getAnonymousCartId (
  cartState,
  source,
  facilityCode,
  sourceType = ''
) {
  return {
    type: GET_ANONYMOUS_CART_ID_LOADING,
    cartState: cartState,
    isLoading: true,
    isError: false,
    source: source,
    facility_code: facilityCode,
    source_type: sourceType
  }
}

export function getAnonymousCartIdSuccess (cartDetails, result) {
  return {
    type: GET_ANONYMOUS_CART_ID_SUCCESS,
    cartDetails,
    id: result.response.payload.id,
    uid: result.response.payload.uid,
    patient_id: 0,
    cart_prescriptions: [],
    cart_items: [],
    isLoading: false,
    is_doctor_callback: false,
    is_cart_transfered: false,
    source_type: result.response.payload.source_type,
    facility_code: result.response.payload.facility_code
  }
}

export function getAnonymousCartIdFailure (cartDetails, error) {
  return {
    type: GET_ANONYMOUS_CART_ID_FAILURE,
    cartDetails,
    isLoading: false,
    isError: true,
    error: error
  }
}
