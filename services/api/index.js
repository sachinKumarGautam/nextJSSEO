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

const fetchUserInfo$ = (mobileNumber) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('account', 'customer/mobile/' + mobileNumber, 'GET_LIST')
  })

)

const getProductDetails$ = (sku) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('catalog', `medicine/sku/${sku}/summary`, 'GET_LIST')
  })
)

const registerCustomer$ = (data) => (
  makeAjaxRequest({
    method: 'POST',
    url: fetchUrl('account', 'customer', 'GET_LIST'),
    body: data
  })
)

const getCarePointsList$ = (customerId, cashType) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('', 'wallet/' + customerId + '/transaction',
      'QUERY_STRING',
      {query_string:
        cashType === 'all'
          ? `size=100&page=0` : `cash-type=${cashType}&size=100&page=0`
      }
    )
  })
)

export {
  getMoleculeSummary$,
  getMedicineList$,
  verifyOtp$,
  sendOtp$,
  fetchUserInfo$,
  getProductDetails$,
  registerCustomer$,
  getCarePointsList$
}
