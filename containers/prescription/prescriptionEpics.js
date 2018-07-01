import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import ajax from 'universal-rx-request' // because standard AjaxObservable only works in browser
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  GET_PRESCRIPTION_LIST_LOADING
} from './prescriptionActionTypes'

import {
  getPrescriptionListSuccess,
  getPrescriptionListFailure
} from './prescriptionActions'

import {
  getPrescriptionList$
} from '../../services/api'

/**
 * Represents to the epic of get medicine list.
 * @param {object} action$ - this is the ActionsObservable
 * @param {object} store - to access the state from reducers
 */
export function getPrescriptionList (action$, store) {
  return action$.pipe(
    ofType(GET_PRESCRIPTION_LIST_LOADING),
    mergeMap(data => {
      return http(getPrescriptionList$(data.customerId)).pipe(
        map(result => {
          return getPrescriptionListSuccess(
            data.prescriptionState,
            result.body.payload.content
          )
        }),
        catchError(error => {
          return of(getPrescriptionListFailure(data.prescriptionState, error))
        })
      )
    })
  )
}
