import {SEARCH_MEDICINE_LOADING, SEARCH_MEDICINE_SUCCESS, SEARCH_MEDICINE_FAILURE} from './searchMedicineActionTypes'

/**
 * Represents to the loading state to get the medicine list according to the input medicine name.
 * @param {object} searchMedicineState - The object maintained for payload, loading and error state.
 */

export function searchMedicineLoading (searchMedicineState, value) {
  return {
    type: SEARCH_MEDICINE_LOADING,
    searchMedicineState,
    value,
    isLoading: true,
    isError: false,
    error: null
  }
}

/**
 * @param {object} result - Search medicine results
 */

export function searchMedicineSuccess (searchMedicineState, result) {
  return {
    type: SEARCH_MEDICINE_SUCCESS,
    searchMedicineState,
    payload: result.body.payload.content,
    isLoading: false
  }
}

/**
 * @param {object} error - error while searcing medicine
 */

export function searchMedicineFailure (searchMedicineState, error) {
  return {
    type: SEARCH_MEDICINE_FAILURE,
    searchMedicineState,
    isLoading: false,
    isError: error,
    error: error
  }
}
