import { of } from 'rxjs/observable/of'
import { from } from 'rxjs/observable/from'
import { mergeMap, catchError, map, concat } from 'rxjs/operators'
import ajax from 'universal-rx-request' // because standard AjaxObservable only works in browser
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {SEND_OTP_LOADING, OTP_VERIFIED_LOADING} from './loginActionTypes'

import {
  sendOtpSuccess,
  sendOtpFailure,
  verifyOtpSuccess,
  verifyOtpFailure,
  toggleAuthentication
} from './loginActions'

import { updatePhoneNumber } from '../user/customer/customerActions'
import { verifyOtp$ } from '../../services/api'

export function sendOTP (action$, store) {
  return action$.pipe(
    ofType(SEND_OTP_LOADING),
    mergeMap(data => {
      const loginState = store.getState().loginState
      return ajax({
        url: `http://hadron.lifcare.in/v1/auth/otp`,
        method: 'post',
        data: data.values,
        options: {
          withCredentials: true,
          headers: {
            'Authorization': 'Bearer 076cfb92-f233-446e-9ed6-30c0b7b93831',
            'Content-Type': 'application/x-www-form-urlencoded'
            // contentType: 'application/x-www-form-urlencoded',
          }
        }
      }).pipe(
        map(result => {
          data.setSubmitting(false)
          setTimeout(() => {
            data.toggleForm('otp')
          }, 350)
          return sendOtpSuccess(loginState, result, data.values)
        }),
        catchError(error => {
          data.setSubmitting(false)
          return of(sendOtpFailure(loginState, error))
        })
      )
    })
  )
}

export function verifyOTP (action$, store) {
  return action$.pipe(
    ofType(OTP_VERIFIED_LOADING),
    mergeMap(data => {
      const loginState = store.getState().loginState
      const customerState = store.getState().customerState
      const mobile = loginState.payload.initalMobile
      const otp = data.values.otp

      return http(verifyOtp$(mobile, otp)).pipe(
        map(result => {
          const isNewUser = loginState.isNewUser
          data.setSubmitting(false)
          setTimeout(() => {
            if (isNewUser) {
              data.toggleForm('register')
            } else {
              // TODO: remove store.dispatch as it might be deprecated in future
              store.dispatch(toggleAuthentication(loginState, true))
              data.closeLoginModal()
            }
          }, 250)
          store.dispatch(updatePhoneNumber(customerState, data.values.mobile))
          return verifyOtpSuccess(loginState, result, isNewUser)
        }),
        catchError(error => {
          data.setSubmitting(false)
          return of(verifyOtpFailure(loginState, error))
        })
      )
    })
  )
}
