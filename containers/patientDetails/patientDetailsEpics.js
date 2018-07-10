import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, flatMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  GET_PATIENT_DETAILS_LIST_LOADING,
  SUBMIT_PATIENT_LOADING
} from './patientDetailsActionTypes'

import {
  getPatientDetailsListSuccess,
  getPatientDetailsListFailure,
  submitPatientDetailsSuccess,
  submitPatientDetailsFailure,
  getPatientDetailsListLoading
} from './patientDetailsActions'

import {
  getPatientDetailsList$, submitPatientDetails$
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
        flatMap(result => {
          if (data.isRefillPatients) {
            return of(
              getPatientDetailsListSuccess(data.patientDetailsState, result.body.payload.patients)
            )
          } else {
            return getPatientDetailsListSuccess(data.patientDetailsState, result.body.payload.patients)
          }
        }),
        catchError(error => {
          return of(getPatientDetailsListFailure(data.patientDetailsState, error))
        })
      )
    })
  )
}

export function submitPatient (action$, store) {
  return action$.pipe(
    ofType(SUBMIT_PATIENT_LOADING),
    mergeMap(data => {
      const patientDetailsState = store.getState().store
      const customerId = store.getState().customerState.payload.id
      return http(submitPatientDetails$(data.customerId, data.values)).pipe(
        flatMap(result => {
          data.setSubmitting(false)
          data.closeModal()
          return of(submitPatientDetailsSuccess(data.patientDetailsState, result),
            getPatientDetailsListLoading(patientDetailsState, customerId))
        }),
        catchError(error => {
          data.setSubmitting(false)
          return of(submitPatientDetailsFailure(data.patientDetailsState, error))
        })
      )
    })
  )
}
