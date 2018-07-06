import {
  CUSTOMER_REGISTER_LOADING,
  CUSTOMER_REGISTER_SUCCESS,
  CUSTOMER_REGISTER_FAILURE,
  UPDATE_PHONE_NUMBER,
  FETCH_USER_INFO_LOADING,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAILURE
} from './customerActionTypes'

export function fetchUserInfoLoading (customerState, phoneNumber) {
  return {
    type: FETCH_USER_INFO_LOADING,
    phoneNumber,
    customerState,
    isLoading: true,
    isError: false,
    error: null
  }
}

export function fetchUserInfoSuccess (customerState, result) {
  return {
    type: FETCH_USER_INFO_SUCCESS,
    customerState,
    result,
    isLoading: false,
    id: result.body.payload.id,
    full_name: result.body.payload.full_name,
    gender: result.body.payload.gender,
    age: result.body.payload.age,
    referral_code: result.body.payload.referral_code,
    default_location: result.body.payload.default_location,
    reference_code: result.body.payload.reference_code,
    membership_code: result.body.payload.membership_code,
    mobile: result.body.payload.mobile,
    email: result.body.payload.email
  }
}

export function fetchUserInfoFailure (customerState, error) {
  return {
    type: FETCH_USER_INFO_FAILURE,
    customerState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function updatePhoneNumber (customerState, mobile) {
  return {
    type: UPDATE_PHONE_NUMBER,
    customerState,
    mobile
  }
}

export function customerRegisterLoading (
  customerState,
  closeLoginModal,
  setSubmitting,
  values
) {
  return {
    type: CUSTOMER_REGISTER_LOADING,
    customerState,
    closeLoginModal,
    setSubmitting,
    values,
    isLoading: true,
    isError: false,
    error: null
  }
}

export function customerRegisterSuccess (customerState, result) {
  return {
    type: CUSTOMER_REGISTER_SUCCESS,
    customerState,
    id: result.body.payload.id,
    full_name: result.body.payload.full_name,
    default_patient_id: result.body.payload.default_patient_id,
    gender: result.body.payload.gender,
    membership_code: result.body.payload.membership_code,
    memebership_type: result.body.payload.memebership_type,
    referral_code: result.body.payload.referral_code,
    reference_code: result.body.payload.reference_code,
    isLoading: false
  }
}

export function customerRegisterFailure (customerState, error) {
  return {
    type: CUSTOMER_REGISTER_FAILURE,
    customerState,
    isLoading: false,
    isError: true,
    error: error

  }
}
