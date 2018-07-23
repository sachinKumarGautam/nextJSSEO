import { combineEpics } from 'redux-observable'

import {
  getMoleculeSummary
} from '../containers/moleculeDetails/moleculeEpics'

import {
  sendOTP, verifyOTP
} from '../containers/login/loginEpics'

import {
  registerCustomer,
  fetchUserInfo
} from '../containers/user/customer/customerEpics'

import {
  getRelatedMedicines
} from '../containers/medicineList/medicineListEpics'

import {
  getProductDetails
} from '../containers/productDetails/productEpic'

import {
  searchMedicine
} from '../containers/searchMedicine/searchMedicineEpic'

import {
  getDeliveryDetailsList,
  submitDeliveryDetails
} from '../containers/deliveryDetails/deliveryDetailsEpics'

import {
  getPatientDetailsList,
  submitPatient
} from '../containers/patientDetails/patientDetailsEpics'

import {
  getOrderListDetails
} from '../containers/orderList/orderListEpics'

import {
  getPrescriptionList
} from '../containers/prescription/prescriptionEpics'

import {
  carePointsList
} from '../containers/carePoint/carePointEpics'

import {
  getAnonymousCartIdEpic,
  getCartDetailsEpic,
  // decrementCartItemLoadingEpic,
  decrementCartItemEpic,
  // incrementCartItemLoadingEpic,
  incrementCartItemEpic,
  // deleteCartItemLoadingEpic,
  deleteCartItemEpic,
  savePatientToCartEpic,
  cartTransferEpic,
  saveDeliveryAddressToCartEpic,
  uploadPrescriptionEpic,
  deletePrescriptionEpic,
  submitOrderEpic,
  applyCouponCode,
  optDoctorCallback,
  verifyPaymentEpic
} from '../containers/cartDetails/cartEpics'

import {
  checkPincode
} from '../containers/location/pincode/pincodeEpic'

import {
  submitRefillDate
} from '../containers/thankYou/thankYouEpics'
// import * as actions from './actions'
// import * as types from './actionTypes'

import {
  getPatientPastMedicineList
} from '../containers/refillPatients/refillEpics'

import {
  getBackGroungImages
} from '../containers/homePage/homePageEpics'

export const rootEpic = combineEpics(
  getMoleculeSummary,
  getRelatedMedicines,
  sendOTP,
  verifyOTP,
  registerCustomer,
  fetchUserInfo,
  getProductDetails,
  getAnonymousCartIdEpic,
  getCartDetailsEpic,
  // decrementCartItemLoadingEpic,
  decrementCartItemEpic,
  // incrementCartItemLoadingEpic,
  incrementCartItemEpic,
  // deleteCartItemLoadingEpic,
  deleteCartItemEpic,
  searchMedicine,
  fetchUserInfo,
  getDeliveryDetailsList,
  getPatientDetailsList,
  savePatientToCartEpic,
  saveDeliveryAddressToCartEpic,
  getOrderListDetails,
  getPrescriptionList,
  carePointsList,
  submitPatient,
  cartTransferEpic,
  uploadPrescriptionEpic,
  deletePrescriptionEpic,
  submitOrderEpic,
  checkPincode,
  submitDeliveryDetails,
  submitRefillDate,
  getPatientPastMedicineList,
  getBackGroungImages,
  applyCouponCode,
  optDoctorCallback,
  verifyPaymentEpic
)
