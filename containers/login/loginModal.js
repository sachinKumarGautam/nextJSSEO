const initialState = {
  payload: {
  },
  isNewUser: false,
  isAuthenticated: false,
  isLoadingVerifyOtp: false,
  errorStateVerifyOtp: {
    isError: false,
    error: null
  },
  isLoadingSendOtp: false,
  errorStateSendOtp: {
    isError: false,
    error: null
  }
}

export default initialState
