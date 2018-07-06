import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map, flatmap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  GET_DELIVERY_DETAILS_LIST_LOADING, SUBMIT_DELIVERY_DETAILS_LOADING
} from './deliveryDetailsActionTypes'

import {
  getDeliveryDetailsListSuccess,
  getDeliveryDetailsListFailure,
  submitDeliveryDetailsSuccess,
  submitDeliveryDetailsFailure,
  getDeliveryDetailsListLoading
} from './deliveryDetailsActions'

import {
  getDeliveryDetailsList$,
  submitDeliveryDetails$
} from '../../services/api'

/**
 * Represents to the epic of get delivery details
 * @param {object} action$ - this is the ActionsObservable
 * @param {object} store - to access the state from reducers
 */
export function getDeliveryDetailsList (action$, store) {
  return action$.pipe(
    ofType(GET_DELIVERY_DETAILS_LIST_LOADING),
    mergeMap(data => {
      return http(getDeliveryDetailsList$(data.customerId)).pipe(
        map(result => {
          const payload = result.body.payload
          const modifiedPayload = payload.map(address => {
            // TODO developer: need to change in future - Others
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

export function submitDeliveryDetails (action$, store) {
  return action$.pipe(
    ofType(SUBMIT_DELIVERY_DETAILS_LOADING),
    mergeMap(data => {
      const deliveryDetailsState = store.getState().deliveryDetailsState
      return http(submitDeliveryDetails$(data.customerId, data.values)).pipe(
        flatMap(result => {
          data.setSubmitting(false)
          data.closeModal()
          return of(submitDeliveryDetailsSuccess(deliveryDetailsState, result),
            getDeliveryDetailsListLoading(deliveryDetailsState, data.customerId))
        }),
        catchError(error => {
          data.setSubmitting(false)
          return of(submitDeliveryDetailsFailure(deliveryDetailsState, error))
        })
      )
    })
  )
}
