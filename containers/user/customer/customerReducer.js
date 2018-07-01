import initialState from './customerModal'

import {
  CUSTOMER_REGISTER_LOADING,
  CUSTOMER_REGISTER_SUCCESS,
  CUSTOMER_REGISTER_FAILURE,
  UPDATE_PHONE_NUMBER
} from './customerActionTypes'

export default function (state = initialState, action) {
  switch (action.type) {
    case CUSTOMER_REGISTER_LOADING:
      return {
        ...state,
        isLoadingCustomerRegister: action.isLoading,
        errorStateCustomerRegister: {
          ...state.errorStateCustomerRegister,
          isError: action.isError,
          error: action.error
        }
      }

    case CUSTOMER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoadingCustomerRegister: action.isLoading,
        payload: {
          ...state.payload,
          id: action.id,
          full_name: action.id,
          default_patient_id: action.default_patient_id,
          gender: action.gender,
          membership_code: action.membership_code,
          memebership_type: action.memebership_type,
          referral_code: action.referral_code,
          reference_code: action.reference_code
        }
      }

    case CUSTOMER_REGISTER_FAILURE:
      return {
        ...state,
        isLoadingCustomerRegister: action.isLoading,
        errorStateCustomerRegister: {
          ...state.errorStateCustomerRegister,
          isError: action.isError,
          error: action.error
        }
      }

    case UPDATE_PHONE_NUMBER:
      return {
        ...state,
        payload: {
          ...state.payload,
          mobile: action.mobile
        }
      }

    default:
      return state
  }
}
