import initialState from './patientDetailsModal'

import {
  GET_PATIENT_DETAILS_LIST_LOADING,
  GET_PATIENT_DETAILS_LIST_SUCCESS,
  GET_PATIENT_DETAILS_LIST_FAILURE
} from './patientDetailsActionTypes'

export default function patientDetailsReducer (state = initialState, action) {
  switch (action.type) {
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

    case GET_PATIENT_DETAILS_LIST_SUCCESS:
      return {
        ...state,
        payload: action.patientDetailsList,
        isLoading: action.isLoading
      }

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

    default:
      return state
  }
}
