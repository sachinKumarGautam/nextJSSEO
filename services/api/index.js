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
    url: fetchUrl('order', `customer/${customerId}/orders?size=${size}&page=${page}`, 'CREATE')
  })
)

export {
  getMoleculeSummary$,
  getMedicineList$,
  getOrderList$
}
