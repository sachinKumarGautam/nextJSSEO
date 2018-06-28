import {
  GET_RELATED_MEDICINES_LOADING,
  GET_RELATED_MEDICINES_SUCCESS,
  GET_RELATED_MEDICINES_FAILURE
} from './medicineListActionTypes'

export function getRelatedMedicinesLoading (medicineState, saltName, page, size) {
  return {
    type: GET_RELATED_MEDICINES_LOADING,
    medicineState,
    isLoading: true,
    isError: false,
    error: {},
    saltName: saltName,
    page: page,
    size: size
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
