import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, flatMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import { CHECK_PINCODE_LOADING } from './pincodeActionTypes'

import { checkPincodeSuccess, checkPincodeFailure } from './pincodeAction'
import {
  updateAddressFormValue
} from '../../deliveryDetails/deliveryDetailsActions'
import {
  updateLassuredExpressFlag,
  saveDeliveryAddressToCartLoading
} from '../../cartDetails/cartActions'

import { checkPincode$ } from '../../../services/api'
import http from '../../../services/api/ajaxWrapper'

import {
  SERVICE_TYPE_LFASSURED,
  SERVICE_TYPE_NORMAL,
  DELIVERY_OPTION_URGENT,
  DELIVERY_OPTION_NORMAL
} from '../../../components/constants/Constants'

/**
 * Represents to the epic of get medicine list.
 * @param {object} action$ - this is the ActionsObservable
 * @param {object} store - to access the state from reducers
 */
export function checkPincode (action$, store) {
  return action$.pipe(
    ofType(CHECK_PINCODE_LOADING),
    mergeMap(data => {
      const checkPincodeState = store.getState().checkPincodeState
      const cartState = store.getState().cartState
      const deliveryDetailsState = store.getState().deliveryDetailsState
      return http(checkPincode$(data.pincode)).pipe(
        flatMap(result => {
          if (data.isDeliveryAddress) {
            // handling from delivery address form call
            return of(
              checkPincodeSuccess(checkPincodeState, result),
              updateAddressFormValue(
                deliveryDetailsState,
                'city',
                result.body.payload.city
              ),
              updateAddressFormValue(
                deliveryDetailsState,
                'state',
                result.body.payload.state
              )
            )
          } else if (data.isCartAddressSelection) {
            // handling from cart page while selecting address
            const serviceType = result.body.payload.is_lc_assured_available
              ? SERVICE_TYPE_LFASSURED
              : SERVICE_TYPE_NORMAL

            const deliveryOption = result.body.payload.is_urgent_dl_available
              ? DELIVERY_OPTION_URGENT
              : DELIVERY_OPTION_NORMAL

            if (
              (cartState.payload.service_type !== serviceType &&
                cartState.payload.service_type === SERVICE_TYPE_LFASSURED) ||
              (cartState.payload.delivery_option !== deliveryOption &&
                cartState.payload.delivery_option === DELIVERY_OPTION_URGENT)
            ) {
              return of(
                checkPincodeSuccess(checkPincodeState, result),
                updateLassuredExpressFlag(cartState, {isDialogOpen: true})
              )
            } else {
              return of(
                checkPincodeSuccess(checkPincodeState, result),
                saveDeliveryAddressToCartLoading(cartState, data.addressId)
              )
            }
          } else {
            // default pincode handling
            setTimeout(() => {
              data.handleClose()
            }, 350)
            data.setSubmitting(false)
            if (typeof data.incrementCartItemLoading === 'function') {
              // only invokes in case of cart item increment
              // checks if any add to cart function is comming from parent and invokes it
              return of(
                checkPincodeSuccess(checkPincodeState, result),
                data.incrementCartItemLoading(
                  cartState,
                  data.inProgressCartItem
                )
              )
            } else {
              return of(checkPincodeSuccess(checkPincodeState, result))
            }
          }
        }),
        catchError(error => {
          if (data.isDeliveryAddress || data.isCartAddressSelection) {
            return of(
              checkPincodeFailure(
                checkPincodeState,
                error
              )
            )
          } else {
            data.setSubmitting(false)
            return of(
              checkPincodeFailure(
                checkPincodeState,
                error
              )
            )
          }
        })
      )
    })
  )
}
