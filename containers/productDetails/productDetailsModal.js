const initialState = {
  payload: {
      variant_status: '',
      sku: '',
      quantity: 1,
      variant_id: '',
      name: '',
      classification_code: '',
      salts: [],
      brand_distribution: '',
      classification: '',
      pack_type: '',
      pack_size: '',
      consumption_per_day: '',
      drug_category: '',
      status: '',
      brand_name: '',
      medicine_type: '',
      per_pack_qty: '',
      pack_of: '',
      brand: '',
      available_delivery_option: '',
      available_service_type: '',
      max_order_quantity: '',
      bulk_order_quantity: '',
      refill_index: '',
      diseases: [],
      slug: '',
      selling_price: 0,
      discount: 0,
      uses: [],
      side_effects: [],
      how_it_works: [],
      precautions: [],
      tele_consult: null,
      urgent_dl_available: false,
      lc_assured_available: false,
      is_cold_storage: false,
      packaging_type: null
  },
  isLoadingGetProductDetails: false,
  errorStateGetProductDetails: {
    isError: false,
    error: null
  }
}

export default initialState
