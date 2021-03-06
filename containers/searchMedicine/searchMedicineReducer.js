import initialState from './searchMedicineModal'
import {
  SEARCH_MEDICINE_LOADING,
  SEARCH_MEDICINE_SUCCESS,
  SEARCH_MEDICINE_FAILURE,
  RESET_SEARCH_MEDICINE_STATE
} from './searchMedicineActionTypes'

export default function searchMedicineReducer (state = initialState, action) {
  switch (action.type) {
    // update ui to loading state when user type medicine name
    case SEARCH_MEDICINE_LOADING:
      return {
        ...state,
        payload: {
          ...state.payload,
          searchMedicineResult: action.payload
        },
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    // update ui with medicine search result from respective input
    case SEARCH_MEDICINE_SUCCESS:
      return {
        ...state,
        payload: {
          ...state.payload,
          searchMedicineResult: action.payload,
          totalPages: action.totalPages
        },
        isLoading: action.isLoading
      }

    // show user that error in finding medicine with that name
    case SEARCH_MEDICINE_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case RESET_SEARCH_MEDICINE_STATE:
      return {
        ...state,
        isLoading: initialState.isLoading,
        errorState: initialState.errorState
      }

    default:
      return state
  }
}
