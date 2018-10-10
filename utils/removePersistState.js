import { purgeStoredState } from 'redux-persist'
import { config, store } from '../redux'

import { logout } from '../containers/login/loginActions'

import { HOME_PAGE } from '../routes/RouteConstant'

export const logoutWithReload = () => {
  purgeStoredState(config)
  let promiseToLogout = new Promise(resolve => {
    resolve(store.dispatch(logout()))
  })
  promiseToLogout.then(() => {
    window.location.href = HOME_PAGE
  })
}
