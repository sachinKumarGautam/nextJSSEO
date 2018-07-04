import {
  GET_ANONYMOUS_CART_ID_LOADING,
  GET_ANONYMOUS_CART_ID_SUCCESS,
  GET_ANONYMOUS_CART_ID_FAILURE,
  CART_TRANSFER_LOADING,
  CART_TRANSFER_SUCCESS,
  CART_TRANSFER_FAILURE
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

export function cartTransferLoading (
  cartState,
  customerId,
  patientFormState
) {
  return {
    type: CART_TRANSFER_LOADING,
    cartState: cartState,
    isLoading: true,
    isError: false,
    error: {}
  }
}

export function cartTransferSuccess (cartState, result, cartItems, cartPrescriptions) {
  let payload = result.response.payload
  return {
    type: CART_TRANSFER_SUCCESS,
    cartState: cartState,
    cart_items: cartItems,
    isLoading: false,
    id: payload.id,
    uid: payload.uid,
    customer_id: payload.customer_id,
    customer_first_name: payload.customer_first_name,
    customer_last_name: payload.customer_last_name,
    facility_code: payload.facility_code,
    status: payload.status,
    source: payload.source,
    cart_prescriptions: cartPrescriptions,
    doctor_callback: payload.doctor_callback,
    is_cart_transfered: true,
    source_type: payload.source_type
  }
}

export function cartTransferFailure (cartState, error) {
  return {
    type: CART_TRANSFER_FAILURE,
    cartState: cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}
