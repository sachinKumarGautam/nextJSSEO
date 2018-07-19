const initialState = {
  payload: {
    id: null,
    full_name: '',
    mobile: '',
    default_patient_id: '',
    gender: '',
    membership_code: '',
    memebership_type: '',
    referral_code: {
      payload: '',
      isLoading: false,
      errorState: {
        isError: false,
        error: null
      }
    },
    reference_code: ''
  },
  isLoadingFetchCustomerDetails: false,
  errorStateFetchCustomerDetails: {
    isError: false,
    error: null
  },
  isLoadingCustomerRegister: false,
  errorStateCustomerRegister: {
    isError: false,
    error: null
  }
}

export default initialState
