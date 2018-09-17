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
      const medicineListState = store.getState().medicineListState
      return http(getMedicineList$(data.saltName, data.page, data.size)).pipe(
        map(result => {
          const totalPages = result.body.payload.totalPages
          const medicineListState = store.getState().medicineListState
          let modifiedResponse = [
            ...medicineListState.payload,
            ...result.body.payload.content
          ]

          return getRelatedMedicinesSuccess(medicineListState, modifiedResponse, totalPages)
        }),
        catchError(error => {
          return of(getRelatedMedicinesFailure(medicineListState, error))
        })
      )
    })
  )
}
