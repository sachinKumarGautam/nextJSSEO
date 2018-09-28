import Raven from 'raven-js'
import { ravenConfig, sentryConfig } from './ravenConfig'

Raven.config(sentryConfig, ravenConfig).install()

const errorReporter = store => next => action => {
  const customerState = store.getState().customerState.payload
  const accessToken = store.getState().loginState.payload.verification
    .access_token
  const cartId = store.getState().cartState.payload.uid

  if (action.isError) {
    const error = action.error

    Raven.setUserContext({
      email: customerState.email,
      id: customerState.mobile,
      full_name: customerState.full_name
    })

    Raven.captureException(error, {
      extra: {
        action: action.type,
        accessToken: accessToken,
        cartId: cartId
      }
    })
    // throw error
  }
  return next(action)
}

export default errorReporter
