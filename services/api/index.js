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

const getOrderList$ = (customerId, page, size) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('order', `customer/${customerId}/order-summary?size=${size}&page=${page}`, 'CREATE')
  })
)

const getPrescriptionList$ = (customerId) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('account', 'customer/' + customerId + '/patient-prescriptions', 'GET_LIST')
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
  getOrderList$,
  getPrescriptionList$,
  getCarePointsList$
}
