const initialState = {
  payload: {
    id: null,
    full_name: '',
    default_patient_id: '',
    gender: '',
    membership_code: '',
    memebership_type: '',
    referral_code: '',
    reference_code: ''
  },
  isLoadingCustomerRegister: false,
  errorStateCustomerRegister: {
    isError: false,
    error: null
  }
}

export default initialState
