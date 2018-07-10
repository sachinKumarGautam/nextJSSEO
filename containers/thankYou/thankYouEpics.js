import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  SUBMIT_REFILL_DATE_LOADING
} from './thankYouActionTypes'

import {
  submitRefillDateSuccess,
  submitRefillDateFailure
} from './thankYouActions'

import {
  submitRefillDate$
} from '../../services/api'

/**
 * Represents to the epic of get medicine list.
 * @param {object} action$ - this is the ActionsObservable
 * @param {object} store - to access the state from reducers
 */
export function submitRefillDate (action$, store) {
  return action$.pipe(
    ofType(SUBMIT_REFILL_DATE_LOADING),
    mergeMap(data => {
      return http(submitRefillDate$(data.orderId, data.repeatDay)).pipe(
        map(result => {
          return submitRefillDateSuccess(
            data.thankYouState,
            result.body.payload
          )
        }),
        catchError(error => {
          return of(submitRefillDateFailure(data.thankYouState, error))
        })
      )
    })
  )
}
