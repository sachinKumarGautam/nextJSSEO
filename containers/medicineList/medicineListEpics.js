import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import ajax from 'universal-rx-request' // because standard AjaxObservable only works in browser
import { ofType } from 'redux-observable'

import {
  GET_RELATED_MEDICINES_LOADING
} from './medicineListActionTypes'

import {
  getRelatedMedicinesSuccess,
  getRelatedMedicinesFailure
} from './medicineListActions'

export function getRelatedMedicines (action$, store) {
  return action$.pipe(
    ofType(GET_RELATED_MEDICINES_LOADING),
    mergeMap(data => {
      return ajax({
        url: `http://sandbox.lifcare.in/v6/catalog/medicines/salt/Multivitamin?size=3`
      }).pipe(
        map(result => {
          console.log('API response', result)
          return getRelatedMedicinesSuccess(data.moleculeState, result.body.payload.content)
        }),
        catchError(error => {
          return of(getRelatedMedicinesFailure(data.moleculeState, error))
        })
      )
    })
  )
}
