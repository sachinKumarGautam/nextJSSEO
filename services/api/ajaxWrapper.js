import { Observable, map } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

import NProgress from 'nprogress'
import { store } from '../../redux'
import { isCartInvalid } from '../../containers/cartDetails/cartActions'

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
      // NProgress.done()
      if (data.error.status === 401) {
        // return re vaidate function
        // return tokenReAuth(propGenerator)
        return null
      } else if (data.error.status === 412) {
        const cartState = store.getState().cartState
        const isCart = true

        console.log(data)
        return of(
          Observable.throw(data),
          Observable.throw(store.dispatch(isCartInvalid(cartState, isCart)))
        )
      } else {
        // return error
        return Observable.throw(data)
      }
    })
}

export default http
