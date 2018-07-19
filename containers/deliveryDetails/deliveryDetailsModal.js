const initialState = {
  payload: [],
  deliveryFormState: {},
  address: {},
  isLoading: false,
  errorState: {
    isError: false,
    error: {}
  },
  pincodeCheck: {
    payload: {},
    isLoading: false,
    errorState: {
      isError: false,
      error: {}
    }
  },
  addressForm: {
    full_name: '',
    mobile: '',
    pincode: '',
    locality: '',
    street1: '',
    street2: '',
    city: '',
    state: ''
  },
  addressLocalityList: {
    payload: [],
    isLoading: false,
    errorState: {
      isError: false,
      error: {}
    }
  }
}

export default initialState
