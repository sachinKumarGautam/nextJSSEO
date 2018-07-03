import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import ajax from 'universal-rx-request' // because standard AjaxObservable only works in browser
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  GET_CARE_POINT_DETAILS_LOADING
} from './carePointActionTypes'

import {
  getCarePointDetailsSuccess,
  getCarePointDetailsFailure
} from './carePointActions'

import {
  getCarePointsList$
} from '../../services/api'

/**
 * Represents the epic to get care point details.
 * @param {object} action$ - this is the ActionsObservable
 * @param {object} store - to access the state from reducers
 */
export function carePointsList (action$, store) {
  return action$.pipe(
    ofType(GET_CARE_POINT_DETAILS_LOADING),
    mergeMap(data => {
      return http(getCarePointsList$(data.customerId, data.cashType)).pipe(
        map(result => {
          return getCarePointDetailsSuccess(
            data.carePointState,
            result.body.payload
          )
        }),
        catchError(error => {
          return of(getCarePointDetailsFailure(data.carePointState, error))
        })
      )
    })
  )
}
