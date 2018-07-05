import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map, flatMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import {GET_PRODUCT_DETAILS_LOADING, GET_PRODUCT_DETAILS_SUMMARY_LOADING} from './productDetailsActionTypes'

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

      return http(getProductDetails$(data.sku)).pipe(
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

// export function getProductDetailSummary (action$, store) {
//   return action$.pipe(
//     ofType(GET_PRODUCT_DETAILS_SUMMARY_LOADING),
//     mergeMap(data => {
//       const productDetailsState = store.getState().productDetailsState

//       return http(getProductDetailsSummary$(data.sku)).pipe(
//         map(result => {
//           return getProductDetailSummarySuccess(productDetailsState, result, data.values)
//         }),
//         catchError(error => {
//           return of(getProductDetailSummaryFailure(productDetailsState, error))
//         })
//       )
//     })
//   )
// }
