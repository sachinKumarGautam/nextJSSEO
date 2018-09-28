import initialState from './patientDetailsModal'

import {
  GET_PATIENT_DETAILS_LIST_LOADING,
  GET_PATIENT_DETAILS_LIST_SUCCESS,
  GET_PATIENT_DETAILS_LIST_FAILURE,
  SAVE_PATIENT_SELECTED,
  SUBMIT_PATIENT_LOADING,
  SUBMIT_PATIENT_SUCCESS,
  SUBMIT_PATIENT_FAILURE,
  RESET_PATIENT_SELECTED,
  RESET_PATIENT_FORM,
  UPDATE_PATIENT_FORM_VALUE,
  RESET_IS_EDIT_FLAG
} from './patientDetailsActionTypes'

export default function patientDetailsReducer (state = initialState, action) {
  switch (action.type) {
    // update loading details of patient details API
    case GET_PATIENT_DETAILS_LIST_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    // update loading details of patient details API
    case GET_PATIENT_DETAILS_LIST_SUCCESS:
      return {
        ...state,
        payload: action.patientDetailsList,
        isLoading: action.isLoading
      }

    // update loading details of patient details API
    case GET_PATIENT_DETAILS_LIST_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    // update selected patientId
    case SAVE_PATIENT_SELECTED:
      return {
        ...state,
        isEdit: action.isEdit,
        patient: action.patientDetail
      }

    // update loading details of add new patient API
    case SUBMIT_PATIENT_LOADING:
      return {
        ...state,
        addNewPatient: {
          ...state.addNewPatient,
          isLoading: action.isLoading,
          errorState: {
            ...state.addNewPatient.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    // update loading details of add new patient API
    case SUBMIT_PATIENT_SUCCESS:
      return {
        ...state,
        addNewPatient: {
          ...state.addNewPatient,
          payload: action.patientDetailsList,
          isLoading: action.isLoading
        },
        payload: action.modifiedPatientDetailsList
      }

    // update loading details of add new patient API
    case SUBMIT_PATIENT_FAILURE:
      return {
        ...state,
        addNewPatient: {
          ...state.addNewPatient,
          isLoading: action.isLoading,
          errorState: {
            ...state.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    case RESET_PATIENT_SELECTED:
      return {
        ...state,
        patient: initialState.patient
      }

    case RESET_PATIENT_FORM:
      return {
        ...state,
        addNewPatient: {
          ...state.addNewPatient,
          isLoading: initialState.isLoading,
          errorState: initialState.errorState
        }
      }

    case UPDATE_PATIENT_FORM_VALUE:
      return {
        ...state,
        patient: {
          ...state.patient,
          [action.name]: action.value
        }
      }

    case RESET_IS_EDIT_FLAG:
      return {
        ...state,
        isEdit: action.isEdit
      }

    default:
      return state
  }
}
