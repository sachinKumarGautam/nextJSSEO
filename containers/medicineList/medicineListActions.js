import {
  GET_RELATED_MEDICINES_LOADING,
  GET_RELATED_MEDICINES_SUCCESS,
  GET_RELATED_MEDICINES_FAILURE
} from './medicineListActionTypes'

export function getRelatedMedicinesLoading (medicineState, saltId) {
  return {
    type: GET_RELATED_MEDICINES_LOADING,
    medicineState,
    isLoading: true,
    isError: false,
    error: {},
    saltId: saltId
  }
}

export function getRelatedMedicinesSuccess (medicineState, result) {
  return {
    type: GET_RELATED_MEDICINES_SUCCESS,
    medicineState,
    isLoading: false,
    payload: result
  }
}

export function getRelatedMedicinesFailure (medicineState, error) {
  return {
    type: GET_RELATED_MEDICINES_FAILURE,
    medicineState,
    isLoading: false,
    isError: true,
    error: error
  }
}
