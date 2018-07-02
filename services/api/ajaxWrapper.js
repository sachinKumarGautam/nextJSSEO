import { Observable } from 'rxjs/Observable'

let http = (propGenerator) => {
  console.log(propGenerator)
  return propGenerator
    .catch(data => {
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
