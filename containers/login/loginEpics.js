import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map, flatMap } from 'rxjs/operators'
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
  verifyOtpFailure
} from './loginActions'

import {
  updatePhoneNumber,
  fetchUserInfoLoading,
  getMembershipCodeLoading
} from '../user/customer/customerActions'

import { cartTransferLoading } from '../cartDetails/cartActions'

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
      const cartState = store.getState().cartState
      const mobile = loginState.payload.initialMobile
      const otp = data.values.otp

      return http(verifyOtp$(mobile, otp)).pipe(
        flatMap(result => {
          const isNewUser = loginState.isNewUser
          let successObservable

          data.setSubmitting(false)
          setTimeout(() => {
            if (isNewUser) {
              data.toggleForm('register')
            } else {
              data.closeLoginModal()
            }
          }, 250)

          if (isNewUser) {
            successObservable = of(
              verifyOtpSuccess(loginState, result, isNewUser),
              getMembershipCodeLoading(customerState, mobile)
            )
          } else {
            successObservable = of(
              fetchUserInfoLoading(customerState, mobile),
              verifyOtpSuccess(loginState, result, isNewUser),
              updatePhoneNumber(customerState, mobile),
              cartTransferLoading(cartState)
            )
          }

          return successObservable
        }),
        catchError(error => {
          data.setSubmitting(false)
          return of(verifyOtpFailure(loginState, error))
        })
      )
    })
  )
}
