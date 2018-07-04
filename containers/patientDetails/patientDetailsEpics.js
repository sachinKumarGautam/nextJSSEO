import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  GET_PATIENT_DETAILS_LIST_LOADING
} from './patientDetailsActionTypes'

import {
  getPatientDetailsListSuccess,
  getPatientDetailsListFailure
} from './patientDetailsActions'

import {
  getPatientDetailsList$
} from '../../services/api'

/**
 * Represents to the epic of get patient details
 * @param {object} action$ - this is the ActionsObservable
 * @param {object} store - to access the state from reducers
 */
export function getPatientDetailsList (action$, store) {
  return action$.pipe(
    ofType(GET_PATIENT_DETAILS_LIST_LOADING),
    mergeMap(data => {
      return http(getPatientDetailsList$(data.customerId)).pipe(
        map(result => {
          return getPatientDetailsListSuccess(data.patientDetailsState, result.body.payload.patients)
        }),
        catchError(error => {
          return of(getPatientDetailsListFailure(data.patientDetailsState, error))
        })
      )
    })
  )
}
