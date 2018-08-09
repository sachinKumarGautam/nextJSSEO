import { Observable, map } from 'rxjs/Observable'
import NProgress from 'nprogress'

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
      NProgress.done()
      if (data.status === 401) {
        // return re vaidate function
        // return tokenReAuth(propGenerator)
        return null
      } else {
        // return error
        return Observable.throw(data)
      }
    })
}

export default http
