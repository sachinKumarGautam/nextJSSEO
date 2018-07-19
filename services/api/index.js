import fetchUrl from '../fetchUrl'

import makeAjaxRequest from './makeAjaxRequest'

const getMoleculeSummary$ = saltIds => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('catalog', 'salts', 'QUERY_STRING', {query_string: `salt-ids=${saltIds}`})
  })
)

const getMedicineList$ = (saltName, page, size) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('catalog', `medicines/salt/${saltName}`, 'QUERY_STRING', {query_string: `size=${size}&page=${page}`})
  })
)

const getCarePointsList$ = (customerId, cashType) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('', 'wallet/' + customerId + '/transaction',
      'QUERY_STRING',
      {query_string:
        cashType === 'all'
          ? `size=10&page=0` : `cash-type=${cashType}&size=100&page=0`
      }
    )
  })
)

const getDeliveryDetailsList$ = customerId => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('account', 'customer/' + customerId + '/shipping-addresses', 'GET_LIST')
  })
)

const getPatientDetailsList$ = customerId => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('account', 'customer/' + customerId, 'CREATE')
  })
)

const submitPatientDetails$ = (customerId, patientDetails) => (

  makeAjaxRequest({
    method: 'POST',
    url: fetchUrl('account', 'customer/' + customerId + '/patient', 'CREATE'),
    body: patientDetails
  })

)

const editPatientDetails$ = (customerId, patientDetails, patientId) => (

  makeAjaxRequest({
    method: 'PUT',
    url: fetchUrl('account', 'customer/' + customerId + '/patient/' + patientId, 'CREATE'),
    body: patientDetails
  })
)

const getOrderList$ = (customerId, page, size) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('order', `customer/${customerId}/order-summary?size=${size}&page=${page}`, 'CREATE')
  })
)

const getPrescriptionList$ = (customerId) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('account', 'customer/' + customerId + '/patient-prescriptions', 'GET_LIST')
  })
)

const verifyOtp$ = (mobile, otp) => (
  makeAjaxRequest({
    method: 'POST',
    url: fetchUrl('', 'oauth/token', 'LOGIN', {username: mobile, password: otp}),
    authHeader: 'Basic bXNpdGUtY29uc3VtZXItY2xpZW50OnNlY3JldA=='
  })
)

const sendOtp$ = (data) => (
  makeAjaxRequest({
    method: 'POST',
    url: fetchUrl('auth', 'otp', 'CREATE'),
    contentType: 'application/x-www-form-urlencoded',
    body: {mobile: data.mobile}
  })
)

const fetchUserInfo$ = (mobileNumber) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('account', 'customer/mobile/' + mobileNumber, 'GET_LIST')
  })
)

const getProductDetails$ = (productName, location) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('catalog', `medicine/slug/${productName}?location=${location}`, 'GET_LIST')
  })

)

const registerCustomer$ = (data) => (
  makeAjaxRequest({
    method: 'POST',
    url: fetchUrl('account', 'customer', 'GET_LIST'),
    body: data
  })
)

const searchMedicine$ = (inputValue, facilityCode) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('catalog', 'medicine/search', 'QUERY_STRING', {query_string: `q=${inputValue}&facility-code=${facilityCode}`})
  })
)

const getAnonymousCartId$ = (source, facilityCode, sourceType = '') => (
  makeAjaxRequest({
    method: 'POST',
    url: fetchUrl('cart', '', 'CREATE'),
    body: {
      source: source,
      facility_code: facilityCode,
      source_type: sourceType
    }
  })
)

const getCartDetails$ = cartUid => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('cart', cartUid, 'GET_LIST')
  })
)

const putCartItem$ = (cartUid, cartItem) => (
  makeAjaxRequest({
    method: 'PUT',
    url: fetchUrl('cart', cartUid + '/item', 'GET_LIST'),
    body: cartItem
  })
)

const deleteCartItem$ = (cartUid, cartItemSku) => (
  makeAjaxRequest({
    method: 'DELETE',
    url: fetchUrl('cart', cartUid + '/item/sku/' + cartItemSku, 'GET_LIST')
  })
)

