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
          patient_details: {
            ...state.payload.patient_details,
            payload: {
              ...state.payload.patient_details.payload,
              patient_id: action.patient_id
            }
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
          available_delivery_option: action.available_delivery_option,
          uid: action.uid,
          patient_details: {
            ...state.payload.patient_details,
            payload: {
              ...state.payload.patient_details.payload,
              patient_id: action.patient_id,
              patient_full_name: action.patient_full_name
            }
          },
          shipping_address_details: {
            ...state.payload.shipping_address_details,
            payload: {
              ...state.payload.shipping_address_details.payload,
              shipping_address_id: action.shipping_address_id,
              shipping_address: action.shipping_address
            }
          },
          customer_id: action.customer_id,
          customer_full_name: action.customer_full_name,
          discount: action.discount,
          redeemed_care_points: action.redeemed_care_points,
          redeemable_care_points: action.redeemable_care_points,
          total_mrp: action.total_mrp,
          total_payable_amount: action.total_payable_amount,
          total_sale_price: action.total_sale_price,
          total_tax_amount: action.total_tax_amount,
          facility_code: action.facility_code,
          status: action.status,
          source: action.source,
          excessive_ordered_quantity: action.excessive_ordered_quantity,
          cart_items: {
            ...state.payload.cart_items,
            payload: action.cart_items
          },
          seller_detail: action.seller_detail,
          cart_prescriptions: action.cart_prescriptions,
          source_type: action.source_type,
          delivery_option: action.delivery_option,
          service_type: action.service_type,
          payment_channels: action.payment_channels,
          preferred_delivery_option: action.preferred_delivery_option
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
      return {
        ...state,
        payload: {
          ...state.payload,
          cart_items: {
            ...state.payload.cart_items,
            isLoading: action.isLoading
          }
        }
      }

    case cartActionTypes.DECREMENT_CART_ITEM_LOADING:
      return {
        ...state,
        payload: {
          ...state.payload,
          cart_items: {
            ...state.payload.cart_items,
            isLoading: action.isLoading
          }
        }
      }

    case cartActionTypes.DELETE_CART_ITEM_LOADING:
      return {
        ...state,
        payload: {
          ...state.payload,
          cart_items: {
            ...state.payload.cart_items,
            isLoading: action.isLoading
          }
        }
      }

    case cartActionTypes.PUT_CART_ITEM_SUCCESS:
      return {
        ...state,
        payload: {
          ...state.payload,
          cart_items: {
            ...state.payload.cart_items,
            payload: action.cart_items,
            isLoading: action.isLoading
          },
          discount: action.discount,
          payment_channels: action.payment_channels,
          redeemed_care_points: action.redeemed_care_points,
          redeemable_care_points: action.redeemable_care_points,
          total_mrp: action.total_mrp,
          total_payable_amount: action.total_payable_amount,
          total_sale_price: action.total_sale_price,
          total_tax_amount: action.total_tax_amount,
          excessive_ordered_quantity: action.excessive_ordered_quantity,
          seller_detail: action.seller_detail
        }
      }

    case cartActionTypes.PUT_CART_ITEM_FAILURE:
      return {
        ...state,
        payload: {
          ...state.payload,
          cart_items: {
            ...state.payload.cart_items,
            payload: action.cart_items,
            isLoading: action.isLoading,
            errorState: {
              ...state.payload.cart_items.errorState,
              isError: action.isError,
              error: action.error
            }
          }
        }
      }

    case cartActionTypes.RESET_SAVE_PATIENT_TO_CART_ERROR:
      return {
        ...state,
        payload: {
          ...state.payload,
          patient_details: {
            ...state.payload.patient_details,
            errorState: initialState.errorState
          }
        }
      }

    case cartActionTypes.SAVE_PATIENT_TO_CART_LOADING:
      return {
        ...state,
        payload: {
          ...state.payload,
          patient_details: {
            ...state.payload.patient_details,
            isLoading: action.isLoading,
            errorState: {
              ...state.payload.patient_details.errorState,
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
          payment_channels: action.payment_channels,
          seller_detail: action.seller_detail,
          patient_details: {
            ...state.payload.patient_details,
            isLoading: action.isLoading,
            payload: {
              ...state.payload.patient_details.payload,
              patient_id: action.patient_id,
              patient_full_name: action.patient_full_name,
              age: action.patient.age,
              gender: action.patient.gender,
              mobile: action.patient.mobile
            }
          }
        }
      }

    case cartActionTypes.SAVE_PATIENT_TO_CART_FAILURE:
      return {
        ...state,
        payload: {
          ...state.payload,
          patient_details: {
            ...state.payload.patient_details,
            isLoading: action.isLoading,
            errorState: {
              ...state.payload.patient_details.errorState,
              isError: action.isError,
              error: action.error
            }
          }
        }
      }

    case cartActionTypes.RESET_SAVE_DELIVERY_ADDRESS_TO_CART_ERROR:
      return {
        ...state,
        payload: {
          ...state.payload,
          shipping_address_details: {
            ...state.payload.shipping_address_details,
            errorState: initialState.errorState
          }
        }
      }

    case cartActionTypes.SAVE_DELIVERY_ADDRESS_TO_CART_LOADING:
      return {
        ...state,
        payload: {
          ...state.payload,
          shipping_address_details: {
            ...state.payload.shipping_address_details,
            isLoading: action.isLoading,
            errorState: {
              ...state.payload.shipping_address_details.errorState,
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
          cart_items: {
            ...state.payload.cart_items,
            payload: action.cart_items
          },
          discount: action.discount,
          payment_channels: action.payment_channels,
          redeemed_care_points: action.redeemed_care_points,
          redeemable_care_points: action.redeemable_care_points,
          total_mrp: action.total_mrp,
          total_payable_amount: action.total_payable_amount,
          total_sale_price: action.total_sale_price,
          total_tax_amount: action.total_tax_amount,
          seller_detail: action.seller_detail,
          available_delivery_option: action.available_delivery_option,
          preferred_delivery_option: action.preferred_delivery_option,
          delivery_option: action.delivery_option,
          service_type: action.service_type,
          urgent_delivery_charge: action.urgent_delivery_charge,
          shipping_address_details: {
            ...state.payload.shipping_address_details,
            isLoading: action.isLoading,
            payload: {
              ...state.payload.shipping_address_details.payload,
              shipping_address_id: action.shipping_address_id,
              shipping_address: action.shipping_address
            }
          }
        }
      }

    case cartActionTypes.SAVE_DELIVERY_ADDRESS_TO_CART_FAILURE:
      return {
        ...state,
        payload: {
          ...state.payload,
          shipping_address_details: {
            ...state.payload.shipping_address_details,
            isLoading: action.isLoading,
            errorState: {
              ...state.payload.shipping_address_details.errorState,
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
          payment_channels: action.payment_channels,
          customer_id: action.customer_id,
          patient_details: {
            ...state.payload.patient_details,
            payload: {
              ...state.payload.patient_details.payload,
              patient_id: action.patient_id,
              patient_full_name: action.patient_full_name
            }
          },
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
          seller_detail: action.seller_detail,
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

    case cartActionTypes.RESET_UPLOAD_PRESCRIPTION_ERROR:
      return {
        ...state,
        prescriptionDetails: {
          ...state.prescriptionDetails,
          errorState: {
            ...state.prescriptionDetails.errorState,
            isError: action.isError,
            error: action.error
          }
        },
        payload: {
          ...state.payload,
          is_doctor_callback: {
            ...state.payload.is_doctor_callback,
            isLoading: action.isLoading,
            errorState: {
              ...state.payload.is_doctor_callback.errorState,
              isError: action.isError,
              error: {}
            }
          }
        },
        expressDeliveryCheck: {
          ...state.expressDeliveryCheck,
          isLoading: action.isLoading,
          errorState: {
            ...state.expressDeliveryCheck.errorState,
            error: action.error,
            isError: action.isError
          }
        }
      }

    case cartActionTypes.UPLOAD_PRESCRIPTION_LOADING:
      return {
        ...state,
        prescriptionDetails: {
          ...state.prescriptionDetails,
          isLoading: action.isLoading,
          isHomePage: false
        }
      }

    case cartActionTypes.UPLOAD_PRESCRIPTION_SUCCESS:
      return {
        ...state,
        prescriptionDetails: {
          ...state.prescriptionDetails,
          isLoading: action.isLoading,
          cartPrescriptionList: action.uploadedFiles,
          isHomePage: action.isHomePage
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
          },
          isHomePage: false
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
        payment_gateway: action.payment_gateway,
        isOrderSubmitted: action.isOrderSubmitted,
        orderResponse: {
          ...state.orderResponse,
          isLoading: action.isLoading,
          payload: {
            ...state.orderResponse.payload,
            order_number: action.order_number,
            order_type: action.order_type,
            isLoading: action.isLoading,
            service_type: action.service_type,
            delivery_option: action.delivery_option,
            doctor_callback: action.doctor_callback,
            order_prescriptions: action.order_prescriptions,
            promised_delivery_date: action.promised_delivery_date,
            patient_id: action.patient_id,
            customer_id: action.customer_id,
            customer_full_name: action.customer_full_name,
            patient_full_name: action.patient_full_name,
            discount: action.discount,
            coupon_code: action.coupon_code,
            coupon_discount: action.coupon_discount,
            redeemed_care_points: action.redeemed_care_points,
            redeemable_care_points: action.redeemable_care_points,
            redeemed_cash: action.redeemed_cash,
            redeemable_cash: action.redeemable_cash,
            total_mrp: action.total_mrp,
            total_payable_amount: action.total_payable_amount,
            total_sale_price: action.total_sale_price,
            total_tax_amount: action.total_tax_amount,
            facility_code: action.facility_code,
            status: action.status,
            source: action.source,
            payment_confirmation_time: action.payment_confirmation_time,
            payment_cancellation_time: action.payment_cancellation_time,
            customer_care_number: action.customer_care_number,
            urgent_delivery_charge: action.urgent_delivery_charge
          }
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

    case cartActionTypes.RESET_CART_LOADING_STATE:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case cartActionTypes.RESET_CART_STATE:
      return {
        ...state,
        payload: initialState.payload,
        payment: initialState.payment,
        isOrderSubmitted: initialState.isOrderSubmitted
      }

    case cartActionTypes.GO_TO_CART_SNACKBAR:
      return {
        ...state,
        showAddToCartSnackBar: action.showAddToCartSnackBar,
        snackbarMsg: action.msg
      }

    case cartActionTypes.SUBMIT_COUPON_CODE_LOADING:
      return {
        ...state,
        couponDetail: {
          ...state.couponDetail,
          isLoading: action.isLoading,
          isCouponApplied: action.isCouponApplied,
          errorState: {
            ...state.couponDetail.errorState,
            isError: action.isError
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
          isCouponApplied: action.isCouponApplied,
          couponCode: action.payload.coupon_code
        },
        payload: {
          ...state.payload,
          coupon_code: action.coupon_code,
          coupon_discount: action.coupon_discount,
          cart_items: {
            ...state.payload.cart_items,
            payload: action.cart_items
          },
          total_payable_amount: action.total_payable_amount,
          total_sale_price: action.total_sale_price,
          total_mrp: action.total_mrp,
          redeemable_care_points: action.redeemable_care_points,
          redeemable_cash: action.redeemable_cash,
          total_tax_amount: action.total_tax_amount,
          discount: action.discount,
          shipping_fee: action.shipping_fee,
          short_coupon_description: action.short_coupon_description
        }
      }

    case cartActionTypes.SUBMIT_COUPON_CODE_FAILURE:
      return {
        ...state,
        couponDetail: {
          ...state.couponDetail,
          isLoading: action.isLoading,
          isCouponApplied: action.isCouponApplied,
          payload: {
            ...state.couponDetail.payload,
            coupon_code: ''
          },
          errorState: {
            ...state.couponDetail.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    case cartActionTypes.RESET_COUPON_STATE:
      return {
        ...state,
        couponDetail: initialState.couponDetail
      }

    case cartActionTypes.UPDATE_COUPON_CODE_VALUE:
      return {
        ...state,
        couponDetail: {
          ...state.couponDetail,
          couponCode: action.value
        }
      }

    case cartActionTypes.OPT_DOCTOR_CALLBACK_LOADING:
      return {
        ...state,
        payload: {
          ...state.payload,
          is_doctor_callback: {
            ...state.payload.is_doctor_callback,
            isLoading: action.isLoading,
            errorState: {
              ...state.payload.is_doctor_callback.errorState,
              isError: action.isError
            }
          }
        }
      }

    case cartActionTypes.OPT_DOCTOR_CALLBACK_SUCCESS:
      return {
        ...state,
        payload: {
          ...state.payload,
          is_doctor_callback: {
            ...state.payload.is_doctor_callback,
            payload: action.payload,
            isLoading: action.isLoading
          }
        }
      }

    case cartActionTypes.OPT_DOCTOR_CALLBACK_FAILURE:
      return {
        ...state,
        payload: {
          ...state.payload,
          is_doctor_callback: {
            ...state.payload.is_doctor_callback,
            isLoading: action.isLoading,
            errorState: {
              ...state.payload.is_doctor_callback.errorState,
              isError: action.isError,
              error: {}
            }
          }
        }
      }

    case cartActionTypes.VERIFY_PAYMENT_LOADING:
      return {
        ...state,
        payment: {
          ...state.payment,
          isLoading: action.isLoading,
          errorState: {
            ...state.payment.errorState,
            isError: action.isError
          }
        }
      }

    case cartActionTypes.OPT_EXPRESS_DELIVERY_LOADING:
      return {
        ...state,
        expressDeliveryCheck: {
          ...state.expressDeliveryCheck,
          isLoading: action.isLoading,
          errorState: {
            ...state.expressDeliveryCheck.errorState,
            error: action.error,
            isError: action.isError
          }
        }
      }

    case cartActionTypes.VERIFY_PAYMENT_SUCCESS:
      return {
        ...state,
        orderResponse: {
          ...state.orderResponse,
          isLoading: action.isLoading,
          order_number: action.order_number
        },
        payment: {
          ...state.payment,
          isLoading: action.isLoading,
          isPaymentSuccessful: action.isPaymentSuccessful,
          isPaymentFailure: action.isPaymentFailure
        }
      }

    case cartActionTypes.VERIFY_PAYMENT_FAILURE:
      return {
        ...state,
        payment: {
          ...state.payment,
          isLoading: action.isLoading,
          isPaymentFailure: action.isPaymentFailure,
          errorState: {
            ...state.payment.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    case cartActionTypes.OPT_EXPRESS_DELIVERY_SUCCESS:
      return {
        ...state,
        expressDeliveryCheck: {
          ...state.expressDeliveryCheck,
          isLoading: action.isLoading
        },
        payload: {
          ...state.payload,
          preferred_delivery_option: action.preferred_delivery_option,
          urgent_delivery_charge: action.urgent_delivery_charge,
          delivery_option: action.delivery_option,
          service_type: action.service_type,
          total_sale_price: action.total_sale_price,
          total_payable_amount: action.total_payable_amount,
          redeemable_care_points: action.redeemable_care_points,
          redeemable_cash: action.redeemable_cash,
          cart_items: {
            ...state.payload.cart_items,
            payload: action.cart_items
          }
        }
      }

    case cartActionTypes.OPT_EXPRESS_DELIVERY_FAILURE:
      return {
        ...state,
        expressDeliveryCheck: {
          ...state.expressDeliveryCheck,
          isLoading: action.isLoading,
          errorState: {
            ...state.expressDeliveryCheck.errorState,
            error: action.error,
            isError: action.isError
          }
        }
      }

    case cartActionTypes.UPDATE_PAYMENT_FAILURE_FLAG:
      return {
        ...state,
        payment: {
          ...state.payment,
          isPaymentFailure: action.isPaymentFailure,
          isPaymentSuccessful: action.isPaymentSuccessful
        }
      }

    case cartActionTypes.PAYMENT_INITIATE_LOADING:
      return {
        ...state,
        payment: {
          ...state.payment,
          isLoading: action.isLoading,
          errorState: {
            ...state.payment.errorState,
            isError: action.isError
          }
        }
      }

    case cartActionTypes.RESET_SUBMIT_ORDER_CART_STATE:
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

    case cartActionTypes.PAYMENT_INITIATE_SUCCESS:
      return {
        ...state,
        payment: {
          ...state.payment,
          isLoading: action.isLoading
        },
        payload: {
          ...state.payload,
          state: action.state,
          status: action.status
        },
        orderResponse: {
          ...state.orderResponse,
          payload: {
            ...state.orderResponse.payload,
            isLoading: action.isLoading,
            order_number: action.order_number,
            order_type: action.order_type,
            payment_confirmation_time: action.payment_confirmation_time,
            payment_cancellation_time: action.payment_cancellation_time,
            customer_care_number: action.customer_care_number
          }
        },
        payment_gateway: action.payment_gateway,
        isOrderSubmitted: action.isOrderSubmitted
      }

    case cartActionTypes.PAYMENT_INITIATE_FAILURE:
      return {
        ...state,
        payment: {
          ...state.payment,
          isLoading: action.isLoading,
          errorState: {
            ...state.payment.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    case cartActionTypes.IS_CART_INVALID:
      return {
        ...state,
        payload: {
          ...state.payload,
          is_cart_invalid: action.is_cart_invalid
        }
      }

    case cartActionTypes.RESET_CART_ITEM_RESET_STATE:
      return {
        ...state,
        payload: {
          ...state.payload,
          cart_items: {
            ...state.payload.cart_items,
            isLoading: action.isLoading,
            errorState: {
              ...state.payload.cart_items.errorState,
              isError: action.isError,
              error: action.error
            }
          }
        }
      }

    case cartActionTypes.REDIRECT_TO_ORDER_DETAILS_PAGE:
      return {
        ...state,
        isRedirectToOrderDetailsPage: action.isRedirectToOrderDetailsPage
      }

    case cartActionTypes.DELETE_CART_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case cartActionTypes.DELETE_CART_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        payload: initialState.payload
      }

    case cartActionTypes.DELETE_CART_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        errorState: {
          ...state.errorState,
          isError: action.isError,
          error: action.error
        }
      }

    case cartActionTypes.RESET_PAYMENT_INITIATE_ERROR_STATE:
      return {
        ...state,
        payment: {
          ...state.payment,
          errorState: {
            ...state.payment.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    case cartActionTypes.UPDATE_LFASSURED_EXPRESS_FLAG:
      return {
        ...state,
        isLAssuredLExpressAlertOpen: action.isLAssuredLExpressAlertOpen
      }

    case cartActionTypes.UPDATE_SHOW_NO_CART_ID_DIALOG_FLAG:
      return {
        ...state,
        isShowNoCartIdDialog: action.isShowNoCartIdDialog
      }

    default:
      return state
  }
}
