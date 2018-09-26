import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

import NProgress from 'nprogress'
import { store } from '../../redux'
import { isCartInvalid } from '../../containers/cartDetails/cartActions'
import { handleSessionExpiration } from '../../containers/login/loginActions'
import { updateErrorDetail } from '../../containers/login/loginActions'

let http = propGenerator => {
  // route loader for api loading
  // start loader
  NProgress.start()
  return propGenerator
    .map(response => {
      // stop loader
      NProgress.done()
      return response
    })
    .catch(data => {
      // stop loader even request fails
      NProgress.done()
      if (
        data.error &&
        data.error.status === 401 &&
        data.error.response &&
        data.error.response.body.error === 'invalid_token'
      ) {
        const loginState = store.getState().loginState
        const isSessionExpired = true
        // return re vaidate function
        // return tokenReAuth(propGenerator)
        return of(
          Observable.throw(data),
          Observable.throw(
            store.dispatch(
              handleSessionExpiration(loginState, isSessionExpired)
            )
          )
        )
      } else if (data.error.status === 412) {
        const cartState = store.getState().cartState
        const isCart = true

        return of(
          Observable.throw(data),
          Observable.throw(store.dispatch(isCartInvalid(cartState, isCart)))
        )
      } else {
        // return error
        Observable.throw(store.dispatch(updateErrorDetail(data)))
        return Observable.throw(data)
      }
    })
}

export default http
