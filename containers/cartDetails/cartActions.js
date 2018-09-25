import * as cartActionTypes from './cartActionTypes'

export function getAnonymousCartIdLoading (
  cartState,
  source,
  facilityCode,
  sourceType = '',
  patientDetail,
  addMedicine,
  isAssignPatientToCart
) {
  return {
    type: cartActionTypes.GET_ANONYMOUS_CART_ID_LOADING,
    cartState: cartState,
    isLoading: true,
    isError: false,
    source: source,
    facility_code: facilityCode,
    source_type: sourceType,
    patientDetail: patientDetail,
    addMedicine: addMedicine,
    isAssignPatientToCart
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
    total_payable_amount: result.total_payable_amount,
    total_sale_price: result.total_sale_price,
    total_tax_amount: result.total_tax_amount,
    facility_code: result.facility_code,
    status: result.status,
    source: result.source,
    cart_items: result.cart_items,
    cart_prescriptions: result.cart_prescriptions,
    payment_channels: result.payment_channels,
    source_type: result.source_type,
    delivery_option: result.delivery_option,
    service_type: result.service_type,
    seller_detail: result.seller_detail,
    available_delivery_option: result.available_delivery_option,
    preferred_delivery_option: result.preferred_delivery_option
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

export function decrementCartItemLoading (cartState, medicineSelected) {
  return {
    type: cartActionTypes.DECREMENT_CART_ITEM_LOADING,
    cartState: cartState,
    isLoading: true,
    medicineSelected: medicineSelected
  }
}

export function incrementCartItemLoading (cartState, medicineSelected) {
  return {
    type: cartActionTypes.INCREMENT_CART_ITEM_LOADING,
    cartState: cartState,
    isLoading: true,
    medicineSelected: medicineSelected
  }
}

export function deleteCartItemLoading (cartState, medicineSelected) {
  return {
    type: cartActionTypes.DELETE_CART_ITEM_LOADING,
    cartState: cartState,
    isLoading: true,
    medicineSelected: medicineSelected
  }
}

export function putCartItemSuccess (cartState, result) {
  return {
    type: cartActionTypes.PUT_CART_ITEM_SUCCESS,
    cartState,
    isLoading: false,
    cart_items: result.cart_items,
    discount: result.discount,
    payment_channels: result.payment_channels,
    redeemed_care_points: result.redeemed_care_points,
    redeemable_care_points: result.redeemable_care_points,
    total_mrp: result.total_mrp,
    total_payable_amount: result.total_payable_amount,
    total_sale_price: result.total_sale_price,
    total_tax_amount: result.total_tax_amount,
    seller_detail: result.seller_detail
  }
}

export function putCartItemFailure (cartState, result, error) {
  return {
    type: cartActionTypes.PUT_CART_ITEM_FAILURE,
    cartState,
    isLoading: false,
    isError: true,
    error: error,
    cart_items: result.cart_items
  }
}

export function resetSavePatientToCartError (cartState) {
  return {
    type: cartActionTypes.RESET_SAVE_PATIENT_TO_CART_ERROR,
    cartState: cartState,
    isError: false,
    error: {}
  }
}

export function savePatientToCartLoading (
  cartState,
  patient,
  cartId,
  sourceType,
  addMedicine
) {
  return {
    type: cartActionTypes.SAVE_PATIENT_TO_CART_LOADING,
    cartState,
    patient: patient,
    cartId: cartId,
    isLoading: true,
    isError: false,
    error: {},
    source_type: sourceType,
    addMedicine: addMedicine
  }
}

export function cartTransferLoading (cartState) {
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
    payment_channels: result.payment_channels,
    seller_detail: result.seller_detail,
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

export function resetSaveDeliveryAddressToCartError (cartState) {
  return {
    type: cartActionTypes.RESET_SAVE_DELIVERY_ADDRESS_TO_CART_ERROR,
    cartState: cartState,
    isError: false,
    error: {}
  }
}

export function saveDeliveryAddressToCartLoading (cartState, shippingAddressId) {
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
    payment_channels: result.payment_channels,
    shipping_address_id: result.shipping_address_id,
    shipping_address: result.shipping_address,
    available_delivery_option: result.available_delivery_option,
    isLoading: false,
    preferred_delivery_option: result.preferred_delivery_option,
    delivery_option: result.delivery_option,
    service_type: result.service_type,
    urgent_delivery_charge: result.urgent_delivery_charge,
    cart_items: result.cart_items,
    discount: result.discount,
    redeemed_care_points: result.redeemed_care_points,
    redeemable_care_points: result.redeemable_care_points,
    total_mrp: result.total_mrp,
    total_payable_amount: result.total_payable_amount,
    total_sale_price: result.total_sale_price,
    total_tax_amount: result.total_tax_amount,
    seller_detail: result.seller_detail
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

export function cartTransferSuccess (
  cartState,
  result,
  cartItems,
  cartPrescriptions
) {
  let payload = result.body.payload
  return {
    type: cartActionTypes.CART_TRANSFER_SUCCESS,
    cartState: cartState,
    cart_items: cartItems,
    isLoading: false,
    id: payload.id,
    uid: payload.uid,
    payment_channels: payload.payment_channels,
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
    source_type: payload.source_type,
    seller_detail: result.seller_detail
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

export function updateIsCartOpenRegisterModalFlag (
  cartState,
  isCartOpenRegisterDialog
) {
  return {
    type: cartActionTypes.UPDATE_IS_CART_OPEN_REGISTER_MODAL_FLAG,
    cartState: cartState,
    isCartOpenRegisterDialog: isCartOpenRegisterDialog
  }
}

export function resetUploadPrescriptionError (cartState) {
  return {
    type: cartActionTypes.RESET_UPLOAD_PRESCRIPTION_ERROR,
    cartState: cartState,
    isError: false,
    error: {}
  }
}

export function uploadPrescriptionLoading (cartState, file, isHomePage) {
  return {
    type: cartActionTypes.UPLOAD_PRESCRIPTION_LOADING,
    cartState: cartState,
    isLoading: true,
    uploadedFiles: file,
    isHomePage: isHomePage
  }
}

export function uploadPrescriptionSuccess (
  cartState,
  uploadedFiles,
  cartPrescriptions,
  isHomePage
) {
  return {
    type: cartActionTypes.UPLOAD_PRESCRIPTION_SUCCESS,
    cartState,
    isLoading: false,
    cart_prescriptions: cartPrescriptions,
    uploadedFiles: uploadedFiles,
    isHomePage: isHomePage
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

export function submitOrderLoading (cartState, paymentChannel) {
  return {
    type: cartActionTypes.SUBMIT_ORDER_LOADING,
    cartState,
    paymentChannel: paymentChannel,
    isLoading: true,
    isError: false
  }
}

export function submitOrderSuccess (cartState, result) {
  return {
    type: cartActionTypes.SUBMIT_ORDER_SUCCESS,
    cartState,
    payment_gateway: result.payment_gateway,
    order_number: result.order.id,
    order_type: result.order.order_type,
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
    coupon_code: result.order.coupon_code,
    coupon_discount: result.order.coupon_discount,
    redeemed_care_points: result.order.redeemed_care_points,
    redeemable_care_points: result.order.redeemable_care_points,
    redeemed_cash: result.order.redeemed_cash,
    redeemable_cash: result.order.redeemable_cash,
    total_mrp: result.order.total_mrp,
    total_payable_amount: result.order.total_payable_amount,
    total_sale_price: result.order.total_sale_price,
    total_tax_amount: result.order.total_tax_amount,
    facility_code: result.order.facility_code,
    status: result.order.status,
    source: result.order.source,
    payment_confirmation_time: result.order.payment_confirmation_time,
    payment_cancellation_time: result.order.payment_cancellation_time > 60
      ? result.order.payment_cancellation_time / 60 + ' hours '
      : result.order.payment_cancellation_time + ' minutes ',
    customer_care_number: result.order.customer_care_number,
    isOrderSubmitted: true,
    isLoading: false,
    urgent_delivery_charge: result.order.urgent_delivery_charge
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

export function resetCartLoadingState (cartState) {
  return {
    type: cartActionTypes.RESET_CART_LOADING_STATE,
    cartState
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
    coupon_code: result.coupon_code,
    coupon_discount: result.coupon_discount,
    cart_items: result.cart_items,
    total_payable_amount: result.total_payable_amount,
    total_sale_price: result.total_sale_price,
    total_mrp: result.total_mrp,
    redeemable_care_points: result.redeemable_care_points,
    redeemable_cash: result.redeemable_cash,
    total_tax_amount: result.total_tax_amount,
    discount: result.discount,
    shipping_fee: result.shipping_fee,
    short_coupon_description: result.short_coupon_description,
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

export function resetCouponDetail () {
  return {
    type: cartActionTypes.RESET_COUPON_STATE
  }
}

export function updateCouponCode (cartState, value) {
  return {
    type: cartActionTypes.UPDATE_COUPON_CODE_VALUE,
    cartState,
    value
  }
}

export function optForDoctorCallbackLoading (
  cartState,
  cartUId,
  doctorCallback
) {
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

export function verifyPaymentLoading (cartState, response, orderId) {
  return {
    type: cartActionTypes.VERIFY_PAYMENT_LOADING,
    cartState,
    orderId: orderId,
    razorpay_order_id: response.razorpay_order_id,
    razorpay_payment_id: response.razorpay_payment_id,
    razorpay_signature: response.razorpay_signature,
    isLoading: true,
    isError: false
  }
}

export function verifyPaymentSuccess (cartState, payload) {
  return {
    type: cartActionTypes.VERIFY_PAYMENT_SUCCESS,
    cartState,
    order_number: payload.id,
    isPaymentSuccessful: true,
    isPaymentFailure: false,
    isLoading: false
  }
}

export function verifyPaymentFailure (cartState, error) {
  return {
    type: cartActionTypes.VERIFY_PAYMENT_FAILURE,
    cartState,
    isLoading: false,
    isPaymentFailure: true,
    isError: true,
    error: error
  }
}

export function optForExpressDeliveryLoading (
  cartState,
  cartUId,
  expressDeliveryCheck
) {
  return {
    type: cartActionTypes.OPT_EXPRESS_DELIVERY_LOADING,
    cartState,
    isLoading: true,
    isError: false,
    cartUId,
    expressDeliveryCheck
  }
}

export function optForExpressDeliverySuccess (cartState, result) {
  return {
    type: cartActionTypes.OPT_EXPRESS_DELIVERY_SUCCESS,
    cartState,
    payload: result,
    isLoading: false,
    preferred_delivery_option: result.preferred_delivery_option,
    urgent_delivery_charge: result.urgent_delivery_charge,
    delivery_option: result.delivery_option,
    service_type: result.service_type,
    total_sale_price: result.total_sale_price,
    total_payable_amount: result.total_payable_amount,
    redeemable_care_points: result.redeemable_care_points,
    redeemable_cash: result.redeemable_cash,
    cart_items: result.cart_items
  }
}

export function optForExpressDeliveryFailure (cartState, error) {
  return {
    type: cartActionTypes.OPT_EXPRESS_DELIVERY_FAILURE,
    cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function updatePaymentFailureFlag (cartState, isPaymentFailure) {
  return {
    type: cartActionTypes.UPDATE_PAYMENT_FAILURE_FLAG,
    cartState,
    isPaymentFailure: isPaymentFailure,
    isPaymentSuccessful: false
  }
}

export function paymentInitiateLoading (cartState, orderId, paymentMode) {
  return {
    type: cartActionTypes.PAYMENT_INITIATE_LOADING,
    cartState,
    orderId: orderId,
    paymentMode: paymentMode,
    isLoading: true,
    isError: false
  }
}

export function paymentInitiateSuccess (cartState, payload, paymentGateway) {
  return {
    type: cartActionTypes.PAYMENT_INITIATE_SUCCESS,
    cartState,
    order_number: payload.id,
    order_type: payload.order_type,
    payment_gateway: paymentGateway,
    isOrderSubmitted: true,
    state: payload.state,
    status: payload.status,
    payment_confirmation_time: payload.payment_confirmation_time,
    payment_cancellation_time: payload.payment_cancellation_time > 60
      ? payload.payment_cancellation_time / 60 + ' hours '
      : payload.payment_cancellation_time + ' minutes ',
    customer_care_number: payload.customer_care_number,
    isLoading: false
  }
}

export function paymentInitiateFailure (cartState, error) {
  return {
    type: cartActionTypes.PAYMENT_INITIATE_FAILURE,
    cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function resetApiStateSubmitOrder () {
  return {
    type: cartActionTypes.RESET_SUBMIT_ORDER_CART_STATE,
    isLoading: false,
    isError: false,
    error: null
  }
}

export function resetCartItemErrorState () {
  return {
    type: cartActionTypes.RESET_CART_ITEM_RESET_STATE,
    isLoading: false,
    isError: false,
    error: null
  }
}

export function isCartInvalid (cartState, isCartInvalid) {
  return {
    type: cartActionTypes.IS_CART_INVALID,
    cartState,
    is_cart_invalid: isCartInvalid
  }
}

export function redirectToOrderDetailsPage (cartState) {
  return {
    type: cartActionTypes.REDIRECT_TO_ORDER_DETAILS_PAGE,
    cartState,
    isRedirectToOrderDetailsPage: true
  }
}

export function deleteCartLoading (
  cartState,
  source,
  facilityCode,
  sourceType,
  patientId,
  addMedicine,
  isAssignPatientToCart
) {
  return {
    type: cartActionTypes.DELETE_CART_LOADING,
    cartState: cartState,
    isLoading: true,
    source: source,
    facility_code: facilityCode,
    source_type: sourceType,
    patientId: patientId,
    addMedicine,
    isAssignPatientToCart
  }
}

export function deleteCartSuccess (cartState) {
  return {
    type: cartActionTypes.DELETE_CART_SUCCESS,
    cartState,
    isLoading: false
  }
}

export function deleteCartFailure (cartState, error) {
  return {
    type: cartActionTypes.DELETE_CART_FAILURE,
    cartState,
    isLoading: false,
    isError: true,
    error: error
  }
}

export function resetPaymentInitiateErrorState (cartState) {
  return {
    type: cartActionTypes.RESET_PAYMENT_INITIATE_ERROR_STATE,
    cartState,
    isError: false,
    error: {}
  }
}

export function updateLassuredExpressFlag (cartState, { isDialogOpen }) {
  return {
    type: cartActionTypes.UPDATE_LFASSURED_EXPRESS_FLAG,
    cartState,
    isLAssuredLExpressAlertOpen: isDialogOpen
  }
}

export function updateShowNoCartIdDialogFlag (cartState, isShowNoCartIdDialog) {
  return {
    type: cartActionTypes.UPDATE_SHOW_NO_CART_ID_DIALOG_FLAG,
    cartState,
    isShowNoCartIdDialog: isShowNoCartIdDialog
  }
}
