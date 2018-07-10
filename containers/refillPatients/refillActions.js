import {
  GET_PAST_MEDICINES_LOADING,
  GET_PAST_MEDICINES_SUCCESS,
  GET_PAST_MEDICINES_FAILURE
} from './refillActionTypes'

export function getRefillPastMedicinesLoading (pastMedicineState, patientId) {
  return {
    type: GET_PAST_MEDICINES_LOADING,
    pastMedicineState,
    patientId: patientId,
    isLoading: true,
    isError: false,
    error: {}
  }
}

export function getRefillPastMedicinesSuccess (pastMedicineState, result) {
  return {
    type: GET_PAST_MEDICINES_SUCCESS,
    pastMedicineState,
    payload: result,
    isLoading: false
  }
}

export function getRefillPastMedicinesFailure (pastMedicineState, error) {
  return {
    type: GET_PAST_MEDICINES_FAILURE,
    pastMedicineState,
    isLoading: false,
    isError: true,
    error: error
  }
}
