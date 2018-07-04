import initialState from './patientDetailsModal'

import {
  GET_PATIENT_DETAILS_LIST_LOADING,
  GET_PATIENT_DETAILS_LIST_SUCCESS,
  GET_PATIENT_DETAILS_LIST_FAILURE,
  SAVE_PATIENT_SELECTED
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

    default:
      return state
  }
}
