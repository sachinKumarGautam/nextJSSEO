import initialState from './deliveryDetailsModal'

import {
  GET_DELIVERY_DETAILS_LIST_LOADING,
  GET_DELIVERY_DETAILS_LIST_SUCCESS,
  GET_DELIVERY_DETAILS_LIST_FAILURE,
  SAVE_ADDRESS_SELECTED,
  CHECK_PINCODE_DETAIL_LOADING,
  CHECK_PINCODE_DETAIL_SUCCESS,
  CHECK_PINCODE_DETAIL_FAILURE,
  UPDATE_ADDRESS_FORM_VALUE
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
        addressIdSelected: action.addressIdSelected
      }

    // pincode check loading
    case CHECK_PINCODE_DETAIL_LOADING:
      return {
        ...state,
        pincodeCheck: {
          ...state.pincodeCheck,
          isLoading: action.isLoading,
          errorState: {
            ...state.pincodeCheck.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    // pincode check sucess
    case CHECK_PINCODE_DETAIL_SUCCESS:
      return {
        ...state,
        pincodeCheck: {
          ...state.pincodeCheck,
          payload: action.payload,
          isLoading: action.isLoading
        }
      }

    // pincode check failure
    case CHECK_PINCODE_DETAIL_FAILURE:
      return {
        ...state,
        pincodeCheck: {
          ...state.pincodeCheck,
          isLoading: action.isLoading,
          errorState: {
            ...state.pincodeCheck.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    // address form value update
    case UPDATE_ADDRESS_FORM_VALUE:
      return {
        ...state,
        addressForm: {
          ...state.addressForm,
          state: action.state,
          city: action.city
        }
      }

    default:
      return state
  }
}
