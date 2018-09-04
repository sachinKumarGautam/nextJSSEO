import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import { GET_RELATED_MEDICINES_LOADING } from './medicineListActionTypes'

import {
  getRelatedMedicinesSuccess,
  getRelatedMedicinesFailure
} from './medicineListActions'

import { getMedicineList$ } from '../../services/api'

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
          const medicineListState = store.getState().medicineListState
          console.log(medicineListState)
          let modifiedResponse = [
            ...medicineListState.payload,
            ...result.body.payload.content
          ]

          return getRelatedMedicinesSuccess(medicineListState, modifiedResponse)
        }),
        catchError(error => {
          console.log('error', error)
          return of(getRelatedMedicinesFailure(medicineListState, error))
        })
      )
    })
  )
}
