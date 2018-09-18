import {
  GET_DELIVERY_DETAILS_LIST_LOADING,
  GET_DELIVERY_DETAILS_LIST_SUCCESS,
  GET_DELIVERY_DETAILS_LIST_FAILURE,
  SAVE_ADDRESS_SELECTED,
  SUBMIT_DELIVERY_DETAILS_LOADING,
  SUBMIT_DELIVERY_DETAILS_SUCCESS,
  SUBMIT_DELIVERY_DETAILS_FAILURE,
  UPDATE_ADDRESS_FORM_VALUE,
  GET_LOCALITY_LIST_LOADING,
  GET_LOCALITY_LIST_SUCCESS,
  GET_LOCALITY_LIST_FAILURE,
  RESET_DELIVERY_ADDRESS_SELECTED,
  RESET_DELIVERY_FORM
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
export function saveDeliveryAddressSelected (deliveryDetailsState, deliveryDetail) {
  return {
    type: SAVE_ADDRESS_SELECTED,
    deliveryDetailsState,
    deliveryDetail: deliveryDetail
  }
}

export function submitDeliveryDetailsLoading (
  deliveryDetailsState,
  deliveryDetails,
  customerId,
  setSubmitting,
  closeModal,
  values,
  isCartPage = false,
  isEdit = false
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
    isError: false,
    isCartPage: isCartPage,
    isEdit: isEdit
  }
}

export function submitDeliveryDetailsSuccess (
  deliveryDetailsState,
  modifiedAddressDetailsList
) {
  return {
    type: SUBMIT_DELIVERY_DETAILS_SUCCESS,
    deliveryDetailsState,
    isLoading: false,
    modifiedAddressDetailsList: modifiedAddressDetailsList
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

export function updateAddressFormValue (deliveryDetailsState, name, value) {
  return {
    type: UPDATE_ADDRESS_FORM_VALUE,
    deliveryDetailsState,
    name,
    value
  }
}

export function getLocalityDetailListLoading (
  deliveryDetailsState,
  pincode,
  state,
  city,
  queryString
) {
  return {
    type: GET_LOCALITY_LIST_LOADING,
    deliveryDetailsState,
    pincode,
    state,
    city,
    queryString,
    isLoading: true,
    error: null,
    isError: false
  }
}

export function getLocalityDetailListSuccess (deliveryDetailsState, result) {
  return {
    type: GET_LOCALITY_LIST_SUCCESS,
    deliveryDetailsState,
    payload: result,
    isLoading: true
  }
}

export function getLocalityDetailListFailure (deliveryDetailsState, error) {
  return {
    type: GET_LOCALITY_LIST_FAILURE,
    deliveryDetailsState,
    isLoading: false,
    error: error,
    isError: true
  }
}

export function resetDeliveryAddressSelected (deliveryDetailsState) {
  return {
    type: RESET_DELIVERY_ADDRESS_SELECTED,
    deliveryDetailsState
  }
}

export function resetErrorState () {
  return {
    type: RESET_DELIVERY_FORM
  }
}
