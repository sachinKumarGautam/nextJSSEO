import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  GET_ANONYMOUS_CART_ID_LOADING,
  GET_CART_DETAILS_LOADING,
  DECREMENT_CART_ITEM_LOADING,
  INCREMENT_CART_ITEM_LOADING,
  DELETE_CART_ITEM_LOADING
} from './cartActionTypes'

import {
  getAnonymousCartIdSuccess,
  getAnonymousCartIdFailure,
  getCartDetailsSuccess,
  getCartDetailsFailure,
  putCartItemSuccess,
  putCartItemFailure
} from './cartActions'

import {
  getAnonymousCartId$,
  getCartDetails$,
  putCartItem$,
  deleteCartItem$
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
          return getAnonymousCartIdSuccess(data.cartState, result.body.payload)
        }),
        catchError(error => {
          return of(getAnonymousCartIdFailure(data.cartState, error))
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
      return cartApiLoadingHandling(
          data.cartState,
          data.medicineSelected
        )
    })
  )
}

export function decrementCartItemEpic (action$, store) {
  return action$.pipe(
    ofType(DECREMENT_CART_ITEM_LOADING),
    mergeMap(data => {
      let cartUid = data.cartState.cartDetails.payload.uid

      let medicineDecremented = {
        name: data.medicineSelected.name,
        sku: data.medicineSelected.sku,
        quantity: data.medicineSelected.quantity - 1
      }

      return http(putCartItem$(cartUid, medicineDecremented)).pipe(
        map(result => {
          debugger
          return putCartItemSuccess(data.cartState, result.body.payload)
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
      return cartApiLoadingHandling(
          data.cartState,
          data.medicineSelected
        )
    })
  )
}

export function incrementCartItemEpic (action$, store) {
  return action$.pipe(
    ofType(INCREMENT_CART_ITEM_LOADING),
    mergeMap(data => {
      let cartUid = data.cartState.cartDetails.payload.uid

      let medicineDecremented = {
        name: data.medicineSelected.name,
        sku: data.medicineSelected.sku,
        quantity: data.medicineSelected.quantity + 1
      }

      return http(putCartItem$(cartUid, medicineDecremented)).pipe(
        map(result => {
          debugger
          return putCartItemSuccess(data.cartState, result.body.payload)
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
      return cartApiLoadingHandling(
          data.cartState,
          data.medicineSelected
        )
    })
  )
}

export function deleteCartItemEpic (action$, store) {
  return action$.pipe(
    ofType(DELETE_CART_ITEM_LOADING),
    mergeMap(data => {
      let cartUid = data.cartState.cartDetails.payload.uid
      let cartItemSku = data.medicineSelected.sku

      return http(deleteCartItem$(cartUid, cartItemSku)).pipe(
        map(result => {
          debugger
          return putCartItemSuccess(data.cartState, result.body.payload)
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
