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
    values
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
    membership_code: '',
    memebership_type: '',
    referral_code: '',
    reference_code: '',
    isAuthenticated: true
  }
}

export function customerRegisterFailure (customerState, error) {
  return {
    type: CUSTOMER_REGISTER_FAILURE,
    customerState
  }
}
