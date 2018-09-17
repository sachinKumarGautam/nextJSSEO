import initialState from './productDetailsModal'

import {
  GET_PRODUCT_DETAILS_LOADING,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_SUCCESS,
  ON_CHANGE_QUANITY
  // GET_PRODUCT_DETAILS_SUMMARY_LOADING,
  // GET_PRODUCT_DETAILS_SUMMARY_SUCCESS,
  // GET_PRODUCT_DETAILS_SUMMARY_FAILURE
} from './productDetailsActionTypes'

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_LOADING:
      return {
        ...state,
        isLoadingGetProductDetails: action.isLoading,
        errorStateGetProductDetails: {
          ...state.errorStateGetProductDetails,
          isError: action.isError,
          error: action.error
        }
      }

    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        isLoadingGetProductDetails: action.isLoading,
        payload: {
          ...state.payload,
          variant_status: action.variant_status,
          sku: action.sku,
          variant_id: action.variant_id,
          name: action.name,
          classification_code: action.classification_code,
          salts: action.salts,
          brand_distribution: action.brand_distribution,
          classification: action.classification,
          pack_type: action.pack_type,
          pack_size: action.pack_size,
          consumption_per_day: action.consumption_per_day,
          drug_category: action.drug_category,
          status: action.status,
          brand_name: action.brand_name,
          medicine_type: action.type,
          per_pack_qty: action.per_pack_qty,
          pack_of: action.pack_of,
          brand: action.brand,
          available_delivery_option: action.available_delivery_option,
          available_service_type: action.available_service_type,
          max_order_quantity: action.max_order_quantity,
          bulk_order_quantity: action.bulk_order_quantity,
          refill_index: action.refill_index,
          diseases: action.diseases,
          slug: action.slug,
          selling_price: action.selling_price,
          mrp: action.mrp,
          discount: action.discount,
          uses: action.uses,
          side_effects: action.side_effects,
          how_it_works: action.how_it_works,
          precautions: action.precautions,
          tele_consult: action.tele_consult,
          urgent_dl_available: action.urgent_dl_available,
          lc_assured_available: action.lc_assured_available,
          is_cold_storage: action.is_cold_storage,
          packaging_type: action.packaging_type,
          description: action.description
        }
      }

    case GET_PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        isLoadingGetProductDetails: action.isLoading,
        errorStateGetProductDetails: {
          ...state.errorStateGetProductDetails,
          isError: action.isError,
          error: action.error
        }
      }

    case ON_CHANGE_QUANITY:
      return {
        ...state,
        payload: {
          ...state.payload,
          quantity: action.quantity
        }
      }

    //   case GET_PRODUCT_DETAILS_SUMMARY_LOADING :
    //   return {
    //     ...state,
    //     isLoadingGetProductDetailsSummary: action.isLoading,
    //     errorStateGetProductDetailsSummary: {
    //       ...state.errorStateGetProductDetailsSummary,
    //       isError: action.isError,
    //       error: action.error
    //     }
    //   }

    // case GET_PRODUCT_DETAILS_SUMMARY_SUCCESS :
    //   return {
    //     ...state,
    //     isLoadingGetProductDetailsSummary: action.isLoading,
    //     payload: {
    //       ...state.payload

    //     }
    //   }

    // case GET_PRODUCT_DETAILS_SUMMARY_FAILURE:
    //   return {
    //     ...state,
    //     isLoadingGetProductDetailsSummary: action.isLoading,
    //     errorStateGetProductDetailsSummary: {
    //       ...state.errorStateGetProductDetailsSummary,
    //       isError: action.isError,
    //       error: action.error
    //     }
    //   }

    default:
      return state
  }
}
