import {
  CHECK_PINCODE_LOADING,
  CHECK_PINCODE_SUCCESS,
  CHECK_PINCODE_FAILURE,
  HANDLE_PINCODE_DIALOG
} from './pincodeActionTypes'

export function openPincodeDialog (checkPincodeState, isOpen = false) {
  return {
    type: HANDLE_PINCODE_DIALOG,
    isOpen
  }
}

export function checkPincodeLoading (
  checkPincodeState,
  handleClose,
  setSubmitting,
  values,
  isDeliveryAddress,
  incrementCartItemLoading = null,
  inProgressCartItem = {}
) {
  return {
    type: CHECK_PINCODE_LOADING,
    checkPincodeState,
    handleClose: handleClose,
    setSubmitting: setSubmitting,
    isDeliveryAddress: isDeliveryAddress,
    incrementCartItemLoading: incrementCartItemLoading,
    inProgressCartItem: inProgressCartItem,
    pincode: isDeliveryAddress ? values : values.pincode,
    isLoading: true,
    isError: false,
    error: {}
  }
}

export function checkPincodeSuccess (checkPincodeState, result) {
  const updatedResult = result.body.payload
  return {
    type: CHECK_PINCODE_SUCCESS,
    checkPincodeState,
    isLoading: false,
    id: updatedResult.id,
    pincode: updatedResult.pincode,
    city: updatedResult.city,
    state: updatedResult.state,
    country: updatedResult.country,
    delivery_day: updatedResult.delivery_day,
    free_shipping_min_order: updatedResult.free_shipping_min_order,
    shipping_fee: updatedResult.shipping_fee,
    is_active: updatedResult.is_active,
    is_lc_assured_available: updatedResult.is_lc_assured_available,
    is_urgent_dl_available: updatedResult.is_lc_assured_available,
    urgent_delivery_charge: updatedResult.urgent_delivery_charge
  }
}

export function checkPincodeFailure (checkPincodeState, error) {
  return {
    type: CHECK_PINCODE_FAILURE,
    checkPincodeState,
    isLoading: false,
    isError: true,
    error: error
  }
}
