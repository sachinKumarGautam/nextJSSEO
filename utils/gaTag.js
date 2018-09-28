const GA_TRACKING_ID_PROD = 'UA-102190877-5'
const GA_TRACKING_ID_DEV = 'UA-102190877-6'

export const GA_TRACKING_ID = process.env.NODE_ENV === 'production'
  ? GA_TRACKING_ID_PROD
  : GA_TRACKING_ID_DEV

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
