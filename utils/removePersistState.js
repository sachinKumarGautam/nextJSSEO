import { purgeStoredState } from 'redux-persist'
import { config, store } from '../redux'

import {logout} from '../containers/login/loginActions'

import {
  PRODUCT_DETAILS
} from '../routes/RouteConstant'

export const logoutWithReload = (path) => {
  purgeStoredState(config)
  let promiseToLogout = new Promise((resolve) => {
    resolve(store.dispatch(logout()))
  })
  promiseToLogout.then(() => {
    window.location.href = PRODUCT_DETAILS
  })
}
