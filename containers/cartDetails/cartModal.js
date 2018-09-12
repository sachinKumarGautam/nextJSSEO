const initialState = {
  payload: {
    id: 0,
    available_delivery_option: [],
    preferred_delivery_option: '',
    uid: '',
    customer_id: 0,
    customer_first_name: '',
    customer_last_name: '',
    facility_code: 0,
    patient_details: {
      payload: {
        patient_id: 0,
        patient_full_name: '',
        age: 0,
        gender: '',
        mobile: ''
      },
      isLoading: false,
      errorState: {
        isError: false,
        error: {}
      }
    },
    shipping_address_details: {
      payload: {
        shipping_address_id: 0,
        shipping_address: {}
      },
      isLoading: false,
      errorState: {
        isError: false,
        error: {}
      }
    },
    type: '',
    comment: '',
    total_mrp: 0,
    total_payable_amount: 0,
    item_count: 0,
    status: '',
    source: '',
    cart_items: {
      payload: [],
      isLoading: false,
      errorState: {
        isError: false,
        error: {}
      }
    },
    coupon_code: '',
    care_points: 0,
    coupon_discount: 0,
    payment_channels: [],
    cart_prescriptions: [],
    is_doctor_callback: {
      payload: false,
      isLoading: false,
      errorState: {
        isError: false,
        error: {}
      }
    },
    is_cart_invalid: false,
    source_type: '',
    delivery_option: '',
    service_type: ''
  },
  isCartOpenLoginDialog: false,
  showAddToCartSnackBar: false,
  isCartOpenRegisterDialog: false,
  isLoading: false,
  errorState: {
    isError: false,
    error: {}
  },
  prescriptionDetails: {
    prescriptionType: '',
    cartPrescriptionList: [],
    isLoading: false,
    errorState: {
      isError: false,
      error: {}
    },
    isViewImageVisible: false,
    visibleImageUrl: ''
  },
  payment_gateway: {},
  payment: {
    payload: {},
    isPaymentSuccessful: false,
    isPaymentFailure: false,
    isLoading: false,
    errorState: {
      isError: false,
      error: {}
    }
  },
  orderResponse: {
    payload: {
      order_number: null,
      order_type: '',
      delivery_option: '',
      service_type: '',
      order_prescriptions: [],
      doctor_callback: false,
      promised_delivery_date: '',
      patient_id: 0,
      customer_id: 0,
      customer_full_name: '',
      patient_full_name: '',
      discount: 0,
      coupon_code: '',
      coupon_discount: 0,
      redeemed_care_points: 0,
      redeemable_care_points: 0,
      redeemed_cash: 0,
      redeemable_cash: 0,
      total_mrp: 0,
      total_sale_price: 0,
      total_tax_amount: 0,
      facility_code: 0,
      status: '',
      source: '',
      payment_confirmation_time: '',
      payment_cancellation_time: '',
      customer_care_number: ''
    },
    isLoading: false,
    errorState: {
      isError: false,
      error: {}
    }
  },
  couponDetail: {
    couponCode: '',
    isCouponApplied: false,
    payload: {},
    isLoading: false,
    errorState: {
      isError: false,
      error: {}
    }
  },
  isOrderSubmitted: false,
  isRedirectToOrderDetailsPage: false,
  expressDeliveryCheck: {
    payload: {},
    isLoading: false,
    errorState: {
      isError: false,
      error: {}
    }
  }
}

export default initialState
