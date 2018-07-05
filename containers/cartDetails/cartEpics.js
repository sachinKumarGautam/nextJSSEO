import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  GET_ANONYMOUS_CART_ID_LOADING,
  GET_CART_DETAILS_LOADING,
  DECREMENT_CART_ITEM_LOADING,
  INCREMENT_CART_ITEM_LOADING,
  DELETE_CART_ITEM_LOADING,
  SAVE_PATIENT_TO_CART_LOADING,
  SAVE_DELIVERY_ADDRESS_TO_CART_LOADING,
  CART_TRANSFER_LOADING
} from './cartActionTypes'

import {
  getAnonymousCartIdSuccess,
  getAnonymousCartIdFailure,
  getCartDetailsSuccess,
  getCartDetailsFailure,
  putCartItemSuccess,
  putCartItemFailure,
  savePatientToCartSuccess,
  savePatientToCartFailure,
  saveDeliveryAddressToCartSuccess,
  saveDeliveryAddressToCartFailure,
  cartTransferSuccess,
  cartTransferFailure
} from './cartActions'

import {
  getAnonymousCartId$,
  getCartDetails$,
  putCartItem$,
  deleteCartItem$,
  savePatientToCart$,
  saveDeliveryAddressToCart$,
  cartTransfer$
} from '../../services/api'

export function getAnonymousCartIdEpic (action$, store) {
  return action$.pipe(
    ofType(GET_ANONYMOUS_CART_ID_LOADING),
    mergeMap(data => {
      return http(getAnonymousCartId$(data.source, data.facility_code, data.source_type)).pipe(
        map(result => {
          return getAnonymousCartIdSuccess(data.cartState, result.body.payload)
        }),
        catchError(error => {
          return of(getAnonymousCartIdFailure(data.cartState, error))
        })
      )
    })
  )
}

export function getCartDetailsEpic (action$, store) {
  return action$.pipe(
    ofType(GET_CART_DETAILS_LOADING),
    mergeMap(data => {
      return http(getCartDetails$(data.cartUid)).pipe(
        map(result => {
          return getCartDetailsSuccess(data.cartState, result.body.payload)
        }),
        catchError(error => {
          return of(getCartDetailsFailure(data.cartState, error))
        })
      )
    })
  )
}

function cartApiLoadingHandling (
  cartState,
  medicineSelected
) {
  let cartItems = cartState.payload.cart_items.payload

  cartItems.forEach((cartMedicine, index) => {
    if (cartMedicine.id === medicineSelected.id) {
      cartItems[index] = {
        ...cartMedicine,
        isLoading: true,
        errorState: {
          ...cartMedicine.errorState,
          isError: false
        }
      }

      return false
    }
  })

  return putCartItemSuccess(
    cartState,
    cartItems
  )
}

function cartApiErrorHandling (
  cartState,
  medicineSelected,
  error
) {
  let cartItems = cartState.payload.cart_items.payload

  cartItems.forEach((cartMedicine, index) => {
    if (cartMedicine.id === medicineSelected.id) {
      cartItems[index] = {
        ...cartMedicine,
        isLoading: true,
        errorState: {
          ...cartMedicine.errorState,
          isError: true,
          error: error
        }
      }

      return false
    }
  })

  return putCartItemSuccess(
    cartState,
    cartItems
  )
}

export function decrementCartItemLoadingEpic (action$, store) {
  return action$.pipe(
    ofType(DECREMENT_CART_ITEM_LOADING),
    mergeMap(data => {
      return of(cartApiLoadingHandling(
          data.cartState,
          data.medicineSelected
        ))
    })
  )
}

export function decrementCartItemEpic (action$, store) {
  return action$.pipe(
    ofType(DECREMENT_CART_ITEM_LOADING),
    mergeMap(data => {
      let cartUid = data.cartState.payload.uid

      let medicineDecremented = {
        name: data.medicineSelected.name,
        sku: data.medicineSelected.sku,
        quantity: data.medicineSelected.quantity - 1
      }

      return http(putCartItem$(cartUid, medicineDecremented)).pipe(
        map(result => {
          return putCartItemSuccess(data.cartState, result.body.payload.cart_items)
        }),
        catchError(error => {
          return cartApiErrorHandling(
            data.cartState,
            data.medicineSelected,
            error
          )
        })
      )
    })
  )
}

