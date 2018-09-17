import initialState from './loginModal'

import {
  SEND_OTP_FAILURE,
  SEND_OTP_LOADING,
  SEND_OTP_SUCCESS,
  OTP_VERIFIED_FAILURE,
  OTP_VERIFIED_LOADING,
  OTP_VERIFIED_SUCCESS,
  TOGGLE_AUTHENTICATION,
  RESET_IS_NEW_USER_FLAG,
  HANDLE_SESSION_EXPIRATION
} from './loginActionTypes'

export default function (state = initialState, action) {
  switch (action.type) {
    case SEND_OTP_LOADING:
      return {
        ...state,
        isLoadingSendOtp: action.isLoading,
        errorStateSendOtp: {
          ...state.errorStateSendOtp,
          isError: action.isError,
          error: action.error
        }
      }

    case SEND_OTP_SUCCESS:
      return {
        ...state,
        isLoadingSendOtp: action.isLoading,
        isNewUser: action.isNewUser,
        payload: {
          ...state.payload,
          initialMobile: action.mobile
        }
      }

    case SEND_OTP_FAILURE:
      return {
        ...state,
        isLoadingSendOtp: action.isLoading,
        errorStateSendOtp: {
          ...state.errorStateSendOtp,
          isError: action.isError,
          error: action.error
        }
      }

    case OTP_VERIFIED_LOADING:
      return {
        ...state,
        isLoadingVerifyOtp: action.isLoading,
        errorStateVerifyOtp: {
          ...state.errorStateVerifyOtp,
          isError: action.isError,
          error: action.error
        }
      }

    case OTP_VERIFIED_SUCCESS:
      return {
        ...state,
        isLoadingVerifyOtp: action.isLoading,
        payload: {
          ...state.payload,
          verification: {
            ...state.payload.verification,
            access_token: action.access_token,
            refresh_token: action.refresh_token,
            scope: action.scope
          }
        }

      }

    case OTP_VERIFIED_FAILURE:
      return {
        ...state,
        isLoadingVerifyOtp: action.isLoading,
        errorStateVerifyOtp: {
          ...state.errorStateVerifyOtp,
          isError: action.isError,
          error: action.error
        }
      }

    case TOGGLE_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: action.status
      }

    case RESET_IS_NEW_USER_FLAG:
      return {
        ...state,
        isNewUser: action.isNewUser
      }

    case HANDLE_SESSION_EXPIRATION:
      return {
        ...state,
        isSessionExpired: action.isSessionExpired
      }


    default:
      return state
  }
}
