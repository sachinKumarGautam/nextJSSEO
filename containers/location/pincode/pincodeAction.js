import {
  CHECK_PINCODE_LOADING,
  CHECK_PINCODE_SUCCESS,
  CHECK_PINCODE_FAILURE
} from './pincodeActionTypes'

export function checkPincodeLoading (locationState, pincode) {
  return {
    type: CHECK_PINCODE_LOADING,
    locationState,
    pincode,
    isLoading: true,
    isError: false,
    error: {}
  }
}

export function checkPincodeSuccess (locationState, result) {
  return {
    type: CHECK_PINCODE_SUCCESS,
    locationState,
    isLoading: false
  }
}

export function checkPincodeFailure (locationState, error) {
  return {
    type: CHECK_PINCODE_FAILURE,
    locationState,
    isLoading: false,
    isError: true,
    error: error
  }
}
