const initialState = {
  payload: {
    id: 0,
    uid: '',
    customer_id: 0,
    customer_first_name: '',
    customer_last_name: '',
    patient_full_name: '',
    patient_id: 0,
    facility_code: 0,
    shipping_address_id: 0,
    shipping_address: {},
    type: '',
    comment: '',
    total_mrp: 0,
    item_count: 0,
    status: '',
    source: '',
    order_items: [],
    coupon_code: '',
    care_points: 0,
    coupon_discount: 0,
    order_prescriptions: [],
    is_doctor_callback: false,
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
