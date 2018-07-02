import fetchUrl from '../fetchUrl'

import makeAjaxRequest from './makeAjaxRequest'

const getMoleculeSummary$ = saltIds => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('catalog', 'salts', 'QUERY_STRING', {query_string: `salt-ids=${saltIds}`})
  })
)

const getMedicineList$ = (saltName, page, size) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('catalog', `medicines/salt/${saltName}`, 'QUERY_STRING', {query_string: `size=${size}&page=${page}`})
  })
)

const verifyOtp$ = (mobile, otp) => (
  makeAjaxRequest({
    method: 'POST',
    url: fetchUrl('', 'oauth/token', 'LOGIN', {username: mobile, password: otp}),
    authHeader: 'Basic bXNpdGUtY29uc3VtZXItY2xpZW50OnNlY3JldA=='
  })
)

const sendOtp$ = (data) => (
  makeAjaxRequest({
    method: 'POST',
    url: fetchUrl('auth', 'otp', 'CREATE'),
    contentType: 'application/x-www-form-urlencoded',
    body: {mobile: data.mobile}
  })
)

export {
  getMoleculeSummary$,
  getMedicineList$,
  verifyOtp$,
  sendOtp$
}
