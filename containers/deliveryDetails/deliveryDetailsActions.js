import {
  GET_DELIVERY_DETAILS_LIST_LOADING,
  GET_DELIVERY_DETAILS_LIST_SUCCESS,
  GET_DELIVERY_DETAILS_LIST_FAILURE,
  SAVE_ADDRESS_SELECTED,
  SUBMIT_DELIVERY_DETAILS_LOADING,
  SUBMIT_DELIVERY_DETAILS_SUCCESS,
  SUBMIT_DELIVERY_DETAILS_FAILURE,
  CHECK_PINCODE_DETAIL_LOADING,
  CHECK_PINCODE_DETAIL_SUCCESS,
  CHECK_PINCODE_DETAIL_FAILURE,
  UPDATE_ADDRESS_FORM_VALUE
} from './deliveryDetailsActionTypes'

/**
 * Represents to the loading state to get the delivery details according to the customer id.
 * @param {object} deliveryDetailsState - The object maintained for payload, loading and error state.
 * @param {number} customerId - The value of the customer id according to which list will occur
 */
export function getDeliveryDetailsListLoading (deliveryDetailsState, customerId) {
  return {
    type: GET_DELIVERY_DETAILS_LIST_LOADING,
    deliveryDetailsState,
    isLoading: true,
    isError: false,
    error: {},
    customerId: customerId
  }
}

/**
 * Represents to the success state to get the delivery details.
 * @param {object} deliveryDetailsState - The object maintained for payload, loading and error state.
 * @param {array} result - The result obtained from the API response
 */
export function getDeliveryDetailsListSuccess (deliveryDetailsState, result) {
  return {
    type: GET_DELIVERY_DETAILS_LIST_SUCCESS,
    deliveryDetailsState,
    isLoading: false,
    deliveryDetailsList: result
  }
}

/**
 * Represents to the error state to get the delivery details.
 * @param {object} deliveryDetailsState - The object maintained for payload, loading and error state.
 * @param {object} error - The error details when API throws an error
 */
export function getDeliveryDetailsListFailure (deliveryDetailsState, error) {
  return {
    type: GET_DELIVERY_DETAILS_LIST_FAILURE,
    deliveryDetailsState,
    isLoading: false,
    isError: true,
    error: error
  }
}

/**
 * Represents to the save selected addressId
 * @param {object} patientDetailsState - The object maintained for payload, loading and error state.
 * @param {number} patientIdSelected - The value of the selected addressId
 */
export function saveAddressSelected (deliveryDetailsState, addressIdSelected) {
  return {
    type: SAVE_ADDRESS_SELECTED,
    deliveryDetailsState,
    addressIdSelected: addressIdSelected
  }
}

export function submitDeliveryDetailsLoading (
  deliveryDetailsState,
  deliveryDetails,
  customerId,
  setSubmitting,
  closeModal,
  values
) {
  return {
    type: SUBMIT_DELIVERY_DETAILS_LOADING,
    deliveryDetailsState,
    deliveryDetails,
    customerId,
    setSubmitting,
    closeModal,
    values,
    isLoading: true,
    error: null,
    isError: false
  }
}

export function submitDeliveryDetailsSuccess (deliveryDetailsState, result) {
  return {
    type: SUBMIT_DELIVERY_DETAILS_SUCCESS,
    deliveryDetailsState,
    isLoading: true
  }
}

export function submitDeliveryDetailsFailure (deliveryDetailsState, error) {
  return {
    type: SUBMIT_DELIVERY_DETAILS_FAILURE,
    deliveryDetailsState,
    isLoading: false,
    error: error,
    isError: true
  }
}

export function checkPincodeDetailLoading (deliveryDetailsState, pincode, updateAddressFormValue) {
  return {
    type: CHECK_PINCODE_DETAIL_LOADING,
    deliveryDetailsState,
    pincode,
    isLoading: true,
    error: null,
    isError: false
  }
}

export function checkPincodeDetailSuccess (deliveryDetailsState, result) {
  return {
    type: CHECK_PINCODE_DETAIL_SUCCESS,
    deliveryDetailsState,
    payload: result,
    isLoading: true
  }
}

export function checkPincodeDetailFailure (deliveryDetailsState, error) {
  return {
    type: CHECK_PINCODE_DETAIL_FAILURE,
    deliveryDetailsState,
    isLoading: false,
    error: error,
    isError: true
  }
}

export function updateAddressFormValue (deliveryDetailsState, state, city) {
  return {
    type: UPDATE_ADDRESS_FORM_VALUE,
    deliveryDetailsState,
    state,
    city
  }
}
