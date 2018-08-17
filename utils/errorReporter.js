import Raven from 'raven-js'
import {
  SENTRY_DSN,
  SENTRY_DSN_DEV,
  SENTRY_KEY,
  SENTRY_KEY_DEV
} from './variables'

const sentryDsn = process.env.NODE_ENV === 'production' ? SENTRY_DSN : SENTRY_DSN_DEV
const sentryKey = process.env.NODE_ENV === 'production' ? SENTRY_KEY : SENTRY_KEY_DEV

Raven.config(`https://${sentryDsn}@sentry.io/${sentryKey}`).install()

const errorReporter = store => next => action => {
  const customerState = store.getState().customerState.payload
  const accessToken = store.getState().loginState.payload.verification.access_token
  const cartId = store.getState().cartState.payload.uid

  if (action.isError) {
    const error = action.error

    Raven.setUserContext({
      email: customerState.email,
      id: customerState.mobile,
      full_name: customerState.full_name
    })

    Raven.captureException(error,
      {
        extra: {
          action: action.type,
          accessToken: accessToken,
          cartId: cartId
        }
      }
    )
    // throw error
  }
  return next(action)
}

export default errorReporter
