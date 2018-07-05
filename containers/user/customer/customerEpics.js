import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map, flatMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import {CUSTOMER_REGISTER_LOADING, FETCH_USER_INFO_LOADING} from './customerActionTypes'
import {
  customerRegisterSuccess,
  customerRegisterFailure,
  fetchUserInfoSuccess,
  fetchUserInfoFailure
} from './customerActions'
import { toggleAuthentication } from '../../login/loginActions'

import http from '../../../services/api/ajaxWrapper'
import {fetchUserInfo$, registerCustomer$} from '../../../services/api/index'

export function registerCustomer (action$, store) {
  return action$.pipe(
    ofType(CUSTOMER_REGISTER_LOADING),
    mergeMap(data => {
      const customerState = store.getState().customerState
      const loginState = store.getState().loginState
      return http(registerCustomer$(data.values)).pipe(
        flatMap(result => {
          data.setSubmitting(false)
          setTimeout(() => {
            data.closeLoginModal()
          }, 250)
          // TODO: remove store.dispatch as it might be deprecated in future
          return of(toggleAuthentication(loginState, true),
            customerRegisterSuccess(customerState, result))
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
