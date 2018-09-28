import {
  SENTRY_DSN,
  SENTRY_DSN_DEV,
  SENTRY_KEY,
  SENTRY_KEY_DEV
} from './variables'

const sentryDsn = process.env.NODE_ENV === 'production'
  ? SENTRY_DSN
  : SENTRY_DSN_DEV
const sentryKey = process.env.NODE_ENV === 'production'
  ? SENTRY_KEY
  : SENTRY_KEY_DEV

const sentryConfig = `https://${sentryDsn}@sentry.io/${sentryKey}`

const ravenConfig = {
  // autoBreadcrumbs: false,
  autoBreadcrumbs: {
    xhr: false, // XMLHttpRequest
    console: false, // console logging
    dom: false, // DOM interactions, i.e. clicks/typing
    location: false, // url changes, including pushState/popState
    sentry: false
  },
  allowDuplicates: false,
  debug: false
}

export { sentryConfig, ravenConfig }
