import {
  GET_PATIENT_DETAILS_LIST_LOADING,
  GET_PATIENT_DETAILS_LIST_SUCCESS,
  GET_PATIENT_DETAILS_LIST_FAILURE,
  SAVE_PATIENT_SELECTED,
  SUBMIT_PATIENT_LOADING,
  SUBMIT_PATIENT_SUCCESS,
  SUBMIT_PATIENT_FAILURE
} from './patientDetailsActionTypes'

/**
 * Represents to the loading state to get the patient details according to the customer id.
 * @param {object} patientDetailsState - The object maintained for payload, loading and error state.
 * @param {number} customerId - The value of the customer id according to which list will occur
 */
export function getPatientDetailsListLoading (
  patientDetailsState,
  customerId,
  isRefillPatients
) {
  return {
    type: GET_PATIENT_DETAILS_LIST_LOADING,
    patientDetailsState,
    customerId,
    isLoading: true,
    isError: false,
    error: {},
    isRefillPatients: isRefillPatients
  }
}

/**
 * Represents to the success state to get the patient details.
 * @param {object} patientDetailsState - The object maintained for payload, loading and error state.
 * @param {array} result - The result obtained from the API response
 */
export function getPatientDetailsListSuccess (patientDetailsState, result) {
  return {
    type: GET_PATIENT_DETAILS_LIST_SUCCESS,
    patientDetailsState,
    isLoading: false,
    patientDetailsList: result
  }
}

/**
 * Represents to the error state to get the patient details.
 * @param {object} patientDetailsState - The object maintained for payload, loading and error state.
 * @param {object} error - The error details when API throws an error
 */
export function getPatientDetailsListFailure (patientDetailsState, error) {
  return {
    type: GET_PATIENT_DETAILS_LIST_FAILURE,
    patientDetailsState,
    isLoading: false,
    isError: true,
    error: error
  }
}

/**
 * Represents to the save selected patientId
 * @param {object} patientDetailsState - The object maintained for payload, loading and error state.
 * @param {number} patientIdSelected - The value of the selected patientId
 */
export function savePatientSelected (patientDetailsState, patientIdSelected) {
  return {
    type: SAVE_PATIENT_SELECTED,
    patientDetailsState,
    patientIdSelected: patientIdSelected
  }
}

/**
 * Represents to the loading state to add new patient.
 * @param {object} patientDetailsState - The object maintained for payload, loading and error state.
 * @param {number} customerId - The value of the customer id according to which list will occur
 * @param {function} setSubmitting - The function return boolean so that user can submit form.
 * @param {function} closeLoginModal - The function to close the form modal.
 * @param {object} values - The object to save patient details.
 */
export function submitPatientDetailsLoading (
  patientDetailsState,
  customerId,
  setSubmitting,
  closeModal,
  values,
  isCartPage = false
) {
  return {
    type: SUBMIT_PATIENT_LOADING,
    patientDetailsState,
    isLoading: true,
    isError: false,
    error: {},
    customerId: customerId,
    closeModal,
    values: values,
    setSubmitting,
    isCartPage: isCartPage
  }
}

/**
 * Represents to the success state to add new patient.
 * @param {object} patientDetailsState - The object maintained for payload, loading and error state.
 * @param {array} result - The result obtained from the API response
 */
export function submitPatientDetailsSuccess (patientDetailsState, result) {
  return {
    type: SUBMIT_PATIENT_SUCCESS,
    patientDetailsState,
    isLoading: false,
    patientDetailsList: result
  }
}

/**
 * Represents to the error state to add new patient.
 * @param {object} patientDetailsState - The object maintained for payload, loading and error state.
 * @param {object} error - The error details when API throws an error
 */
export function submitPatientDetailsFailure (patientDetailsState, error) {
  return {
    type: SUBMIT_PATIENT_FAILURE,
    patientDetailsState,
    isLoading: false,
    isError: true,
    error: error
  }
}
