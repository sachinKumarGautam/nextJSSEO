import {
  GET_LIST,
  GET_ONE,
  CREATE,
  SEARCH_MEDICINE,
  LOGIN,
  SEARCH_CUSTOMER,
  QUERY_STRING
} from './urlTypes'

import getApiServiceVersion from './apiVersion'

// const baseUrl = process.env.REACT_APP_BASE_URL
//const baseUrl = 'http://sandbox.lifcare.in'
 const baseUrl = 'https://lifcare.in'

function fetchUrl (
  apiServiceType,
  postfixUrl,
  type,
  paramsJson
) {
  let url = ''
  const versionNumber = getApiServiceVersion(apiServiceType)

  switch (type) {
    case GET_ONE: {
      if (apiServiceType) {
        if (postfixUrl) {
          url = `${baseUrl}/${versionNumber}/${apiServiceType}/${postfixUrl}/${paramsJson.id}`
        } else {
          url = `${baseUrl}/${versionNumber}/${apiServiceType}/${paramsJson.id}`
        }
      } else {
        url = `${baseUrl}/${versionNumber}/${postfixUrl}/${paramsJson.id}`
      }

      return url
    }

    case CREATE: {
      if (apiServiceType) {
        if (postfixUrl) {
          url = `${baseUrl}/${versionNumber}/${apiServiceType}/${postfixUrl}`
        } else {
          url = `${baseUrl}/${versionNumber}/${apiServiceType}`
        }
      } else {
        if (paramsJson.base_url) {
          url = paramsJson.base_url
        } else {
          url = `${baseUrl}/${versionNumber}/${postfixUrl}`
        }
      }

      return url
    }

    case GET_LIST: {
      if (apiServiceType) {
        if (postfixUrl) {
          url = `${baseUrl}/${versionNumber}/${apiServiceType}/${postfixUrl}`
        } else {
          url = `${baseUrl}/${versionNumber}/${apiServiceType}`
        }
      } else {
        if (paramsJson.base_url) {
          url = paramsJson.base_url
        } else {
          url = `${baseUrl}/${versionNumber}/${postfixUrl}`
        }
      }
      return url
    }

    case SEARCH_MEDICINE: {
      if (apiServiceType) {
        if (postfixUrl) {
          url = `${baseUrl}/${versionNumber}/${apiServiceType}/${postfixUrl}q=${paramsJson.q}&facility-code=${paramsJson.facilityCode}`
        } else {
          url = `${baseUrl}/${versionNumber}/${apiServiceType}q=${paramsJson.q}&facility-code=${paramsJson.facilityCode}`
        }
      } else {
        url = `${baseUrl}/${versionNumber}/${postfixUrl}q=${paramsJson.q}&facility-code=${paramsJson.facilityCode}`
      }

      return url
    }

    case LOGIN: {
      if (apiServiceType) {
        if (postfixUrl) {
          url = `${baseUrl}/${versionNumber}/${apiServiceType}/${postfixUrl}?grant_type=password&username=${paramsJson.username}&password=${paramsJson.password}`
        } else {
          url = `${baseUrl}/${versionNumber}/${apiServiceType}?grant_type=password&username=${paramsJson.username}&password=${paramsJson.password}`
        }
      } else {
        url = `${baseUrl}/${versionNumber}/${postfixUrl}?grant_type=password&username=${paramsJson.username}&password=${paramsJson.password}`
      }

      return url
    }

    case SEARCH_CUSTOMER: {
      if (apiServiceType) {
        if (postfixUrl) {
          url = `${baseUrl}/${versionNumber}/${apiServiceType}/${postfixUrl}q=${paramsJson.q}`
        } else {
          url = `${baseUrl}/${versionNumber}/${apiServiceType}q=${paramsJson.q}`
        }
      } else {
        url = `${baseUrl}/${versionNumber}/${postfixUrl}q=${paramsJson.q}`
      }

      return url
    }

    case QUERY_STRING: {
      if (apiServiceType) {
        if (postfixUrl) {
          url = `${baseUrl}/${versionNumber}/${apiServiceType}/${postfixUrl}?${paramsJson.query_string}`
        } else {
          url = `${baseUrl}/${versionNumber}/${apiServiceType}?${paramsJson.query_string}`
        }
      } else {
        url = `${baseUrl}/${versionNumber}/${postfixUrl}?${paramsJson.query_string}`
      }
      return url
    }

    default:
      throw new Error(`Unsupported fetch action type ${type}`)
  }
}
export default fetchUrl
