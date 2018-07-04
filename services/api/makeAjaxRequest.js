import { store } from '../../redux'
import ajax from 'universal-rx-request' // because standard AjaxObservable only works in browser
const timeout = 60000

// const defaultAuthHeader = process.env.REACT_APP_ACCESS_TOKEN
const defaultAuthHeader = 'Bearer 076cfb92-f233-446e-9ed6-30c0b7b93831'

export default function makeAjaxRequest (params) {
  let contentType, // handle custom content type
    authHeader // handle custome authorization token

  // get access_token from login state
  let accessToken = store.getState().loginState.payload.verification.access_token
  // function to set content type of ajax request
  if (!params.contentType) {
    contentType = 'application/json'
  } else {
    contentType = params.contentType
  }

  // function to set authorization token for ajaz request
  if (params.authHeader) {
    authHeader = params.authHeader
  } else if (params.firebaseAuthHeader) {
    authHeader = params.firebaseAuthHeader
  } else if (accessToken) {
    authHeader = `Bearer ${accessToken}`
  } else {
    authHeader = defaultAuthHeader
  }

  switch (params.method) {
    case 'GET':
      return ajax({
        url: params.url,
        method: 'get',
        timeout: timeout,
        options: {
          headers: {
            'Authorization': authHeader
          }
        }
      })

    case 'POST':
      return ajax({
        url: params.url,
        method: 'post',
        timeout: timeout,
        options: {
          headers: {
            'Authorization': authHeader,
            'Content-Type': contentType
          }
        },
        data: params.body
      })

    case 'PUT':
      return ajax({
        url: params.url,
        method: 'put',
        timeout: timeout,
        options: {
          headers: {
            'Authorization': authHeader,
            'Content-Type': contentType
          }
        },
        data: params.body
      })

    case 'METHOD_UPLOAD_FILE':
      return ajax({
        url: params.url,
        method: 'put',
        timeout: timeout,
        options: {
          headers: {
            'Authorization': authHeader
          }
        },
        data: params.body
      })

    case 'DELETE':
      return ajax({
        url: params.url,
        method: 'delete',
        timeout: timeout,
        body: params.body,
        options: {
          headers: {
            'Authorization': authHeader
          }
        }
      })

    case 'PATCH':
      return ajax({
        url: params.url,
        method: 'patch',
        timeout: timeout,
        body: params.body,
        options: {
          headers: {
            'Authorization': authHeader,
            'Content-Type': contentType
          }
        }
      })

    default:
      return false
  }
}
