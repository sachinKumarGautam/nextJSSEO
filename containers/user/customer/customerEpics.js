import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import ajax from 'universal-rx-request' // because standard AjaxObservable only works in browser
import { ofType } from 'redux-observable'
import {CUSTOMER_REGISTER_LOADING, FETCH_USER_INFO_LOADING} from './customerActionTypes'
import { customerRegisterSuccess, customerRegisterFailure } from './customerActions'
import { toggleAuthentication } from '../../login/loginActions'
import {fetchCharacterSuccess} from '../../../redux/actions'
import http from '../../../services/api/ajaxWrapper'
import {fetchUserInfo$} from '../../../services/api/index'

export function registerCustomer (action$, store) {
  return action$.pipe(
    ofType(CUSTOMER_REGISTER_LOADING),
    mergeMap(data => {
      const customerState = store.getState().customerState
      const loginState = store.getState().loginState
      return ajax({
        url: `http://hadron.lifcare.in/v5/account/customer`,
        method: 'post',
        data: data.values,
        options: {
          headers: {
            'Authorization': 'Bearer 076cfb92-f233-446e-9ed6-30c0b7b93831',
            'Content-Type': 'application/json'
          }
        }
      }).pipe(
        map(result => {
          data.setSubmitting(false)
          setTimeout(() => {
            data.closeLoginModal()
          }, 250)
          // TODO: remove store.dispatch as it might be deprecated in future
          store.dispatch(toggleAuthentication(loginState, true))
          return customerRegisterSuccess(customerState, result)
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
      const mobile = customerState.payload.mobile
      return http(fetchUserInfo$(mobile)).pipe(
        map(result => {
          return fetchCharacterSuccess(customerState, result)
        }),
        catchError(error => {
          data.setSubmitting(false)
          return of(fetchCharacterSuccess(customerState, error))
        })
      )
    })
  )
}
