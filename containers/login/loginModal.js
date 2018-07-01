const initialState = {
  payload: {
    initalMobile: '',
    verification: {
        access_token: '',
        expires_in: 0,
        refresh_token: '',
        scope: '',
        token_type: ''
      },
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
