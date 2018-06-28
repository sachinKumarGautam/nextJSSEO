import initialState from './customerModal'

import {
  CUSTOMER_REGISTER_LOADING,
  CUSTOMER_REGISTER_SUCCESS,
  CUSTOMER_REGISTER_FAILURE
} from './customerActionTypes'

export default function (state = initialState, action) {
  switch (action.type) {
    case CUSTOMER_REGISTER_LOADING:
      return {
        ...state,
        isLoadingCustomerRegister: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case CUSTOMER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoadingCustomerRegister: action.isLoading,
        payload: {
          ...state.payload
        }
      }

    case CUSTOMER_REGISTER_FAILURE:
      return {
        ...state,
        isLoadingCustomerRegister: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    default:
      return state
  }
}
