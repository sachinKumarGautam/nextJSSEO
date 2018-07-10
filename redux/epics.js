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
  submitRefillDate
} from '../containers/thankYou/thankYouEpics'
// import * as actions from './actions'
// import * as types from './actionTypes'

// export const fetchUserEpic = (action$, store) =>
//   action$.pipe(
//     ofType(types.START_FETCHING_CHARACTERS),
//     mergeMap(action => {
//       return interval(3000).pipe(
//         mergeMap(x =>
//           actions.fetchCharacter({
//             isServer: store.getState().isServer
//           })
//         ),
//         takeUntil(action$.ofType(types.STOP_FETCHING_CHARACTERS))
//       )
//     })
//   )

// export const fetchCharacterEpic = (action$, store) =>
//   action$.pipe(
//     ofType(types.FETCH_CHARACTER),
//     mergeMap(action =>
//       ajax({
//         url: `https://swapi.co/api/people/${store.getState().nextCharacterId}`
//       }).pipe(
//         map(response =>
//           actions.fetchCharacterSuccess(
//             response.body,
//             store.getState().isServer
//           )
//         ),
//         catchError(error =>
//           of(
//             actions.fetchCharacterFailure(
//               error.response.body,
//               store.getState().isServer
//             )
//           )
//         )
//       )
//     )
//   )

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
  submitRefillDate
)
