import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, flatMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import {GET_PRODUCT_DETAILS_LOADING} from './productDetailsActionTypes'

import http from '../../services/api/ajaxWrapper'
import {
  getProductDetailSuccess,
  getProductDetailFailure
} from './productDetailsActions'

import {getProductDetails$} from '../../services/api/index'

export function getProductDetails (action$, store) {
  return action$.pipe(
    ofType(GET_PRODUCT_DETAILS_LOADING),
    mergeMap(data => {
      const productDetailsState = store.getState().productDetailsState

      return http(getProductDetails$(data.productName)).pipe(
        flatMap(result => {
          return getProductDetailSuccess(productDetailsState, result, data.values)
        }),
        catchError(error => {
          return of(getProductDetailFailure(productDetailsState, error))
        })
      )
    })
  )
}