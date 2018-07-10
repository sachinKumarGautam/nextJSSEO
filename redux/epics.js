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
  submitOrderEpic
} from '../containers/cartDetails/cartEpics'

import {
  checkPincode
} from '../containers/location/pincode/pincodeEpic'

import {
  getPatientPastMedicineList
} from '../containers/refillPatients/refillEpics'

export const rootEpic = combineEpics(
  getMoleculeSummary,
  getRelatedMedicines,
  carePointsList,
  sendOTP,
  verifyOTP,
  registerCustomer,
  getRelatedMedicines,
  fetchUserInfo,
  getProductDetails,
  getRelatedMedicines,
  carePointsList,
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
  getAnonymousCartIdEpic,
  checkPincode,
  submitDeliveryDetails,
  getPatientPastMedicineList
)
