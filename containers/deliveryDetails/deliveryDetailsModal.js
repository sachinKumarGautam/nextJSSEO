const initialState = {
  payload: [],
  deliveryFormState: {},
  addressIdSelected: 0,
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
  }
}

export default initialState
