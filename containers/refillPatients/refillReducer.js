import initialState from './refillModal'

import {
  GET_PAST_MEDICINES_LOADING,
  GET_PAST_MEDICINES_SUCCESS,
  GET_PAST_MEDICINES_FAILURE,
  UPDATE_REFILL_PATIENT_DETAILS
} from './refillActionTypes'

export default function refillReducer (state = initialState, action) {
  switch (action.type) {
    case GET_PAST_MEDICINES_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case GET_PAST_MEDICINES_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        payload: action.payload
      }

    case GET_PAST_MEDICINES_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case UPDATE_REFILL_PATIENT_DETAILS:
      return {
        ...state,
        selectedPatientId: action.patientId,
        selectedPatientName: action.patientName,
        selectedPatient: action.patient
      }

    default:
      return state
  }
}
