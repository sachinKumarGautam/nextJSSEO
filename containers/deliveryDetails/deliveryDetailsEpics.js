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
          const payload = result.body.payload
          const modifiedPayload = payload.map(address => {
            return {
              ...address,
              type: address.type ? address.type : 'Others'
            }
          })

          return getDeliveryDetailsListSuccess(data.deliveryDetailsState, modifiedPayload)
        }),
        catchError(error => {
          return of(getDeliveryDetailsListFailure(data.deliveryDetailsState, error))
        })
      )
    })
  )
}
