import { combineReducers } from 'redux'
// import { createMigrate, persistCombineReducers } from 'redux-persist'
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
// import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native
// import { migrations } from './persistMigration'

import moleculeDetailsReducer from '../containers/moleculeDetails/moleculeReducer'
import loginReducer from '../containers/login/loginReducers'
import customerReducer from '../containers/user/customer/customerReducer'
import medicineListReducer from '../containers/medicineList/medicineLIstReducer'
import prescriptionReducers from '../containers/prescription/prescriptionReducers'
import carePointReducer from '../containers/carePoint/carePointReducer'

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
  prescriptionState: prescriptionReducers,
  carePointState: carePointReducer
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
