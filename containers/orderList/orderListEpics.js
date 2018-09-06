import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  GET_ORDER_LIST_DETAILS_LOADING
} from './orderListActionTypes'

import {
  getOrderListDetailsSuccess,
  getOrderListDetailsFailure
} from './orderListActions'

import {
  getOrderList$
} from '../../services/api'

import {
  getOrderStatusProgressDetails
} from '../../utils/getOrderStatusProgressDetails'

/**
 * Represents to the epic of get medicine list.
 * @param {object} action$ - this is the ActionsObservable
 * @param {object} store - to access the state from reducers
 */
export function getOrderListDetails (action$, store) {
  return action$.pipe(
    ofType(GET_ORDER_LIST_DETAILS_LOADING),
    mergeMap(data => {
      return http(getOrderList$(data.customerId, data.page, data.size)).pipe(
        map(result => {
          let modifiedPayload =
            [...data.orderListState.payload, ...result.body.payload.content]
          const modifiedResponse = modifiedPayload.map(payload => {
            const orderStatus = getOrderStatusProgressDetails(payload.state, payload.status)
            const viewStatus = orderStatus.viewStatus

            return {
              ...payload,
              viewStatus: viewStatus
            }
          })

          return getOrderListDetailsSuccess(
            data.orderListState,
            modifiedResponse
          )
        }),
        catchError(error => {
          return of(getOrderListDetailsFailure(data.orderListState, error))
        })
      )
    })
  )
}
