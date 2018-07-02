import {
  GET_DELIVERY_DETAILS_LIST_LOADING,
  GET_DELIVERY_DETAILS_LIST_SUCCESS,
  GET_DELIVERY_DETAILS_LIST_FAILURE,
  SAVE_ADDRESS_SELECTED
} from './deliveryDetailsActionTypes'

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

export function getDeliveryDetailsListSuccess (deliveryDetailsState, result) {
  return {
    type: GET_DELIVERY_DETAILS_LIST_SUCCESS,
    deliveryDetailsState,
    isLoading: false,
    deliveryDetailsList: result
  }
}

export function getDeliveryDetailsListFailure (deliveryDetailsState, error) {
  return {
    type: GET_DELIVERY_DETAILS_LIST_FAILURE,
    deliveryDetailsState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function saveAddressSelected (deliveryDetailsState, addressIdSelected) {
  return {
    type: SAVE_ADDRESS_SELECTED,
    deliveryDetailsState,
    addressIdSelected: addressIdSelected
  }
}
