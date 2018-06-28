import {
  CUSTOMER_REGISTER_LOADING,
  CUSTOMER_REGISTER_SUCCESS,
  CUSTOMER_REGISTER_FAILURE
} from './customerActionTypes'

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
    full_name: result.body.payload.id,
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
