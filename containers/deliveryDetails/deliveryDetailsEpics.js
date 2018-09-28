import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map, flatMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  GET_DELIVERY_DETAILS_LIST_LOADING,
  SUBMIT_DELIVERY_DETAILS_LOADING,
  GET_LOCALITY_LIST_LOADING
} from './deliveryDetailsActionTypes'

import {
  getDeliveryDetailsListSuccess,
  getDeliveryDetailsListFailure,
  submitDeliveryDetailsSuccess,
  submitDeliveryDetailsFailure,
  getDeliveryDetailsListLoading,
  getLocalityDetailListSuccess,
  getLocalityDetailListFailure
} from './deliveryDetailsActions'

import { saveDeliveryAddressToCartLoading } from '../cartDetails/cartActions'

import {
  getDeliveryDetailsList$,
  submitDeliveryDetails$,
  searchLocalityForPincode$,
  editDeliveryDetails$
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

          return getDeliveryDetailsListSuccess(
            data.deliveryDetailsState,
            modifiedPayload
          )
        }),
        catchError(errorResponse => {
          let isLoading
          let isError
          if (errorResponse.error.status === 404) {
            isLoading = false
            isError = false
          } else {
            isLoading = true
            isError = true
          }
          return of(
            getDeliveryDetailsListFailure(
              data.deliveryDetailsState,
              errorResponse,
              isLoading,
              isError
            )
          )
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
      let api

      if (data.isEdit) {
        api = editDeliveryDetails$(
          data.customerId,
          data.values,
          data.deliveryDetailsState.addressForm.id
        )
      } else {
        api = submitDeliveryDetails$(data.customerId, data.values)
      }

      return http(api).pipe(
        flatMap(result => {
          let modifiedAddressDetailsList = data.deliveryDetailsState.payload

          if (data.isEdit) {
            modifiedAddressDetailsList = data.deliveryDetailsState.payload.map(
              address => {
                if (data.deliveryDetailsState.addressForm.id === address.id) {
                  return {
                    ...address,
                    full_name: result.body.payload.full_name,
                    mobile: result.body.payload.mobile,
                    pincode: result.body.payload.pincode,
                    locality: result.body.payload.locality,
                    street1: result.body.payload.street1,
                    street2: result.body.payload.street2,
                    city: result.body.payload.city,
                    state: result.body.payload.state
                  }
                } else {
                  return {
                    ...address
                  }
                }
              }
            )
          }

          data.setSubmitting(false)
          data.closeModal()

          if (data.isCartPage) {
            return of(
              submitDeliveryDetailsSuccess(
                deliveryDetailsState,
                modifiedAddressDetailsList
              ),
              saveDeliveryAddressToCartLoading(
                cartState,
                result.body.payload.id
              ),
              getDeliveryDetailsListLoading(
                deliveryDetailsState,
                data.customerId
              )
            )
          } else {
            if (data.isEdit) {
              return of(
                submitDeliveryDetailsSuccess(
                  deliveryDetailsState,
                  modifiedAddressDetailsList
                )
              )
            } else {
              return of(
                submitDeliveryDetailsSuccess(
                  deliveryDetailsState,
                  modifiedAddressDetailsList
                ),
                getDeliveryDetailsListLoading(
                  deliveryDetailsState,
                  data.customerId
                )
              )
            }
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
          return getLocalityDetailListSuccess(
            data.deliveryDetailsState,
            result.body.payload.content
          )
        }),
        catchError(error => {
          return of(
            getLocalityDetailListFailure(data.deliveryDetailsState, error)
          )
        })
      )
    })
  )
}
