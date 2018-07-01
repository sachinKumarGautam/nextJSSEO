import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import ajax from 'universal-rx-request' // because standard AjaxObservable only works in browser
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  GET_RELATED_MEDICINES_LOADING
} from './medicineListActionTypes'

import {
  getRelatedMedicinesSuccess,
  getRelatedMedicinesFailure
} from './medicineListActions'

import {
  getMedicineList$
} from '../../services/api'

/**
 * Represents to the epic of get medicine list.
 * @param {object} action$ - this is the ActionsObservable
 * @param {object} store - to access the state from reducers
 */
export function getRelatedMedicines (action$, store) {
  return action$.pipe(
    ofType(GET_RELATED_MEDICINES_LOADING),
    mergeMap(data => {
      return http(getMedicineList$(data.saltName, data.page, data.size)).pipe(
        map(result => {
          let modifiedResponse =
            [...data.medicineState.payload, ...result.body.payload.content]
          return getRelatedMedicinesSuccess(
            data.moleculeState,
            modifiedResponse
          )
        }),
        catchError(error => {
          return of(getRelatedMedicinesFailure(data.moleculeState, error))
        })
      )
    })
  )
}
