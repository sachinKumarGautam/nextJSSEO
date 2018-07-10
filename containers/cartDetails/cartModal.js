const initialState = {
  payload: {
    id: 0,
    uid: '',
    customer_id: 0,
    customer_first_name: '',
    customer_last_name: '',
    facility_code: 0,
    patient_id: {
      payload: 0,
      isLoading: false,
      errorState: {
        isError: false,
        error: {}
      }
    },
    patient_full_name: '',
    shipping_address_id: {
      payload: 0,
      isLoading: false,
      errorState: {
        isError: false,
        error: {}
      }
    },
    shipping_address: {},
    type: '',
    comment: '',
    total_mrp: 0,
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
  orderResponse: {
    order_number: null,
    delivery_option: '',
    service_type: '',
    order_prescriptions: [],
    doctor_callback: false,
    isLoading: false,
    errorState: {
      isError: false,
      error: {}
    }
  }
}

export default initialState
