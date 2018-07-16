import * as cartActionTypes from './cartActionTypes'

export function getAnonymousCartIdLoading (
  cartState,
  source,
  facilityCode,
  sourceType = ''
) {
  return {
    type: cartActionTypes.GET_ANONYMOUS_CART_ID_LOADING,
    cartState: cartState,
    isLoading: true,
    isError: false,
    source: source,
    facility_code: facilityCode,
    source_type: sourceType
  }
}

export function getAnonymousCartIdSuccess (cartState, result) {
  return {
    type: cartActionTypes.GET_ANONYMOUS_CART_ID_SUCCESS,
    cartState,
    id: result.id,
    uid: result.uid,
    patient_id: 0,
    cart_prescriptions: [],
    cart_items: [],
    isLoading: false,
    is_doctor_callback: false,
    is_cart_transfered: false,
    source_type: result.source_type,
    facility_code: result.facility_code
  }
}

export function getAnonymousCartIdFailure (cartState, error) {
  return {
    type: cartActionTypes.GET_ANONYMOUS_CART_ID_FAILURE,
    cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function getCartDetailsLoading (cartState, cartUid) {
  return {
    type: cartActionTypes.GET_CART_DETAILS_LOADING,
    cartState: cartState,
    cartUid: cartUid,
    isLoading: true,
    isError: false
  }
}

export function getCartDetailsSuccess (
  cartState,
  result,
  cartItems,
  cartPrescriptions
) {
  return {
    type: cartActionTypes.GET_CART_DETAILS_SUCCESS,
    cartState: cartState,
    isLoading: false,
    id: result.id,
    uid: result.uid,
    patient_id: result.patient_id,
    customer_id: result.customer_id,
    shipping_address_id: result.shipping_address_id,
    shipping_address: result.shipping_address,
    customer_full_name: result.customer_full_name,
    patient_full_name: result.patient_full_name,
    discount: result.discount,
    redeemed_care_points: result.redeemed_care_points,
    redeemable_care_points: result.redeemable_care_points,
    total_mrp: result.total_mrp,
    total_sale_price: result.total_sale_price,
    total_tax_amount: result.total_tax_amount,
    facility_code: result.facility_code,
    status: result.status,
    source: result.source,
    cart_items: result.cart_items,
    cart_prescriptions: result.cart_prescriptions,
    source_type: result.source_type,
    delivery_option: result.delivery_option,
    service_type: result.service_type
  }
}

export function getCartDetailsFailure (cartState, error) {
  return {
    type: cartActionTypes.GET_CART_DETAILS_FAILURE,
    cartState: cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function decrementCartItemLoading (
  cartState,
  medicineSelected
) {
  return {
    type: cartActionTypes.DECREMENT_CART_ITEM_LOADING,
    cartState: cartState,
    medicineSelected: medicineSelected
  }
}

export function incrementCartItemLoading (
  cartState,
  medicineSelected
) {
  return {
    type: cartActionTypes.INCREMENT_CART_ITEM_LOADING,
    cartState: cartState,
    medicineSelected: medicineSelected
  }
}

export function deleteCartItemLoading (
  cartState,
  medicineSelected
) {
  return {
    type: cartActionTypes.DELETE_CART_ITEM_LOADING,
    cartState: cartState,
    medicineSelected: medicineSelected
  }
}

export function putCartItemSuccess (cartState, result) {
  return {
    type: cartActionTypes.PUT_CART_ITEM_SUCCESS,
    cartState,
    cart_items: result.cart_items,
    discount: result.discount,
    redeemed_care_points: result.redeemed_care_points,
    redeemable_care_points: result.redeemable_care_points,
    total_mrp: result.total_mrp,
    total_sale_price: result.total_sale_price,
    total_tax_amount: result.total_tax_amount
  }
}

export function putCartItemFailure (cartState, cartItems) {
  return {
    type: cartActionTypes.PUT_CART_ITEM_FAILURE,
    cartState,
    cartItems: cartItems
  }
}

export function savePatientToCartLoading (
  cartState,
  patient,
  cartId
) {
  return {
    type: cartActionTypes.SAVE_PATIENT_TO_CART_LOADING,
    cartState,
    patient: patient,
    cartId: cartId,
    isLoading: true,
    isError: false,
    error: {}
  }
}

export function cartTransferLoading (
  cartState
) {
  return {
    type: cartActionTypes.CART_TRANSFER_LOADING,
    cartState: cartState,
    isLoading: true,
    isError: false,
    error: {}
  }
}

export function savePatientToCartSuccess (cartState, patient, result) {
  return {
    type: cartActionTypes.SAVE_PATIENT_TO_CART_SUCCESS,
    cartState,
    patient_id: result.patient_id,
    patient: patient,
    patient_full_name: result.patient_full_name,
    isLoading: false
  }
}

export function savePatientToCartFailure (cartState, error) {
  return {
    type: cartActionTypes.SAVE_PATIENT_TO_CART_FAILURE,
    cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function saveDeliveryAddressToCartLoading (
  cartState,
  shippingAddressId
) {
  return {
    type: cartActionTypes.SAVE_DELIVERY_ADDRESS_TO_CART_LOADING,
    cartState,
    shippingAddressId: shippingAddressId,
    isLoading: true,
    isError: false,
    error: {}
  }
}

export function saveDeliveryAddressToCartSuccess (cartState, result) {
  return {
    type: cartActionTypes.SAVE_DELIVERY_ADDRESS_TO_CART_SUCCESS,
    cartState,
    shipping_address_id: result.shipping_address_id,
    shipping_address: result.shipping_address,
    isLoading: false
  }
}

export function saveDeliveryAddressToCartSuccess (cartState, shippingAddressId) {
  return {
    type: cartActionTypes.SAVE_DELIVERY_ADDRESS_TO_CART_SUCCESS,
    cartState,
    shipping_address_id: shippingAddressId,
    isLoading: false
  }
}

export function saveDeliveryAddressToCartFailure (cartState, error) {
  return {
    type: cartActionTypes.SAVE_DELIVERY_ADDRESS_TO_CART_FAILURE,
    cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function cartTransferSuccess (cartState, result, cartItems, cartPrescriptions) {
  let payload = result.body.payload
  return {
    type: cartActionTypes.CART_TRANSFER_SUCCESS,
    cartState: cartState,
    cart_items: cartItems,
    isLoading: false,
    id: payload.id,
    uid: payload.uid,
    customer_id: payload.customer_id,
    patient_id: payload.patient_id,
    patient_full_name: payload.patient_full_name,
    customer_first_name: payload.customer_first_name,
    customer_last_name: payload.customer_last_name,
    facility_code: payload.facility_code,
    status: payload.status,
    source: payload.source,
    cart_prescriptions: cartPrescriptions,
    doctor_callback: payload.doctor_callback,
    is_cart_transfered: true,
    source_type: payload.source_type
  }
}

export function cartTransferFailure (cartState, error) {
  return {
    type: cartActionTypes.CART_TRANSFER_FAILURE,
    cartState: cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function updateIsCartOpenLoginFlag (cartState, isCartOpenLoginDialog) {
  return {
    type: cartActionTypes.UPDATE_IS_CART_OPEN_LOGIN_FLAG,
    cartState: cartState,
    isCartOpenLoginDialog: isCartOpenLoginDialog
  }
}

export function updateIsCartOpenRegisterModalFlag (cartState, isCartOpenRegisterDialog) {
  return {
    type: cartActionTypes.UPDATE_IS_CART_OPEN_REGISTER_MODAL_FLAG,
    cartState: cartState,
    isCartOpenRegisterDialog: isCartOpenRegisterDialog
  }
}

export function uploadPrescriptionLoading (cartState, file) {
  return {
    type: cartActionTypes.UPLOAD_PRESCRIPTION_LOADING,
    cartState: cartState,
    uploadedFiles: file
  }
}

export function uploadPrescriptionSuccess (
  cartState,
  uploadedFiles,
  cartPrescriptions
) {
  return {
    type: cartActionTypes.UPLOAD_PRESCRIPTION_SUCCESS,
    cartState,
    isLoading: false,
    cart_prescriptions: cartPrescriptions,
    uploadedFiles: uploadedFiles
  }
}

export function uploadPrescriptionFailure (cartState, error) {
  return {
    type: cartActionTypes.UPLOAD_PRESCRIPTION_FAILURE,
    cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function deletePrescriptionLoading (cartState, files, index) {
  return {
    type: cartActionTypes.DELETE_PRESCRIPTION_LOADING,
    cartState: cartState,
    isLoading: true,
    isError: false,
    error: {},
    uploadedFiles: files,
    deletedFileIndex: index
  }
}

export function deletePrescriptionSuccess (
  cartState,
  uploadedFiles,
  cartPrescriptions
) {
  return {
    type: cartActionTypes.DELETE_PRESCRIPTION_SUCCESS,
    cartState,
    isLoading: false,
    cart_prescriptions: cartPrescriptions,
    uploadedFiles: uploadedFiles
  }
}

export function deletePrescriptionFailure (cartState, error) {
  return {
    type: cartActionTypes.DELETE_PRESCRIPTION_FAILURE,
    cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function submitOrderLoading (cartState) {
  return {
    type: cartActionTypes.SUBMIT_ORDER_LOADING,
    cartState,
    isLoading: true,
    isError: false
  }
}

export function submitOrderSuccess (cartState, result) {
  return {
    type: cartActionTypes.SUBMIT_ORDER_SUCCESS,
    cartState,
    order_number: result.order.id,
    delivery_option: result.order.delivery_option,
    service_type: result.order.service_type,
    doctor_callback: result.order.doctor_callback,
    order_prescriptions: result.order.order_prescriptions,
    promised_delivery_date: result.order.promised_delivery_date,
    patient_id: result.order.patient_id,
    customer_id: result.order.customer_id,
    customer_full_name: result.order.customer_full_name,
    patient_full_name: result.order.patient_full_name,
    discount: result.order.discount,
    redeemed_care_points: result.order.redeemed_care_points,
    redeemable_care_points: result.order.redeemable_care_points,
    total_mrp: result.order.total_mrp,
    total_sale_price: result.order.total_sale_price,
    total_tax_amount: result.order.total_tax_amount,
    facility_code: result.order.facility_code,
    status: result.order.status,
    source: result.order.source,
    isLoading: false
  }
}

export function submitOrderFailure (cartState, error) {
  return {
    type: cartActionTypes.SUBMIT_ORDER_FAILURE,
    cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function resetCartState () {
  return {
    type: cartActionTypes.RESET_CART_STATE
  }
}

export function goToCartSnackbar (cartState, showAddToCartSnackBar) {
  return {
    type: cartActionTypes.GO_TO_CART_SNACKBAR,
    cartState,
    showAddToCartSnackBar
  }
}

export function applyCouponCodeLoading (cartState, cartId, couponCode) {
  return {
    type: cartActionTypes.SUBMIT_COUPON_CODE_LOADING,
    cartState,
    isLoading: true,
    isError: false,
    cartId,
    couponCode,
    isCouponApplied: false
  }
}

export function applyCouponCodeSuccess (cartState, result) {
  return {
    type: cartActionTypes.SUBMIT_COUPON_CODE_SUCCESS,
    cartState,
    payload: result,
    isLoading: false,
    isCouponApplied: true
  }
}

export function applyCouponCodeFailure (cartState, error) {
  return {
    type: cartActionTypes.SUBMIT_COUPON_CODE_FAILURE,
    cartState,
    isLoading: false,
    isError: true,
    error: error,
    isCouponApplied: false
  }
}

export function updateCouponCode (cartState, value) {
  return {
    type: cartActionTypes.UPDATE_COUPON_CODE_VALUE,
    cartState,
    value
  }
}

export function optForDoctorCallbackLoading (cartState, cartUId, doctorCallback) {
  return {
    type: cartActionTypes.OPT_DOCTOR_CALLBACK_LOADING,
    cartState,
    isLoading: true,
    isError: false,
    cartUId,
    doctorCallback
  }
}

export function optForDoctorCallbackSuccess (cartState, result) {
  return {
    type: cartActionTypes.OPT_DOCTOR_CALLBACK_SUCCESS,
    cartState,
    payload: result,
    isLoading: false
  }
}

export function optForDoctorCallbackFailure (cartState, error) {
  return {
    type: cartActionTypes.OPT_DOCTOR_CALLBACK_FAILURE,
    cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}
