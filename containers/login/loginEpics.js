import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map, merge } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import { SEND_OTP_LOADING, OTP_VERIFIED_LOADING } from './loginActionTypes'
// return concat(of(verifyOtpSuccess(loginState, result, isNewUser)),
//           of(fetchUserInfoLoading(customerState, mobile)))
//         })
import {
  sendOtpSuccess,
  sendOtpFailure,
  verifyOtpSuccess,
  verifyOtpFailure,
  toggleAuthentication
} from './loginActions'

import {
  updatePhoneNumber,
  fetchUserInfoFailure,
  fetchUserInfoLoading
} from '../user/customer/customerActions'
import { sendOtp$, verifyOtp$ } from '../../services/api'

export function sendOTP (action$, store) {
  return action$.pipe(
    ofType(SEND_OTP_LOADING),
    mergeMap(data => {
      const loginState = store.getState().loginState

      return http(sendOtp$(data.values)).pipe(
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
      const mobile = loginState.payload.initialMobile
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
              // store.dispatch(toggleAuthentication(loginState, true))
              // store.dispatch(fetchUserInfoLoading(customerState, mobile))
              // data.closeLoginModal()
            }
          }, 250)
          // store.dispatch(updatePhoneNumber(customerState, data.values.mobile))

          return merge(of(verifyOtpSuccess(loginState, result, isNewUser)),
          of(fetchUserInfoLoading(customerState, mobile))
        )

          // return concat(
          //   verifyOtpSuccess(loginState, result, isNewUser),
          //   fetchUserInfoLoading(customerState, mobile)
          // )
        }),
        catchError(error => {
          data.setSubmitting(false)
          return of(verifyOtpFailure(loginState, error))
        })
      )
    })
  )
}
