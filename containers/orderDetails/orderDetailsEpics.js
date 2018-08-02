import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  GET_ORDER_DETAILS_LOADING
} from './orderDetailsActionTypes'

import {
  getOrderDetailsSuccess,
  getOrderDetailsFailure
} from './orderDetailsActions'

import {
  getOrderDetails$
} from '../../services/api'

import {
  getOrderStatusProgressDetails
} from '../../utils/getOrderStatusProgressDetails'

import {
  formatDateWithMonth
} from '../../utils/FormatDate'

/**
 * Represents to the epic of get molecule detail/summary
 * @param {object} action$ - this is the ActionsObservable
 * @param {object} store - to access the state from reducers
 */
export function getOrderDetails (action$, store) {
  return action$.pipe(
    ofType(GET_ORDER_DETAILS_LOADING),
    mergeMap(data => {
      return http(getOrderDetails$(data.orderId)).pipe(
        map(result => {
          const payload = result.body.payload
          const orderStatusProgressDetails = getOrderStatusProgressDetails(payload.state, payload.status)
          const promisedDeliveryDate = formatDateWithMonth(payload.promised_delivery_date)
          const createdAt = formatDateWithMonth(payload.created_at)

          return getOrderDetailsSuccess(
            data.orderDetailsState,
            payload,
            orderStatusProgressDetails,
            promisedDeliveryDate,
            createdAt
          )
        }),
        catchError(error => {
          return of(getOrderDetailsFailure(data.orderDetailsState, error))
        })
      )
    })
  )
}
