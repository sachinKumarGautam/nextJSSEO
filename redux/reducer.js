// import * as types from './actionTypes'

// const INITIAL_STATE = {
//   nextCharacterId: 1,
//   character: {},
//   isFetchedOnServer: false,
//   error: null
// }

// export default function reducer (state = INITIAL_STATE, { type, payload }) {
//   switch (type) {
//     case types.FETCH_CHARACTER_SUCCESS:
//       return {
//         ...state,
//         character: payload.response,
//         isFetchedOnServer: payload.isServer,
//         nextCharacterId: state.nextCharacterId + 1
//       }
//     case types.FETCH_CHARACTER_FAILURE:
//       return { ...state, error: payload.error, isFetchedOnServer: payload.isServer }
//     default:
//       return state
//   }
// }

import { combineReducers } from 'redux'
// import { createMigrate, persistCombineReducers } from 'redux-persist'
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
// import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native
// import { migrations } from './persistMigration'

import moleculeDetailsReducer from '../containers/moleculeDetails/moleculeReducer'
import loginReducer from '../containers/login/loginReducers'
import customerReducer from '../containers/user/customer/customerReducer'

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
  customerState: customerReducer
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
  return appReducer(state, action)
}

export default reducer
