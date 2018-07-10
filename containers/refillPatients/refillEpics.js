import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  GET_PAST_MEDICINES_LOADING
} from './refillActionTypes'

import {
  getRefillPastMedicinesSuccess,
  getRefillPastMedicinesFailure
} from './refillActions'

import {
  getPatientPastMedicineList$
} from '../../services/api'

/**
 * Represents to the epic of get patient's past medicines
 * @param {object} action$ - this is the ActionsObservable
 * @param {object} store - to access the state from reducers
 */
export function getPatientPastMedicineList (action$, store) {
  return action$.pipe(
    ofType(GET_PAST_MEDICINES_LOADING),
    mergeMap(data => {
      const facilityCode = store.getState().cartState.payload.facility_code

      return http(getPatientPastMedicineList$(data.patientId, facilityCode)).pipe(
        map(result => {
          return getRefillPastMedicinesSuccess(data.pastMedicineState, result.body.payload)
        }),
        catchError(error => {
          return of(getRefillPastMedicinesFailure(data.pastMedicineState, error))
        })
      )
    })
  )
}
