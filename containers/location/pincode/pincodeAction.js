import {
  CHECK_PINCODE_LOADING,
  CHECK_PINCODE_SUCCESS,
  CHECK_PINCODE_FAILURE,
  HANDLE_PINCODE_DIALOG,
  RESET_PINCODE_STATE,
  CHANGE_PINCODE
} from './pincodeActionTypes'

export function openPincodeDialog (checkPincodeState, { ...defaultArgs }) {
  return {
    type: HANDLE_PINCODE_DIALOG,
    isOpen: defaultArgs.isOpen,
    isChangePincode: defaultArgs.isChangePincode ? defaultArgs.isChangePincode : false
  }
}

export function checkPincodeLoading (
  checkPincodeState,
  handleClose,
  setSubmitting,
  values,
  { ...defaultArgs } // an object with default values
) {
  return {
    type: CHECK_PINCODE_LOADING,
    checkPincodeState,
    handleClose: handleClose,
    setSubmitting: setSubmitting,
    isDeliveryAddress: defaultArgs.isDeliveryAddress,
    incrementCartItemLoading: defaultArgs.incrementCartItemLoading,
    inProgressCartItem: defaultArgs.inProgressCartItem,
    pincode: defaultArgs.isDeliveryAddress ? values : values.pincode,
    isCartAddressSelection: defaultArgs.isCartAddressSelection,
    addressId: defaultArgs.addressId,
    isLoading: true,
    isError: false,
    error: {},
    isDeliveryAssignment: defaultArgs.isDeliveryAssignment
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

export function resetPincodeState (checkPincodeState) {
  return {
    type: RESET_PINCODE_STATE,
    pincode: checkPincodeState.payload.pincode
  }
}

export function changePincodeValue (checkPincodeState, pincodeValue) {
  return {
    type: CHANGE_PINCODE,
    pincodeValue: pincodeValue
  }
}
