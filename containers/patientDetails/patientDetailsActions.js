import {
  GET_PATIENT_DETAILS_LIST_LOADING,
  GET_PATIENT_DETAILS_LIST_SUCCESS,
  GET_PATIENT_DETAILS_LIST_FAILURE,
  SAVE_PATIENT_SELECTED
} from './patientDetailsActionTypes'

export function getPatientDetailsListLoading (patientDetailsState, customerId) {
  return {
    type: GET_PATIENT_DETAILS_LIST_LOADING,
    patientDetailsState,
    isLoading: true,
    isError: false,
    error: {},
    customerId: customerId
  }
}

export function getPatientDetailsListSuccess (patientDetailsState, result) {
  return {
    type: GET_PATIENT_DETAILS_LIST_SUCCESS,
    patientDetailsState,
    isLoading: false,
    patientDetailsList: result
  }
}

export function getPatientDetailsListFailure (patientDetailsState, error) {
  return {
    type: GET_PATIENT_DETAILS_LIST_FAILURE,
    patientDetailsState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function savePatientSelected (patientDetailsState, patientIdSelected) {
  return {
    type: SAVE_PATIENT_SELECTED,
    patientDetailsState,
    patientIdSelected: patientIdSelected
  }
}
