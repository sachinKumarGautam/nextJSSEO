import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  GET_DELIVERY_DETAILS_LIST_LOADING
} from './deliveryDetailsActionTypes'

import {
  getDeliveryDetailsListSuccess,
  getDeliveryDetailsListFailure
} from './deliveryDetailsActions'

import {
  getDeliveryDetailsList$
} from '../../services/api'

export function getDeliveryDetailsList (action$, store) {
  return action$.pipe(
    ofType(GET_DELIVERY_DETAILS_LIST_LOADING),
    mergeMap(data => {
      return http(getDeliveryDetailsList$(data.customerId)).pipe(
        map(result => {
          return getDeliveryDetailsListSuccess(data.deliveryDetailsState, result.body.payload)
        }),
        catchError(error => {
          return of(getDeliveryDetailsListFailure(data.deliveryDetailsState, error))
        })
      )
    })
  )
}
