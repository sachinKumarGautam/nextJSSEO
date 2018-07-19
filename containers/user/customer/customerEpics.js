import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map, flatMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import {
  CUSTOMER_REGISTER_LOADING, 
  FETCH_USER_INFO_LOADING,
  CHECK_REFERRAL_CODE_LOADING
} from './customerActionTypes'
import {
  customerRegisterSuccess,
  customerRegisterFailure,
  fetchUserInfoSuccess,
  fetchUserInfoFailure,
  checkReferralCodeFailure,
  checkReferralCodeSuccess
} from './customerActions'
import { toggleAuthentication } from '../../login/loginActions'

import http from '../../../services/api/ajaxWrapper'
import {fetchUserInfo$, registerCustomer$, checkReferralCode$} from '../../../services/api/index'
import {cartTransferLoading} from '../../cartDetails/cartActions'

export function registerCustomer (action$, store) {
  return action$.pipe(
    ofType(CUSTOMER_REGISTER_LOADING),
    mergeMap(data => {
      const customerState = store.getState().customerState
      const loginState = store.getState().loginState
      const cartState = store.getState().cartState

      return http(registerCustomer$(data.values)).pipe(
        flatMap(result => {
          data.setSubmitting(false)
          setTimeout(() => {
            data.closeLoginModal()
          }, 250)
          // TODO: remove store.dispatch as it might be deprecated in future
          return of(toggleAuthentication(loginState, true),
            customerRegisterSuccess(customerState, result),
            cartTransferLoading(cartState))
        }),
        catchError(error => {
          data.setSubmitting(false)
          return of(customerRegisterFailure(customerState, error))
        })
      )
    })
  )
}

export function fetchUserInfo (action$, store) {
  return action$.pipe(
    ofType(FETCH_USER_INFO_LOADING),
    mergeMap(data => {
      const customerState = store.getState().customerState
      return http(fetchUserInfo$(data.phoneNumber)).pipe(
        map(result => {
          return fetchUserInfoSuccess(customerState, result)
        }),
        catchError(error => {
          return of(fetchUserInfoFailure(customerState, error))
        })
      )
    })
  )
}

export function checkReferralCode (action$, store) {
  return action$.pipe(
    ofType(CHECK_REFERRAL_CODE_LOADING),
    mergeMap(data => {
      console.log('kapil')
      const customerState = store.getState().customerState
      return http(checkReferralCode$(data.referralCode)).pipe(
        map(result => {
          return checkReferralCodeSuccess(customerState, result)
        }),
        catchError(error => {
          return of(checkReferralCodeFailure(customerState, error))
        })
      )
    })
  )
}
