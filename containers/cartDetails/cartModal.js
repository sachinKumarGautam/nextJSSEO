const initialState = {
  payload: {
    id: 0,
    uid: '',
    customer_id: 0,
    customer_first_name: '',
    customer_last_name: '',
    facility_code: 0,
    patient_id: 0,
    patient_full_name: '',
    shipping_address_id: 0,
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
  isLoading: false,
  errorState: {
    isError: false,
    error: {}
  }
}

export default initialState
