const initialState = {
  payload: {
    city: 'Delhi',
    state: '',
    id: 100,
    source: 'MWEB',
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
  pincodeValue: '',
  isPincodeDialogOpen: false,
  isChangePincode: false,
  isLoading: false,
  isDeliveryAssignment: false,
  errorState: {
    isError: false,
    error: {}
  }
}

export default initialState
