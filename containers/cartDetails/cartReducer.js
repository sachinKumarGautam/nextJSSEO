import initialState from './cartModal'

import * as cartActionTypes from './cartActionTypes'

export default function cartReducer (state = initialState, action) {
  switch (action.type) {
    case cartActionTypes.GET_ANONYMOUS_CART_ID_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          error: action.error,
          isError: action.isError
        }
      }

    case cartActionTypes.GET_ANONYMOUS_CART_ID_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        payload: {
          ...state.payload,
          id: action.id,
          uid: action.uid,
          patient_id: {
            ...state.payload.patient_id,
            payload: action.patient_id
          },
          cart_items: {
            ...state.payload.cart_items,
            payload: action.cart_items
          },
          cart_prescriptions: action.cart_prescriptions,
          is_doctor_callback: {
            ...state.payload.is_doctor_callback,
            payload: action.is_doctor_callback
          },
          source_type: action.source_type,
          facility_code: action.facility_code
        }
      }

    case cartActionTypes.GET_ANONYMOUS_CART_ID_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case cartActionTypes.GET_CART_DETAILS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError
        }
      }

    case cartActionTypes.GET_CART_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        payload: {
          ...state.payload,
          id: action.id,
          uid: action.uid,
          patient_id: {
            ...state.payload.patient_id,
            payload: action.patient_id
          },
          customer_id: action.customer_id,
          customer_full_name: action.customer_full_name,
          patient_full_name: action.patient_full_name,
          discount: action.discount,
          redeemed_care_points: action.redeemed_care_points,
          redeemable_care_points: action.redeemable_care_points,
          total_mrp: action.total_mrp,
          total_sale_price: action.total_sale_price,
          total_tax_amount: action.total_tax_amount,
          facility_code: action.facility_code,
          status: action.status,
          source: action.source,
          cart_items: {
            ...state.payload.cart_items,
            payload: action.cart_items
          },
          cart_prescriptions: action.cart_prescriptions,
          source_type: action.source_type,
          delivery_option: action.delivery_option,
          service_type: action.service_type
        }
      }

    case cartActionTypes.GET_CART_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case cartActionTypes.INCREMENT_CART_ITEM_LOADING:
      return state

    case cartActionTypes.DECREMENT_CART_ITEM_LOADING:
      return state

    case cartActionTypes.DELETE_CART_ITEM_LOADING:
      return state

    case cartActionTypes.PUT_CART_ITEM_SUCCESS:
      return {
        ...state,
        payload: {
          ...state.payload,
          cart_items: {
            ...state.payload.cart_items,
            payload: action.cart_items
          },
          discount: action.discount,
          redeemed_care_points: action.redeemed_care_points,
          redeemable_care_points: action.redeemable_care_points,
          total_mrp: action.total_mrp,
          total_sale_price: action.total_sale_price,
          total_tax_amount: action.total_tax_amount
        }
      }

    case cartActionTypes.PUT_CART_ITEM_FAILURE:
      return {
        ...state,
        payload: {
          ...state.payload,
          cart_items: {
            ...state.payload.cart_items,
            payload: action.cartItems
          }
        }
      }

    case cartActionTypes.SAVE_PATIENT_TO_CART_LOADING:
      return {
        ...state,
        payload: {
          ...state.payload,
          patient_id: {
            ...state.payload.patient_id,
            isLoading: action.isLoading,
            errorState: {
              ...state.payload.patient_id.errorState,
              isError: action.isError,
              error: action.error
            }
          }
        }
      }

    case cartActionTypes.SAVE_PATIENT_TO_CART_SUCCESS:
      return {
        ...state,
        payload: {
          ...state.payload,
          patient_id: {
            ...state.payload.patient_id,
            isLoading: action.isLoading,
            payload: action.patient_id
          }
        }
      }

    case cartActionTypes.SAVE_PATIENT_TO_CART_FAILURE:
      return {
        ...state,
        payload: {
          ...state.payload,
          patient_id: {
            ...state.payload.patient_id,
            isLoading: action.isLoading,
            errorState: {
              ...state.payload.patient_id.errorState,
              isError: action.isError,
              error: action.error
            }
          }
        }
      }

    case cartActionTypes.SAVE_DELIVERY_ADDRESS_TO_CART_LOADING:
      return {
        ...state,
        payload: {
          ...state.payload,
          shipping_address_id: {
            ...state.payload.shipping_address_id,
            isLoading: action.isLoading,
            errorState: {
              ...state.payload.shipping_address_id.errorState,
              isError: action.isError,
              error: action.error
            }
          }
        }
      }

    case cartActionTypes.SAVE_DELIVERY_ADDRESS_TO_CART_SUCCESS:
      return {
        ...state,
        payload: {
          ...state.payload,
          shipping_address_id: {
            ...state.payload.shipping_address_id,
            isLoading: action.isLoading,
            payload: action.shipping_address_id
          }
        }
      }

    case cartActionTypes.SAVE_DELIVERY_ADDRESS_TO_CART_FAILURE:
      return {
        ...state,
        payload: {
          ...state.payload,
          shipping_address_id: {
            ...state.payload.shipping_address_id,
            isLoading: action.isLoading,
            errorState: {
              ...state.payload.shipping_address_id.errorState,
              isError: action.isError,
              error: action.error
            }
          }
        }
      }

    case cartActionTypes.CART_TRANSFER_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case cartActionTypes.CART_TRANSFER_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        payload: {
          ...state.payload,
          id: action.id,
          uid: action.uid,
          customer_id: action.customer_id,
          customer_first_name: action.customer_first_name,
          customer_last_name: action.customer_last_name,
          facility_code: action.facility_code,
          status: action.status,
          source: action.source,
          cart_items: {
            ...state.payload.cart_items,
            payload: action.cart_items
          },
          cart_prescriptions: action.cart_prescriptions,
          is_cart_transfered: action.is_cart_transfered,
          source_type: action.source_type,
          is_doctor_callback: {
            ...state.payload.is_doctor_callback,
            payload: action.doctor_callback
          }
        }
      }

    case cartActionTypes.CART_TRANSFER_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case cartActionTypes.UPDATE_IS_CART_OPEN_LOGIN_FLAG:
      return {
        ...state,
        isCartOpenLoginDialog: action.isCartOpenLoginDialog
      }

    case cartActionTypes.UPDATE_IS_CART_OPEN_REGISTER_MODAL_FLAG:
      return {
        ...state,
        isCartOpenRegisterDialog: action.isCartOpenRegisterDialog
      }

    case cartActionTypes.UPLOAD_PRESCRIPTION_LOADING:
      return state

    case cartActionTypes.UPLOAD_PRESCRIPTION_SUCCESS:
      return {
        ...state,
        prescriptionDetails: {
          ...state.prescriptionDetails,
          isLoading: action.isLoading,
          cartPrescriptionList: action.uploadedFiles
        },
        payload: {
          ...state.payload,
          cart_prescriptions: action.cart_prescriptions
        }
      }

    case cartActionTypes.UPLOAD_PRESCRIPTION_FAILURE:
      return {
        ...state,
        prescriptionDetails: {
          ...state.prescriptionDetails,
          isLoading: action.isLoading,
          errorState: {
            ...state.prescriptionDetails.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    case cartActionTypes.DELETE_PRESCRIPTION_LOADING:
      return {
        ...state,
        prescriptionDetails: {
          ...state.prescriptionDetails,
          isLoading: action.isLoading,
          errorState: {
            ...state.prescriptionDetails.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    case cartActionTypes.DELETE_PRESCRIPTION_SUCCESS:
      return {
        ...state,
        prescriptionDetails: {
          ...state.prescriptionDetails,
          isLoading: action.isLoading,
          cartPrescriptionList: action.uploadedFiles
        },
        payload: {
          ...state.payload,
          cart_prescriptions: action.cart_prescriptions
        }
      }

    case cartActionTypes.DELETE_PRESCRIPTION_FAILURE:
      return {
        ...state,
        prescriptionDetails: {
          ...state.prescriptionDetails,
          isLoading: action.isLoading,
          errorState: {
            ...state.prescriptionDetails.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    case cartActionTypes.SUBMIT_ORDER_LOADING:
      return {
        ...state,
        orderResponse: {
          ...state.orderResponse,
          isLoading: action.isLoading,
          errorState: {
            ...state.orderResponse.errorState,
            isError: action.isError
          }
        }
      }

    case cartActionTypes.SUBMIT_ORDER_SUCCESS:
      return {
        ...state,
        orderResponse: {
          ...state.orderResponse,
          order_number: action.order_number,
          isLoading: action.isLoading,
          service_type: action.service_type,
          delivery_option: action.delivery_option,
          doctor_callback: action.doctor_callback,
          order_prescriptions: action.order_prescriptions
        }
      }

    case cartActionTypes.SUBMIT_ORDER_FAILURE:
      return {
        ...state,
        orderResponse: {
          ...state.orderResponse,
          isLoading: action.isLoading,
          errorState: {
            ...state.orderResponse.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    case cartActionTypes.RESET_CART_STATE:
      return initialState

    case cartActionTypes.GO_TO_CART_SNACKBAR:
      return {
        ...state,
        payload: {
          ...state.payload,
          showAddToCartSnackBar: action.showAddToCartSnackBar
        }
      }

    case cartActionTypes.SUBMIT_COUPON_CODE_LOADING:
      return {
        ...state,
        couponDetail: {
          ...state.couponDetail,
          isLoading: action.isLoading,
          errorState: {
            ...state.couponDetail.errorState,
            isError: action.isError,
          }
        }
      }

    case cartActionTypes.SUBMIT_COUPON_CODE_SUCCESS:
      return {
        ...state,
        couponDetail: {
          ...state.couponDetail,
          payload: action.payload,
          isLoading: action.isLoading,
        }
      }

    case cartActionTypes.SUBMIT_COUPON_CODE_FAILURE:
      return {
        ...state,
        couponDetail: {
          ...state.couponDetail,
          isLoading: action.isLoading,
          errorState: {
            ...state.couponDetail.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    case cartActionTypes.UPDATE_COUPON_CODE_VALUE:
      return {
        ...state,
        couponDetail: {
          ...state.couponDetail,
          couponCode: action.value
        }
      }

    default:
      return state
  }
}
