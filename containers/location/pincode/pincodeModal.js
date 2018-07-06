const initialState = {
  payload: {
    city: 'Delhi', // default state
    state: 'Delhi', // default state
    id: 101,
    pincode: '',
    country: '',
    delivery_day: '',
    free_shipping_min_order: '',
    shipping_fee: '',
    is_active: '',
    is_lc_assured_available: '',
    is_urgent_dl_available: '',
    urgent_delivery_charge: ''
  },
  isLoading: false,
  errorState: {
    isError: false,
    error: {}
  }
}

export default initialState