export function incrementCartItemLoadingEpic (action$, store) {
  return action$.pipe(
    ofType(INCREMENT_CART_ITEM_LOADING),
    mergeMap(data => {
      return of(cartApiLoadingHandling(
          data.cartState,
          data.medicineSelected
        ))
    })
  )
}

export function incrementCartItemEpic (action$, store) {
  return action$.pipe(
    ofType(INCREMENT_CART_ITEM_LOADING),
    mergeMap(data => {
      const cartUid = data.cartState.payload.uid
      const medicineIncremented = {
        name: data.medicineSelected.name,
        sku: data.medicineSelected.sku,
        quantity: data.medicineSelected.quantity + 1
      }

      return http(putCartItem$(cartUid, medicineIncremented)).pipe(
        map(result => {
          return putCartItemSuccess(data.cartState, result.body.payload.cart_items)
        }),
        catchError(error => {
          return cartApiErrorHandling(
            data.cartState,
            data.medicineSelected,
            error
          )
        })
      )
    })
  )
}

export function deleteCartItemLoadingEpic (action$, store) {
  return action$.pipe(
    ofType(DELETE_CART_ITEM_LOADING),
    mergeMap(data => {
      return of(cartApiLoadingHandling(
          data.cartState,
          data.medicineSelected
        ))
    })
  )
}

export function deleteCartItemEpic (action$, store) {
  return action$.pipe(
    ofType(DELETE_CART_ITEM_LOADING),
    mergeMap(data => {
      let cartUid = data.cartState.payload.uid
      let cartItemSku = data.medicineSelected.sku

      return http(deleteCartItem$(cartUid, cartItemSku)).pipe(
        map(result => {
          return putCartItemSuccess(data.cartState, result.body.payload.cart_items)
        }),
        catchError(error => {
          return cartApiErrorHandling(
            data.cartState,
            data.medicineSelected,
            error
          )
        })
      )
    })
  )
}

export function savePatientToCartEpic (action$, store) {
  return action$.pipe(
    ofType(SAVE_PATIENT_TO_CART_LOADING),
    mergeMap(data => {
      return http(savePatientToCart$(data.cartId, data.patientId)).pipe(
        map(result => {
          debugger
          return savePatientToCartSuccess(data.cartState, result.body.payload.patients)
        }),
        catchError(error => {
          return of(savePatientToCartFailure(data.cartState, error))
        })
      )
    })
  )
}

export function saveDeliveryAddressToCartEpic (action$, store) {
  return action$.pipe(
    ofType(SAVE_DELIVERY_ADDRESS_TO_CART_LOADING),
    mergeMap(data => {
      const shippingAddressId = {
        shipping_address_id: data.shippingId
      }

      return http(
        saveDeliveryAddressToCart$(
            data.cartState.cartDetails.payload.uid,
            shippingAddressId
          )
        ).pipe(
        map(result => {
          debugger
          return saveDeliveryAddressToCartSuccess(data.cartState, result.body.payload.patients)
        }),
        catchError(error => {
          return of(saveDeliveryAddressToCartFailure(data.cartState, error))
        })
      )
    })
  )
}

export function cartTransferEpic (action$, store) {
  return action$.pipe(
    ofType(CART_TRANSFER_LOADING),
    switchMap(data => {
      return http(cartTransfer$(data.cartState.payload.uid)).pipe(
        map(result => {
          let cartItems = result.body.payload.cart_items
          let cartPrescriptions = result.body.payload.cart_prescriptions

          cartItems.forEach((cartMedicine, index) => {
            cartItems[index] = {
              ...cartItems[index],
              isCartMedicine: true
            }
          })

          let updatedCartPrescriptions = cartPrescriptions.map((prescription, index) => {
            return {
              ...prescription,
              url: prescription.location
            }
          })
          return cartTransferSuccess(
            data.cartState,
            result,
            cartItems,
            updatedCartPrescriptions
          )
        }),
        catchError(error => {
          return of(cartTransferFailure(data.cartState, error))
        })
      )
    })
  )
}
