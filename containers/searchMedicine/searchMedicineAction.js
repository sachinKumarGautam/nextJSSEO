import {
  SEARCH_MEDICINE_LOADING,
  SEARCH_MEDICINE_SUCCESS,
  SEARCH_MEDICINE_FAILURE,
  RESET_SEARCH_MEDICINE_STATE
} from './searchMedicineActionTypes'

/**
 * Represents to the loading state to get the medicine list according to the input medicine name.
 * @param {object} searchMedicineState - The object maintained for payload, loading and error state.
 */

export function searchMedicineLoading (
  searchMedicineState,
  facilityId,
  value,
  pageNumber,
  pageSize,
  isHeader = false
) {
  return {
    type: SEARCH_MEDICINE_LOADING,
    searchMedicineState,
    facilityId,
    value,
    pageNumber,
    pageSize,
    isLoading: true,
    isError: false,
    error: null,
    payload: !isHeader && pageNumber > 0
      ? searchMedicineState.payload.searchMedicineResult
      : []
  }
}

/**
 * @param {object} result - Search medicine results
 */

export function searchMedicineSuccess (searchMedicineState, result, totalPages) {
  return {
    type: SEARCH_MEDICINE_SUCCESS,
    searchMedicineState,
    payload: result,
    totalPages: totalPages,
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
    isError: true,
    error: error
  }
}

export function resetSearchMedicineState () {
  return {
    type: RESET_SEARCH_MEDICINE_STATE
  }
}
