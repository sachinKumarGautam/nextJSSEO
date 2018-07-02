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

const searchMedicine$ = (inputValue, facilityCode) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('catalog', 'medicine/search', 'QUERY_STRING', {query_string: `q=${inputValue}&facility-code=${100}`})
  })
)

export {
  getMoleculeSummary$,
  getMedicineList$,
  verifyOtp$,
<<<<<<< HEAD
  sendOtp$,
  fetchUserInfo$,
  getProductDetails$
=======
  searchMedicine$
>>>>>>> e1a3a977dfd631c42aa70cb5bb0795d11132c50b
}
