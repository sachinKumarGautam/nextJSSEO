import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  GET_ORDER_DETAILS_LOADING,
  GET_PAYMENT_CHANNELS_LOADING
} from './orderDetailsActionTypes'

import {
  getOrderDetailsSuccess,
  getOrderDetailsFailure,
  getPaymentChannelsSuccess,
  getPaymentChannelsFailure
} from './orderDetailsActions'

import {
  getOrderDetails$,
  getPaymentChannels$
} from '../../services/api'

import {
  getOrderStatusProgressDetails
} from '../../utils/getOrderStatusProgressDetails'

import {
  formatDateWithMonth
} from '../../utils/FormatDate'

/**
 * Represents to the epic of get order detail/summary
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
          const modifiedPayload = {
            ...payload,
            viewStatus: orderStatusProgressDetails.viewStatus,
            activeStep: orderStatusProgressDetails.activeStep,
            promised_delivery_date: formatDateWithMonth(payload.promised_delivery_date),
            created_at: formatDateWithMonth(payload.created_at),
            seller_name: payload.seller_name ? payload.seller_name : 'trusted channel partners',
            shipping_address: {
              ...payload.shipping_address,
              type: payload.shipping_address.type ? payload.shipping_address.type : 'Others'
            }
          }

          return getOrderDetailsSuccess(
            data.orderDetailsState,
            modifiedPayload
          )
        }),
        catchError(error => {
          return of(getOrderDetailsFailure(data.orderDetailsState, error))
        })
      )
    })
  )
}

export function getPaymentChannelsEpic (action$, store) {
  return action$.pipe(
    ofType(GET_PAYMENT_CHANNELS_LOADING),
    mergeMap(data => {
      return http(getPaymentChannels$(data.orderId)).pipe(
        map(result => {
          const payload = result.body.payload

          return getPaymentChannelsSuccess(data.orderDetailsState, payload)
        }),
        catchError(error => {
          return of(getPaymentChannelsFailure(data.orderDetailsState, error))
        })
      )
    })
  )
}
