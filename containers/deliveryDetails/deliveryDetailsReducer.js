import initialState from './deliveryDetailsModal'

import {
  GET_DELIVERY_DETAILS_LIST_LOADING,
  GET_DELIVERY_DETAILS_LIST_SUCCESS,
  GET_DELIVERY_DETAILS_LIST_FAILURE,
  SAVE_ADDRESS_SELECTED,
  UPDATE_ADDRESS_FORM_VALUE,
  GET_LOCALITY_LIST_LOADING,
  GET_LOCALITY_LIST_SUCCESS,
  GET_LOCALITY_LIST_FAILURE,
  RESET_DELIVERY_ADDRESS_SELECTED,
  SUBMIT_DELIVERY_DETAILS_SUCCESS
} from './deliveryDetailsActionTypes'

export default function deliveryDetailsReducer (state = initialState, action) {
  switch (action.type) {
    // update loading details of delivery details API
    case GET_DELIVERY_DETAILS_LIST_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    // update loading details of delivery details API
    case GET_DELIVERY_DETAILS_LIST_SUCCESS:
      return {
        ...state,
        payload: action.deliveryDetailsList,
        isLoading: action.isLoading
      }

    // update loading details of delivery details API
    case GET_DELIVERY_DETAILS_LIST_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    // update selected addressId
    case SAVE_ADDRESS_SELECTED:
      return {
        ...state,
        addressForm: {
          ...state.addressForm,
          id: action.deliveryDetail.id,
          full_name: action.deliveryDetail.full_name,
          mobile: action.deliveryDetail.mobile,
          pincode: action.deliveryDetail.pincode,
          locality: action.deliveryDetail.locality,
          street1: action.deliveryDetail.street1,
          street2: action.deliveryDetail.street2,
          city: action.deliveryDetail.city,
          state: action.deliveryDetail.state
        }
      }

    // address form value update
    case UPDATE_ADDRESS_FORM_VALUE:
      return {
        ...state,
        addressForm: {
          ...state.addressForm,
          [action.name]: action.value
        }
      }

    // locality detail list loading
    case GET_LOCALITY_LIST_LOADING:
      return {
        ...state,
        addressLocalityList: {
          ...state.addressLocalityList,
          isLoading: action.isLoading,
          errorState: {
            ...state.addressLocalityList.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    // locality detail list sucess
    case GET_LOCALITY_LIST_SUCCESS:
      return {
        ...state,
        addressLocalityList: {
          ...state.addressLocalityList,
          payload: action.payload,
          isLoading: action.isLoading
        }
      }

    // locality detail list failure
    case GET_LOCALITY_LIST_FAILURE:
      return {
        ...state,
        addressLocalityList: {
          ...state.addressLocalityList,
          isLoading: action.isLoading,
          errorState: {
            ...state.addressLocalityList.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    case RESET_DELIVERY_ADDRESS_SELECTED:
      return {
        ...state,
        addressForm: initialState.addressForm
      }

    case SUBMIT_DELIVERY_DETAILS_SUCCESS:
      return {
        ...state,
        payload: action.modifiedAddressDetailsList
      }

    default:
      return state
  }
}
