import {
  CHECK_PINCODE_LOADING,
  CHECK_PINCODE_SUCCESS,
  CHECK_PINCODE_FAILURE
} from './pincodeActionTypes'

export function checkPincodeLoading (
  checkPincodeState, 
  handleClose, 
  setSubmitting, 
  values
) {
  return {
    type: CHECK_PINCODE_LOADING,
    checkPincodeState,
    handleClose, 
    setSubmitting, 
    pincode: values.pincode,
    isLoading: true,
    isError: false,
    error: {}
  }
}

export function checkPincodeSuccess (checkPincodeState, result) {
  return {
    type: CHECK_PINCODE_SUCCESS,
    checkPincodeState,
    isLoading: false
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
