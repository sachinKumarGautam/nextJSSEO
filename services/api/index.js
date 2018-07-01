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

const getPrescriptionList$ = (customerId) => (
  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('account', 'customer/' + customerId + '/patient-prescriptions', 'GET_LIST')
  })
)

export {
  getMoleculeSummary$,
  getMedicineList$,
  getPrescriptionList$
}
