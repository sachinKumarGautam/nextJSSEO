import { combineReducers } from 'redux'
// import { createMigrate, persistCombineReducers } from 'redux-persist'
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
// import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native
// import { migrations } from './persistMigration'

import moleculeDetailsReducer from '../containers/moleculeDetails/moleculeReducer'
import loginReducer from '../containers/login/loginReducers'
import customerReducer from '../containers/user/customer/customerReducer'
import medicineListReducer from '../containers/medicineList/medicineLIstReducer'
import productDetailsReducer from '../containers/productDetails/productDetailsReducer'
import searchMedicineReducer from '../containers/searchMedicine/searchMedicineReducer'
import deliveryDetailsReducer from '../containers/deliveryDetails/deliveryDetailsReducer'
import patientDetailsReducer from '../containers/patientDetails/patientDetailsReducer'
import orderListReducers from '../containers/orderList/orderListReducers'
import carePointReducer from '../containers/carePoint/carePointReducer'
import cartReducer from '../containers/cartDetails/cartReducer'
import checkPincodeReducer from '../containers/location/pincode/pincodeReducer'
import prescriptionReducers from '../containers/prescription/prescriptionReducers'
import thankYouReducer from '../containers/thankYou/thankYouReducer'
import refillReducer from '../containers/refillPatients/refillReducer'
import homePageReducers from '../containers/homePage/homePageReducers'
import orderDetailsReducer from '../containers/orderDetails/orderDetailsReducer'
import constantsReducer from '../components/constants/constantsReducer'

const isengard = (store, action) => {
  return (
    store ||
      {
        tempus: new Date().getTime(),
        gateNumber: '1.0.0',
        darkGateNumber: '1.0.0'
      }
  )
}

const appReducer = combineReducers({
  isengard,
  moleculeDetailsState: moleculeDetailsReducer,
  loginState: loginReducer,
  customerState: customerReducer,
  medicineListState: medicineListReducer,
  carePointState: carePointReducer,
  cartState: cartReducer,
  productDetailsState: productDetailsReducer,
  searchMedicineState: searchMedicineReducer,
  checkPincodeState: checkPincodeReducer,
  deliveryDetailsState: deliveryDetailsReducer,
  patientDetailsState: patientDetailsReducer,
  prescriptionState: prescriptionReducers,
  orderListState: orderListReducers,
  thankYouState: thankYouReducer,
  pastMedicineState: refillReducer,
  homePageState: homePageReducers,
  orderDetailsState: orderDetailsReducer,
  constantsState: constantsReducer
})

// export const persistConfig = {
//   key: 'lifCareContent1.0.0',
//   version: 0,
//   storage,
//   debug: true,
//   // blacklist: ['contentState'],
//   // stateReconciler: autoMergeLevel2,
//   // migrate: createMigrate(migrations, { debug: true })
// }

// const appReducer = persistCombineReducers(persistConfig, rootReducer)

const reducer = (state, action) => {
  // TODO: reset all state
  if (action.type === 'RESET_APPLICATION_STATE') {
    state = undefined
  }

  return appReducer(state, action)
}

export default reducer
