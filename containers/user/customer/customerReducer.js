import initialState from './customerModal'

import {
  CUSTOMER_REGISTER_LOADING,
  CUSTOMER_REGISTER_SUCCESS,
  CUSTOMER_REGISTER_FAILURE,
  UPDATE_PHONE_NUMBER,
  FETCH_USER_INFO_LOADING,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAILURE
} from './customerActionTypes'

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_INFO_LOADING:
      return {
        ...state,
        isLoadingFetchCustomerDetails: action.isLoading,
        errorStateFetchCustomerDetails: {
          ...state.errorStateFetchCustomerDetails,
          isError: action.isError,
          error: action.error
        }
      }

    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoadingFetchCustomerDetails: action.isLoading,
        payload: {
          ...state.payload,
          id: action.id,
          full_name: action.full_name,
          gender: action.gender,
          age: action.age,
          referral_code: action.referral_code,
          default_location: action.default_location,
          reference_code: action.reference_code,
          membership_code: action.membership_code,
          mobile: action.mobile,
          email: action.email
        }
      }

    case FETCH_USER_INFO_FAILURE:
      return {
        ...state,
        isLoadingFetchCustomerDetails: action.isLoading,
        errorStateFetchCustomerDetails: {
          ...state.errorStateFetchCustomerDetails,
          isError: action.isError,
          error: action.error
        }
      }

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
