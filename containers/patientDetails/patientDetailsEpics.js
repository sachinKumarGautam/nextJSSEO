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
  getRefillPastMedicinesLoading,
  updateSelectedPatientDetails
} from '../refillPatients/refillActions'

import {
  savePatientToCartLoading
} from '../cartDetails/cartActions'

import {
  getPatientDetailsList$,
  submitPatientDetails$,
  editPatientDetails$
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
      const pastMedicineState = store.getState().pastMedicineState

      return http(getPatientDetailsList$(data.customerId)).pipe(
        flatMap(result => {
          if (data.isRefillPatients) {
            return of(
              getPatientDetailsListSuccess(data.patientDetailsState, result.body.payload.patients),
              getRefillPastMedicinesLoading(pastMedicineState, result.body.payload.patients[0].id),
              updateSelectedPatientDetails(
                pastMedicineState,
                result.body.payload.patients[0].id,
                result.body.payload.patients[0].full_name
              )
            )
          } else {
            return of(getPatientDetailsListSuccess(data.patientDetailsState, result.body.payload.patients))
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
      const patientDetailsState = store.getState().patientDetailsState
      const cartState = store.getState().cartState
      const customerId = store.getState().customerState.payload.id
      let api

      if (data.isEdit) {
        api = editPatientDetails$(data.customerId, data.values, data.patientDetailsState.patient.id)
      } else {
        api = submitPatientDetails$(data.customerId, data.values)
      }

      return http(api).pipe(
        flatMap(result => {
          data.setSubmitting(false)
          data.closeModal()

          if (data.isCartPage) {
            return of(
              submitPatientDetailsSuccess(data.patientDetailsState, result),
              savePatientToCartLoading(cartState, result.body.payload, cartState.payload.uid),
              getPatientDetailsListLoading(patientDetailsState, customerId)
            )
          } else {
            return of(
              submitPatientDetailsSuccess(data.patientDetailsState, result),
              getPatientDetailsListLoading(patientDetailsState, customerId)
            )
          }
        }),
        catchError(error => {
          data.setSubmitting(false)
          return of(submitPatientDetailsFailure(data.patientDetailsState, error))
        })
      )
    })
  )
}
