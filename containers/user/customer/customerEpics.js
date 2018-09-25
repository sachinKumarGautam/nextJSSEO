import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map, flatMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import {
  CUSTOMER_REGISTER_LOADING,
  FETCH_USER_INFO_LOADING,
  CHECK_REFERRAL_CODE_LOADING,
  GET_MEMBERSHIP_CODE_LOADING
} from './customerActionTypes'
import {
  customerRegisterSuccess,
  customerRegisterFailure,
  fetchUserInfoSuccess,
  fetchUserInfoFailure,
  checkReferralCodeFailure,
  checkReferralCodeSuccess,
  getMembershipCodeSuccess,
  getMembershipCodeFailure
} from './customerActions'

import {
  resetIsNewUserFlag
} from '../../login/loginActions'

import http from '../../../services/api/ajaxWrapper'
import {
  fetchUserInfo$,
  registerCustomer$,
  checkReferralCode$,
  getMembershipCode$
} from '../../../services/api/index'
import { cartTransferLoading } from '../../cartDetails/cartActions'

export function registerCustomer(action$, store) {
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
          return of(
            customerRegisterSuccess(customerState, result),
            cartTransferLoading(cartState),
            resetIsNewUserFlag(loginState)
          )
        }),
        catchError(error => {
          data.setSubmitting(false)
          return of(customerRegisterFailure(customerState, error))
        })
      )
    })
  )
}

export function fetchUserInfo(action$, store) {
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

export function checkReferralCode(action$, store) {
  return action$.pipe(
    ofType(CHECK_REFERRAL_CODE_LOADING),
    mergeMap(data => {
      const customerState = store.getState().customerState
      return http(checkReferralCode$(data.referralCodeInputValue)).pipe(
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

export function getMembershipCodeLoading(action$, store) {
  return action$.pipe(
    ofType(GET_MEMBERSHIP_CODE_LOADING),
    mergeMap(data => {
      const customerState = store.getState().customerState
      return http(getMembershipCode$(data.phoneNumber)).pipe(
        map(result => {
          return getMembershipCodeSuccess(customerState, result)
        }),
        catchError(error => {
          return of(getMembershipCodeFailure(customerState, error))
        })
      )
    })
  )
}
