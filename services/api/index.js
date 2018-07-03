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

const getDeliveryDetailsList$ = customerId => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('account', 'customer/' + customerId + '/shipping-addresses', 'GET_LIST')
  })
)

const getPatientDetailsList$ = customerId => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('account', 'customer/' + customerId, 'CREATE')
  })
)

const getCarePointsList$ = (customerId, cashType) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('', 'wallet/' + customerId + '/transaction',
      'QUERY_STRING',
      {query_string:
        cashType === 'all' ?
          `size=100&page=0` : `cash-type=${cashType}&size=100&page=0`
      }
    )
  })
)

export {
  getMoleculeSummary$,
  getMedicineList$,
  getDeliveryDetailsList$,
  getPatientDetailsList$,
  getCarePointsList$
}
