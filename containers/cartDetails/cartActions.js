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
  return {
    type: cartActionTypes.GET_CART_DETAILS_SUCCESS,
    cartState: cartState,
    isLoading: false,
    id: result.id,
    uid: result.uid,
    customer_id: result.customer_id,
    customer_first_name: result.customer_first_name,
    customer_last_name: result.customer_last_name,
    facility_code: result.facility_code,
    status: result.status,
    source: result.source,
    cart_items: result.cart_items,
    cart_prescriptions: result.cart_prescriptions,
    source_type: result.source_type,
    delivery_option: result.delivery_option,
    service_type: result.service_type
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

export function savePatientToCartLoading (
  cartState,
  patientId,
  cartId
) {
  return {
    type: cartActionTypes.SAVE_PATIENT_TO_CART_LOADING,
    cartState,
    patientId: patientId,
    cartId: cartId,
    isLoading: true,
    isError: false,
    error: {}
  }
}

export function cartTransferLoading (
  cartState
) {
  return {
    type: cartActionTypes.CART_TRANSFER_LOADING,
    cartState: cartState,
    isLoading: true,
    isError: false,
    error: {}
  }
}

export function savePatientToCartSuccess (cartState, response) {
  return {
    type: cartActionTypes.SAVE_PATIENT_TO_CART_SUCCESS,
    cartState,
    response,
    isLoading: false
  }
}

export function savePatientToCartFailure (cartState, error) {
  return {
    type: cartActionTypes.SAVE_PATIENT_TO_CART_FAILURE,
    cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function saveDeliveryAddressToCartLoading (
  cartState,
  shippingAddressId
) {
  return {
    type: cartActionTypes.SAVE_DELIVERY_ADDRESS_TO_CART_LOADING,
    cartState,
    shippingAddressId: shippingAddressId,
    isLoading: true,
    isError: false,
    error: {}
  }
}

export function saveDeliveryAddressToCartSuccess (cartState, shipping_address_id) {
  return {
    type: cartActionTypes.SAVE_DELIVERY_ADDRESS_TO_CART_SUCCESS,
    cartState,
    shipping_address_id: shipping_address_id,
    isLoading: false
  }
}

export function saveDeliveryAddressToCartFailure (cartState, error) {
  return {
    type: cartActionTypes.SAVE_DELIVERY_ADDRESS_TO_CART_FAILURE,
    cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function cartTransferSuccess (cartState, result, cartItems, cartPrescriptions) {
  let payload = result.body.payload
  return {
    type: cartActionTypes.CART_TRANSFER_SUCCESS,
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
    type: cartActionTypes.CART_TRANSFER_FAILURE,
    cartState: cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}
