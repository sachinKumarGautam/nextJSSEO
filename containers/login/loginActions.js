import {
  SEND_OTP_LOADING,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAILURE,
  OTP_VERIFIED_LOADING,
  OTP_VERIFIED_FAILURE,
  OTP_VERIFIED_SUCCESS,
  TOGGLE_AUTHENTICATION,
  RESET_LOGIN_STATE,
  RESET_IS_NEW_USER_FLAG,
  HANDLE_SESSION_EXPIRATION
} from './loginActionTypes'

import { COMMON_ERROR_UPDATE } from '../../redux/actionTypes'

import { setCookie, removeCookie } from '../../utils/cookie'

export function sendOtpLoading (loginState, setSubmitting, toggleForm, values) {
  return {
    type: SEND_OTP_LOADING,
    loginState,
    toggleForm,
    values: values,
    setSubmitting,
    isLoading: true,
    isError: false,
    error: null
  }
}

export function sendOtpSuccess (loginState, result, values) {
  return {
    type: SEND_OTP_SUCCESS,
    isLoading: false,
    isNewUser: result.body.payload === 'NEW_USER',
    mobile: values.mobile
  }
}

export function sendOtpFailure (loginState, error) {
  return {
    type: SEND_OTP_FAILURE,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function verifyOtpLoading (
  loginState,
  setSubmitting,
  closeLoginModal,
  toggleForm,
  values
) {
  return {
    type: OTP_VERIFIED_LOADING,
    loginState,
    setSubmitting,
    closeLoginModal,
    toggleForm,
    values,
    isLoading: true,
    isError: false,
    error: null
  }
}

export function verifyOtpSuccess (loginState, result) {
  setCookie('token', result.body.access_token)
  return {
    type: OTP_VERIFIED_SUCCESS,
    loginState,
    access_token: result.body.access_token,
    refresh_token: result.body.refresh_token,
    scope: result.body.scope,
    isLoading: false
  }
}

export function verifyOtpFailure (loginState, error) {
  return {
    type: OTP_VERIFIED_FAILURE,
    loginState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function toggleAuthentication (loginState, status) {
  return {
    type: TOGGLE_AUTHENTICATION,
    loginState,
    status: status
  }
}

export function logout () {
  removeCookie('token')
  return {
    type: 'RESET_APPLICATION_STATE'
  }
}

export function resetLoginState () {
  return {
    type: RESET_LOGIN_STATE
  }
}

export function resetIsNewUserFlag (loginState) {
  return {
    type: RESET_IS_NEW_USER_FLAG,
    loginState,
    isNewUser: false
  }
}

export function handleSessionExpiration (loginState, isSessionExpired) {
  return {
    type: HANDLE_SESSION_EXPIRATION,
    loginState,
    isSessionExpired
  }
}

export function updateErrorDetail (errorDetail) {
  return {
    type: COMMON_ERROR_UPDATE,
    errorDetail
  }
}
