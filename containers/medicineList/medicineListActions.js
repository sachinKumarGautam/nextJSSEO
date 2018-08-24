import {
  GET_RELATED_MEDICINES_LOADING,
  GET_RELATED_MEDICINES_SUCCESS,
  GET_RELATED_MEDICINES_FAILURE
} from './medicineListActionTypes'

/**
 * Represents to the loading state to get the medicine list according to the salt name.
 * @param {object} medicineState - The object maintained for payload, loading and error state.
 * @param {string} saltName - The value of the salt according to which list will occur
 * @param {number} page - The page number whose medicines to be shown
 * @param {number} size - The size of list per page
 */
export function getRelatedMedicinesLoading (medicineState, saltName, page, size, isShowMore) {
  return {
    type: GET_RELATED_MEDICINES_LOADING,
    medicineState,
    isLoading: true,
    isError: false,
    error: {},
    saltName: saltName,
    page: page,
    size: size,
    isShowMore: isShowMore
  }
}

/**
 * Represents to the success state to get the medicine list.
 * @param {object} medicineState - The object maintained for payload, loading and error state.
 * @param {array} result - The medicine list obtained from the API response
 */
export function getRelatedMedicinesSuccess (medicineState, result) {
  return {
    type: GET_RELATED_MEDICINES_SUCCESS,
    medicineState,
    isLoading: false,
    payload: result
  }
}

/**
 * Represents to the error state to get the medicine list.
 * @param {object} medicineState - The object maintained for payload, loading and error state.
 * @param {object} error - The error details when API throws an error
 */
export function getRelatedMedicinesFailure (medicineState, error) {
  return {
    type: GET_RELATED_MEDICINES_FAILURE,
    medicineState,
    isLoading: false,
    isError: true,
    error: error
  }
}
