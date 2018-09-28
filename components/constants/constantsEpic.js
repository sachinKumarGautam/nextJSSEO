import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  FETCH_CONSTANTS_LOADING
} from './constantsActionTypes'

import {
  fetchConstantsSuccess,
  fetchConstantsFailure
} from './constantsAction'

import {
  getConstants$
} from '../../services/api'

export function getConstantsEpic (action$, store) {
  return action$.pipe(
    ofType(FETCH_CONSTANTS_LOADING),
    mergeMap(data => {
      return http(getConstants$()).pipe(
        map(result => {
          return fetchConstantsSuccess(data.constantsState, result)
        }),
        catchError(error => {
          return of(fetchConstantsFailure(data.constantsState, error))
        })
      )
    })
  )
}
