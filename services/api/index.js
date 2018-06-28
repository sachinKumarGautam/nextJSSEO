import fetchUrl from '../fetchUrl'

import makeAjaxRequest from './makeAjaxRequest'

const getMoleculeSummary$ = saltIds => (

  makeAjaxRequest({
    method: 'GET',
    url: fetchUrl('catalog', 'salts', 'QUERY_STRING', {query_string: `salt-ids=${saltIds}`})
  })

)

export {
  getMoleculeSummary$
}
