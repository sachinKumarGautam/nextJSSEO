import initialState from './deliveryDetailsModal'

import {
  GET_DELIVERY_DETAILS_LIST_LOADING,
  GET_DELIVERY_DETAILS_LIST_SUCCESS,
  GET_DELIVERY_DETAILS_LIST_FAILURE,
  SAVE_ADDRESS_SELECTED
} from './deliveryDetailsActionTypes'

export default function deliveryDetailsReducer (state = initialState, action) {
  switch (action.type) {
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

    case GET_DELIVERY_DETAILS_LIST_SUCCESS:
      return {
        ...state,
        payload: action.deliveryDetailsList,
        isLoading: action.isLoading
      }

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

    case SAVE_ADDRESS_SELECTED:
      return {
        ...state,
        addressIdSelected: action.addressIdSelected
      }

    default:
      return state
  }
}
