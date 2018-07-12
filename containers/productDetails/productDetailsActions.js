import {
  GET_PRODUCT_DETAILS_LOADING,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILURE,
  ON_CHANGE_QUANITY
} from './productDetailsActionTypes'

export function getProductDetailLoading (productDetailsState, productName, location) {
  return {
    type: GET_PRODUCT_DETAILS_LOADING,
    productDetailsState,
    location,
    productName,
    isLoading: true,
    isError: false,
    error: null
  }
}

export function getProductDetailSuccess (productDetailsState, result) {
  result = result.body.payload
  return {
    type: GET_PRODUCT_DETAILS_SUCCESS,
    productDetailsState,
    result,
    variant_status: result.variant_status,
    sku: result.sku,
    variant_id: result.variant_id,
    name: result.name,
    classification_code: result.classification_code,
    salts: result.salts,
    brand_distribution: result.brand_distribution,
    classification: result.classification,
    pack_type: result.pack_type,
    pack_size: result.pack_size,
    consumption_per_day: result.consumption_per_day,
    drug_category: result.drug_category,
    status: result.status,
    brand_name: result.brand_name,
    medicine_type: result.type,
    per_pack_qty: result.per_pack_qty,
    pack_of: result.pack_of,
    brand: result.brand,
    available_delivery_option: result.available_delivery_option,
    available_service_type: result.available_service_type,
    max_order_quantity: result.max_order_quantity,
    bulk_order_quantity: result.bulk_order_quantity,
    refill_index: result.refill_index,
    diseases: result.diseases,
    slug: result.slug,
    discount: result.discount,
    uses: result.uses,
    selling_price: result.selling_price,
    side_effects: result.side_effects,
    how_it_works: result.how_it_works,
    precautions: result.precautions,
    tele_consult: result.tele_consult,
    urgent_dl_available: result.urgent_dl_available,
    lc_assured_available: result.lc_assured_available,
    is_cold_storage: result.is_cold_storage,
    packaging_type: result.packaging_type,
    description: result.description,
    isLoading: false
  }
}

export function getProductDetailFailure (productDetailsState, error) {
  return {
    type: GET_PRODUCT_DETAILS_FAILURE,
    productDetailsState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function onChangeQuantity (productDetailsState, quantity) {
  return {
    type: ON_CHANGE_QUANITY,
    productDetailsState,
    quantity
  }
}
