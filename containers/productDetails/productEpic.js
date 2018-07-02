import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import {GET_PRODUCT_DETAILS_LOADING} from './productDetailsActionTypes'
import http from '../../services/api/ajaxWrapper'
import {getProductDetailSuccess, getProductDetailFailure} from './productDetailsActions'
import {getProductDetails$} from '../../services/api/index'

export function getProductDetails (action$, store) {
    return action$.pipe(
      ofType(GET_PRODUCT_DETAILS_LOADING),
      mergeMap(data => {
        const loginState = store.getState().loginState
  
        return http(getProductDetails$(data.sku)).pipe(
          map(result => {
            return getProductDetailSuccess(loginState, result, data.values)
          }),
          catchError(error => {
            return of(getProductDetailFailure(loginState, error))
          })
        )
      })
    )
  }