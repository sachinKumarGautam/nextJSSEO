import {
  GET_ORDER_DETAILS_LOADING,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILURE
} from './orderDetailsActionTypes'

/**
 * Represents to the loading state to get the molecule details according to the salt id.
 * @param {object} orderDetailsState - The object maintained for payload, loading and error state.
 * @param {string} orderId - The value of the salt id according to which list will occur
 */
export function getOrderDetailsLoading (orderDetailsState, orderId) {
  return {
    type: GET_ORDER_DETAILS_LOADING,
    orderDetailsState,
    isLoading: true,
    isError: false,
    error: {},
    orderId: orderId
  }
}

/**
 * Represents to the success state to get the molecule details.
 * @param {object} orderDetailsState - The object maintained for payload, loading and error state.
 * @param {array} result - The result obtained from the API response
 */

export function getOrderDetailsSuccess (
  orderDetailsState,
  result,
  orderStatusProgressDetails,
  promisedDeliveryDate,
  createdAt
) {
  return {
    type: GET_ORDER_DETAILS_SUCCESS,
    orderDetailsState,
    isLoading: false,
    id: result.id,
    uid: result.uid,
    patient_id: result.patient_id,
    customer_id: result.customer_id,
    created_at: createdAt,
    shipping_address_id: result.shipping_address_id,
    shipping_address: result.shipping_address,
    customer_full_name: result.customer_full_name,
    patient_full_name: result.patient_full_name,
    patient_first_name: result.patient_first_name,
    patient_last_name: result.patient_last_name,
    discount: result.discount,
    redeemed_care_points: result.redeemed_care_points,
    redeemed_cash: result.redeemed_cash,
    total_mrp: result.total_mrp,
    total_sale_price: result.total_sale_price,
    total_tax_amount: result.total_tax_amount,
    facility_code: result.facility_code,
    state: result.state,
    status: result.status,
    activeStep: orderStatusProgressDetails.activeStep,
    viewStatus: orderStatusProgressDetails.viewStatus,
    source: result.source,
    payment_method: result.payment_method,
    promised_delivery_date: promisedDeliveryDate,
    order_items: result.order_items,
    order_prescriptions: result.order_prescriptions,
    source_type: result.source_type,
    delivery_option: result.delivery_option,
    service_type: result.service_type
  }
}

/**
 * Represents to the error state to get the molecule details.
 * @param {object} orderDetailsState - The object maintained for payload, loading and error state.
 * @param {object} error - The error details when API throws an error
 */
export function getOrderDetailsFailure (orderDetailsState, error) {
  return {
    type: GET_ORDER_DETAILS_FAILURE,
    orderDetailsState,
    isLoading: false,
    isError: true,
    error: error
  }
}
