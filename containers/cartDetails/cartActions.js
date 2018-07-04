import * as cartActionTypes from './cartActionTypes'

export function getAnonymousCartIdLoading (
  cartState,
  source,
  facilityCode,
  sourceType = ''
) {
  return {
    type: cartActionTypes.GET_ANONYMOUS_CART_ID_LOADING,
    cartState: cartState,
    isLoading: true,
    isError: false,
    source: source,
    facility_code: facilityCode,
    source_type: sourceType
  }
}

export function getAnonymousCartIdSuccess (cartState, result) {
  return {
    type: cartActionTypes.GET_ANONYMOUS_CART_ID_SUCCESS,
    cartState,
    id: result.id,
    uid: result.uid,
    patient_id: 0,
    cart_prescriptions: [],
    cart_items: [],
    isLoading: false,
    is_doctor_callback: false,
    is_cart_transfered: false,
    source_type: result.source_type,
    facility_code: result.facility_code
  }
}

export function getAnonymousCartIdFailure (cartState, error) {
  return {
    type: cartActionTypes.GET_ANONYMOUS_CART_ID_FAILURE,
    cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function getCartDetailsLoading (cartState, cartUid) {
  return {
    type: cartActionTypes.GET_CART_DETAILS_LOADING,
    cartState: cartState,
    cartUid: cartUid,
    isLoading: true,
    isError: false
  }
}

export function getCartDetailsSuccess (
  cartState,
  result,
  cartItems,
  cartPrescriptions
) {
  const payload = result.response.payload
  return {
    type: cartActionTypes.GET_CART_DETAILS_SUCCESS,
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
    source_type: payload.source_type,
    delivery_option: payload.delivery_option,
    service_type: payload.service_type
  }
}

export function getCartDetailsFailure (cartState, error) {
  return {
    type: cartActionTypes.GET_CART_DETAILS_FAILURE,
    cartState: cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function decrementCartItemLoading (
  cartState,
  medicineSelected
) {
  return {
    type: cartActionTypes.DECREMENT_CART_ITEM_LOADING,
    cartState: cartState,
    medicineSelected: medicineSelected
  }
}

export function incrementCartItemLoading (
  cartState,
  medicineSelected
) {
  return {
    type: cartActionTypes.INCREMENT_CART_ITEM_LOADING,
    cartState: cartState,
    medicineSelected: medicineSelected
  }
}

export function deleteCartItemLoading (
  cartState,
  medicineSelected
) {
  return {
    type: cartActionTypes.DELETE_CART_ITEM_LOADING,
    cartState: cartState,
    medicineSelected: medicineSelected
  }
}

export function putCartItemSuccess (cartState, cartItems) {
  return {
    type: cartActionTypes.PUT_CART_ITEM_SUCCESS,
    cartState,
    cartItems: cartItems
  }
}

export function putCartItemFailure (cartState, cartItems) {
  return {
    type: cartActionTypes.PUT_CART_ITEM_FAILURE,
    cartState,
    cartItems: cartItems
  }
}
