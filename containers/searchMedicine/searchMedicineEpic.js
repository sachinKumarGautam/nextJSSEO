import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import { SEARCH_MEDICINE_LOADING } from './searchMedicineActionTypes'
import {
  searchMedicineSuccess,
  searchMedicineFailure
} from './searchMedicineAction'
import { searchMedicine$ } from '../../services/api/index'
/**
 * Represents to the epic of get molecule detail/summary
 * @param {object} action$ - this is the ActionsObservable
 * @param {object} store - to access the state from reducers
 */
export function searchMedicine (action$, store) {
  return action$.pipe(
    ofType(SEARCH_MEDICINE_LOADING),
    mergeMap(data => {
      const searchMedicineState = store.getState().searchMedicineState
      return http(searchMedicine$(data.value, data.facilityId)).pipe(
        map(result => {
          return searchMedicineSuccess(searchMedicineState, result)
        }),
        catchError(error => {
          return of(searchMedicineFailure(searchMedicineState, error))
        })
      )
    })
  )
}