const savePatientToCart$ = (cartId, patientId) => (
  makeAjaxRequest({
    method: 'PATCH',
    url: fetchUrl('cart', cartId + '/assign/patient', 'GET_LIST'),
    body: {
      patient_id: patientId
    }
  })
)

const saveDeliveryAddressToCart$ = (cartId, shippingAddressId) => (
  makeAjaxRequest({
    method: 'PATCH',
    body: shippingAddressId,
    url: fetchUrl('cart', cartId + '/shipping-address', 'GET_LIST')
  })
)

const cartTransfer$ = cartUid => (
  makeAjaxRequest({
    method: 'PATCH',
    url: fetchUrl('cart', cartUid + '/transfer', 'CREATE')
  })
)

const uploadPrescriptionEpic$ = (cartId, formData) => (
  makeAjaxRequest({
    method: 'METHOD_UPLOAD_FILE',
    url: fetchUrl('cart', cartId + '/prescription', 'CREATE'),
    body: formData
  })
)

const deletePrescriptionEpic$ = (cartId, prescriptionId) => (
  makeAjaxRequest({
    method: 'DELETE',
    url: fetchUrl('cart', cartId + '/prescription/' + prescriptionId, 'GET_LIST')
  })
)

const submitOrder$ = (cartState, body) => (
  makeAjaxRequest({
    method: 'POST',
    url: fetchUrl('order', 'cart', 'CREATE'),
    body: body
  })
)

const checkPincode$ = (pincode) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('shipping', 'place/pincode/' + pincode, 'GET_LIST')
  })
)

const submitDeliveryDetails$ = (customerId, deliveryAddressData) => (

  makeAjaxRequest({
    method: 'POST',
    url: fetchUrl('account', 'customer/' + customerId + '/shipping-address', 'GET_LIST'),
    body: deliveryAddressData
  })

)

const submitRefillDate$ = (orderId, refillDay) => (
  makeAjaxRequest({
    method: 'PUT',
    url: fetchUrl('order', orderId + '/repeat-in-days', 'GET_LIST'),
    body: {
      repeat_day: refillDay
    }
  })
)

const getPatientPastMedicineList$ = (patientId, facilityCode) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('account', 'patient/' + patientId + '/past-medicines',
      'QUERY_STRING', {query_string: `facility-code=${facilityCode}`})
  })
)

const getSliderImages$ = tagName => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('account', 'offer/tag/' + tagName, 'GET_LIST')
  })
)

const applyCouponForCart$ = (cartUid, couponCode) => (
  makeAjaxRequest({
    method: 'PATCH',
    url: fetchUrl('cart', cartUid + '/coupon/' + couponCode, 'CREATE')
  })
)

const teleConsultation$ = (cartUid, isDoctorCallback) => (
  makeAjaxRequest({
    method: 'PATCH',
    url: fetchUrl('cart', cartUid + '/doctor-callback', 'CREATE'),
    body: {
      doctor_callback: isDoctorCallback
    }
  })
)

const getCityStateUsingPincode$ = (pincode) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('shipping', 'place/pincode/' + pincode, 'GET_LIST')
  })
)

const searchLocalityForPincode$ = (state, city, pincode, searchString) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('shipping', 'place/' + state + '/' + city + '/' + pincode + '?locality=' + searchString, 'GET_LIST')
  })
)

export {
  getMoleculeSummary$,
  getMedicineList$,
  getCarePointsList$,
  getAnonymousCartId$,
  getCartDetails$,
  getDeliveryDetailsList$,
  getPatientDetailsList$,
  getOrderList$,
  getPrescriptionList$,
  verifyOtp$,
  sendOtp$,
  fetchUserInfo$,
  registerCustomer$,
  submitPatientDetails$,
  putCartItem$,
  deleteCartItem$,
  savePatientToCart$,
  saveDeliveryAddressToCart$,
  cartTransfer$,
  uploadPrescriptionEpic$,
  deletePrescriptionEpic$,
  submitOrder$,
  getProductDetails$,
  searchMedicine$,
  checkPincode$,
  submitDeliveryDetails$,
  submitRefillDate$,
  getPatientPastMedicineList$,
  getSliderImages$,
  applyCouponForCart$,
  teleConsultation$,
  editPatientDetails$,
  getCityStateUsingPincode$,
  searchLocalityForPincode$
}
