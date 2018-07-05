import initialState from './patientDetailsModal'

import {
  GET_PATIENT_DETAILS_LIST_LOADING,
  GET_PATIENT_DETAILS_LIST_SUCCESS,
  GET_PATIENT_DETAILS_LIST_FAILURE,
  SAVE_PATIENT_SELECTED,
  SUBMIT_PATIENT_LOADING,
  SUBMIT_PATIENT_SUCCESS,
  SUBMIT_PATIENT_FAILURE
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
        patientIdSelected: action.patientIdSelected
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
        }
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

    default:
      return state
  }
}
