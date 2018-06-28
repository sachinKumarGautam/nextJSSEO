import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import ajax from 'universal-rx-request' // because standard AjaxObservable only works in browser
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  GET_RELATED_MEDICINES_LOADING
} from './medicineListActionTypes'

import {
  getRelatedMedicinesSuccess,
  getRelatedMedicinesFailure
} from './medicineListActions'

import {
  getMedicineList$
} from '../../services/api'

export function getRelatedMedicines (action$, store) {
  return action$.pipe(
    ofType(GET_RELATED_MEDICINES_LOADING),
    mergeMap(data => {
      return http(getMedicineList$(data.saltName, data.page, data.size)).pipe(
        map(result => {
          return getRelatedMedicinesSuccess(data.moleculeState, result.body.payload.content)
        }),
        catchError(error => {
          return of(getRelatedMedicinesFailure(data.moleculeState, error))
        })
      )
    })
  )
}
