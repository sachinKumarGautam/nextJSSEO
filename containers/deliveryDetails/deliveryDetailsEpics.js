import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map, flatMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  GET_DELIVERY_DETAILS_LIST_LOADING,
  SUBMIT_DELIVERY_DETAILS_LOADING,
  CHECK_PINCODE_DETAIL_LOADING,
  GET_LOCALITY_LIST_LOADING
} from './deliveryDetailsActionTypes'

import {
  getDeliveryDetailsListSuccess,
  getDeliveryDetailsListFailure,
  submitDeliveryDetailsSuccess,
  submitDeliveryDetailsFailure,
  getDeliveryDetailsListLoading,
  checkPincodeDetailSuccess,
  checkPincodeDetailFailure,
  updateAddressFormValue,
  getLocalityDetailListSuccess,
  getLocalityDetailListFailure
} from './deliveryDetailsActions'

import {
  saveDeliveryAddressToCartLoading
} from '../cartDetails/cartActions'

import {
  getDeliveryDetailsList$,
  submitDeliveryDetails$,
  getCityStateUsingPincode$,
  searchLocalityForPincode$
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
      const cartState = store.getState().cartState

      return http(submitDeliveryDetails$(data.customerId, data.values)).pipe(
        flatMap(result => {
          data.setSubmitting(false)
          data.closeModal()

          if (data.isCartPage) {
            return of(
              submitDeliveryDetailsSuccess(deliveryDetailsState, result),
              saveDeliveryAddressToCartLoading(cartState, result.body.payload.id),
              getDeliveryDetailsListLoading(deliveryDetailsState, data.customerId)
            )
          } else {
            return of(
              submitDeliveryDetailsSuccess(deliveryDetailsState, result),
              getDeliveryDetailsListLoading(deliveryDetailsState, data.customerId)
            )
          }
        }),
        catchError(error => {
          data.setSubmitting(false)
          return of(submitDeliveryDetailsFailure(deliveryDetailsState, error))
        })
      )
    })
  )
}

/**
 * Represents to the check the Pincode.
 * @param {object} action$ - this is the ActionsObservable
 * @param {object} store - to access the state from reducers
 */
export function checkPincodeServicability (action$, store) {
  return action$.pipe(
    ofType(CHECK_PINCODE_DETAIL_LOADING),
    mergeMap(data => {
      return http(getCityStateUsingPincode$(data.pincode)).pipe(
        flatMap(result => {
          return of(checkPincodeDetailSuccess(data.deliveryDetailsState, result.body.payload),
            updateAddressFormValue(data.deliveryDetailsState, 'city', result.body.payload.city),
            updateAddressFormValue(data.deliveryDetailsState, 'state', result.body.payload.state)
          )
        }),
        catchError(error => {
          return of(checkPincodeDetailFailure(data.deliveryDetailsState, error))
        })
      )
    })
  )
}

/**
 * Represents to the get the locality list on basis of pincode, state and city.
 * @param {object} action$ - this is the ActionsObservable
 * @param {object} store - to access the state from reducers
 */
export function getLocalityList (action$, store) {
  return action$.pipe(
    ofType(GET_LOCALITY_LIST_LOADING),
    mergeMap(data => {
      return http(
        searchLocalityForPincode$(
          data.state,
          data.city,
          data.pincode,
          data.queryString
        )
      ).pipe(
        map(result => {
          return (
            getLocalityDetailListSuccess(
              data.deliveryDetailsState,
              result.body.payload.content
            )
          )
        }),
        catchError(error => {
          return of(getLocalityDetailListFailure(data.deliveryDetailsState, error))
        })
      )
    })
  )
}
