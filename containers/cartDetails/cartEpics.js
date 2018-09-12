import { of } from 'rxjs/observable/of'
import {
  mergeMap,
  catchError,
  map,
  switchMap,
  flatMap,
  debounceTime
} from 'rxjs/operators'
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
  CART_TRANSFER_LOADING,
  UPLOAD_PRESCRIPTION_LOADING,
  DELETE_PRESCRIPTION_LOADING,
  SUBMIT_ORDER_LOADING,
  SUBMIT_COUPON_CODE_LOADING,
  OPT_DOCTOR_CALLBACK_LOADING,
  VERIFY_PAYMENT_LOADING,
  PAYMENT_INITIATE_LOADING,
  OPT_EXPRESS_DELIVERY_LOADING,
  DELETE_CART_LOADING
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
  cartTransferFailure,
  uploadPrescriptionSuccess,
  uploadPrescriptionFailure,
  deletePrescriptionSuccess,
  deletePrescriptionFailure,
  submitOrderSuccess,
  submitOrderFailure,
  goToCartSnackbar,
  applyCouponCodeSuccess,
  applyCouponCodeFailure,
  optForDoctorCallbackSuccess,
  optForDoctorCallbackFailure,
  verifyPaymentSuccess,
  verifyPaymentFailure,
  paymentInitiateSuccess,
  paymentInitiateFailure,
  optForExpressDeliverySuccess,
  optForExpressDeliveryFailure,
  redirectToOrderDetailsPage,
  deleteCartSuccess,
  deleteCartFailure,
  getAnonymousCartIdLoading,
  savePatientToCartLoading
} from './cartActions'

import {
  toggleAuthentication
} from '../login/loginActions'

import {
  getAnonymousCartId$,
  getCartDetails$,
  putCartItem$,
  deleteCartItem$,
  savePatientToCart$,
  saveDeliveryAddressToCart$,
  cartTransfer$,
  uploadPrescriptionEpic$,
  deletePrescriptionEpic$,
  submitOrder$,
  applyCouponForCart$,
  teleConsultation$,
  verifyPayment$,
  paymentInitiate$,
  expressDelivery$,
  deleteCart$
} from '../../services/api'

import {
  PAYMENT_GATEWAY
} from '../../components/constants/paymentConstants'

export function getAnonymousCartIdEpic (action$, store) {
  return action$.pipe(
    ofType(GET_ANONYMOUS_CART_ID_LOADING),
    mergeMap(data => {
      return http(
        getAnonymousCartId$(data.source, data.facility_code, data.source_type)
      ).pipe(
        flatMap(result => {
          if (data.source_type === 'REFILL') {
            return of(
              getAnonymousCartIdSuccess(data.cartState, result.body.payload),
              savePatientToCartLoading(
                data.cartState,
                data.patientDetail,
                result.body.payload.uid,
                data.source_type,
                data.addMedicine
              )
            )
          } else {
            return of(
              getAnonymousCartIdSuccess(data.cartState, result.body.payload)
            )
          }
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

function cartApiLoadingHandling (cartState, medicineSelected) {
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

  const payload = {
    ...cartState.payload,
    cart_items: cartItems
  }

  return of(putCartItemSuccess(cartState, payload))
}

function cartApiErrorHandling (cartState, medicineSelected, error) {
  let cartItems = cartState.payload.cart_items.payload

  cartItems.forEach((cartMedicine, index) => {
    if (cartMedicine.id === medicineSelected.id) {
      cartItems[index] = {
        ...cartMedicine,
        isLoading: false,
        errorState: {
          ...cartMedicine.errorState,
          isError: true,
          error: error
        }
      }

      return false
    }
  })

  const payload = {
    ...cartState.payload,
    cart_items: cartItems
  }

  return of(putCartItemFailure(cartState, payload, error))
}

export function decrementCartItemLoadingEpic (action$, store) {
  return action$.pipe(
    ofType(DECREMENT_CART_ITEM_LOADING),
    mergeMap(data => {
      return cartApiLoadingHandling(data.cartState, data.medicineSelected)
    })
  )
}

export function decrementCartItemEpic (action$, store) {
  return action$.pipe(
    ofType(DECREMENT_CART_ITEM_LOADING),
    debounceTime(350),
    mergeMap(data => {
      let cartUid = data.cartState.payload.uid

      let medicineDecremented = {
        name: data.medicineSelected.name,
        sku: data.medicineSelected.sku,
        quantity: data.medicineSelected.quantity - 1
      }

      return http(putCartItem$(cartUid, medicineDecremented)).pipe(
        map(result => {
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
      return cartApiLoadingHandling(data.cartState, data.medicineSelected)
    })
  )
}

export function incrementCartItemEpic (action$, store) {
  return action$.pipe(
    ofType(INCREMENT_CART_ITEM_LOADING),
    debounceTime(350),
    mergeMap(data => {
      const cartUid = data.cartState.payload.uid
      const medicineIncremented = {
        name: data.medicineSelected.name,
        sku: data.medicineSelected.sku,
        quantity: parseInt(data.medicineSelected.quantity) + 1
      }
      return http(putCartItem$(cartUid, medicineIncremented)).pipe(
        flatMap(result => {
          if (medicineIncremented.quantity === 1) {
            return of(
              goToCartSnackbar(data.cartState, true),
              putCartItemSuccess(data.cartState, result.body.payload)
            )
          } else {
            return of(putCartItemSuccess(data.cartState, result.body.payload))
          }
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
      return cartApiLoadingHandling(data.cartState, data.medicineSelected)
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

export function savePatientToCartEpic (action$, store) {
  return action$.pipe(
    ofType(SAVE_PATIENT_TO_CART_LOADING),
    mergeMap(data => {
      return http(savePatientToCart$(data.cartId, data.patient.id)).pipe(
        flatMap(result => {
          if (data.source_type === 'REFILL') {
            return of(
              savePatientToCartSuccess(
                data.cartState,
                data.patient,
                result.body.payload
              ),
              data.addMedicine
            )
          } else {
            return of(
              savePatientToCartSuccess(
                data.cartState,
                data.patient,
                result.body.payload
              )
            )
          }
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
        shipping_address_id: data.shippingAddressId
      }

      return http(
        saveDeliveryAddressToCart$(
          data.cartState.payload.uid,
          shippingAddressId
        )
      ).pipe(
        map(result => {
          return saveDeliveryAddressToCartSuccess(
            data.cartState,
            result.body.payload
          )
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
    mergeMap(data => {
      return http(cartTransfer$(data.cartState.payload.uid)).pipe(
        map(result => {
          let cartItems = result.body.payload.cart_items
          let cartPrescriptions = result.body.payload.cart_prescriptions
          const loginState = store.getState().loginState

          cartItems.forEach((cartMedicine, index) => {
            cartItems[index] = {
              ...cartItems[index],
              isCartMedicine: true
            }
          })

          let updatedCartPrescriptions = cartPrescriptions.map(
            (prescription, index) => {
              return {
                ...prescription,
                url: prescription.location
              }
            }
          )
          return of(
            toggleAuthentication(loginState, true),
            cartTransferSuccess(
              data.cartState,
              result,
              cartItems,
              updatedCartPrescriptions
            )
          )
        }),
        catchError(error => {
          return of(cartTransferFailure(data.cartState, error))
        })
      )
    })
  )
}

export function uploadPrescriptionEpic (action$, store) {
  return action$.pipe(
    ofType(UPLOAD_PRESCRIPTION_LOADING),
    switchMap(data => {
      const formData = new window.FormData()
      formData.append('file', data.uploadedFiles)

      return http(
        uploadPrescriptionEpic$(data.cartState.payload.uid, formData)
      ).pipe(
        map(result => {
          let cartPrescriptions = result.body.payload.cart_prescriptions

          let updatedCartPrescriptions = cartPrescriptions.map(
            (prescription, index) => {
              return {
                ...prescription,
                url: prescription.location
              }
            }
          )

          return uploadPrescriptionSuccess(
            data.cartState,
            data.uploadedFiles,
            updatedCartPrescriptions,
            data.isHomePage
          )
        }),
        catchError(error => {
          return of(uploadPrescriptionFailure(data.cartState, error))
        })
      )
    })
  )
}

export function deletePrescriptionEpic (action$, store) {
  return action$.pipe(
    ofType(DELETE_PRESCRIPTION_LOADING),
    switchMap(data => {
      const prescriptionId =
        data.cartState.payload.cart_prescriptions[data.deletedFileIndex].id

      return http(
        deletePrescriptionEpic$(data.cartState.payload.uid, prescriptionId)
      ).pipe(
        map(result => {
          let cartPrescriptions = result.body.payload.cart_prescriptions

          let updatedCartPrescriptions = cartPrescriptions.map(
            (prescription, index) => {
              return {
                ...prescription,
                url: prescription.location
              }
            }
          )

          return deletePrescriptionSuccess(
            data.cartState,
            data.uploadedFiles,
            updatedCartPrescriptions
          )
        }),
        catchError(error => {
          return of(deletePrescriptionFailure(data.cartState, error))
        })
      )
    })
  )
}

export function submitOrderEpic (action$, store) {
  return action$.pipe(
    ofType(SUBMIT_ORDER_LOADING),
    mergeMap(data => {
      let body = {
        cart_uid: data.cartState.payload.uid
      }

      if (data.paymentChannel !== '') {
        body = {
          ...body,
          payment_method: data.paymentChannel
        }
      }

      return http(submitOrder$(data.cartState, body)).pipe(
        map(result => {
          return submitOrderSuccess(data.cartState, result.body.payload)
        }),
        catchError(error => {
          return of(submitOrderFailure(data.cartState, error))
        })
      )
    })
  )
}

export function applyCouponCode (action$, store) {
  return action$.pipe(
    ofType(SUBMIT_COUPON_CODE_LOADING),
    mergeMap(data => {
      return http(applyCouponForCart$(data.cartId, data.couponCode)).pipe(
        map(result => {
          return applyCouponCodeSuccess(data.cartState, result.body.payload)
        }),
        catchError(error => {
          return of(applyCouponCodeFailure(data.cartState, error))
        })
      )
    })
  )
}

export function optDoctorCallback (action$, store) {
  return action$.pipe(
    ofType(OPT_DOCTOR_CALLBACK_LOADING),
    mergeMap(data => {
      return http(teleConsultation$(data.cartUId, data.doctorCallback)).pipe(
        map(result => {
          return optForDoctorCallbackSuccess(
            data.cartState,
            result.body.payload.doctor_callback
          )
        }),
        catchError(error => {
          return of(optForDoctorCallbackFailure(data.cartState, error))
        })
      )
    })
  )
}

export function verifyPaymentEpic (action$, store) {
  return action$.pipe(
    ofType(VERIFY_PAYMENT_LOADING),
    mergeMap(data => {
      const razorpayDetails = {
        razorpay_order_id: data.razorpay_order_id,
        razorpay_payment_id: data.razorpay_payment_id,
        razorpay_signature: data.razorpay_signature
      }

      const body = {
        gateway_name: PAYMENT_GATEWAY,
        gateway_data: razorpayDetails
      }

      return http(verifyPayment$(data.orderId, body)).pipe(
        map(result => {
          const payload = result.body.payload.order

          return verifyPaymentSuccess(data.cartState, payload)
        }),
        catchError(error => {
          return of(verifyPaymentFailure(data.cartState, error))
        })
      )
    })
  )
}

export function paymentInitiateEpic (action$, store) {
  return action$.pipe(
    ofType(PAYMENT_INITIATE_LOADING),
    mergeMap(data => {
      const body = {
        order_id: data.orderId,
        payment_method: data.paymentMode
      }

      return http(paymentInitiate$(body)).pipe(
        map(result => {
          const payload = result.body.payload.order
          const paymentGateway = result.body.payload.payment_gateway

          return paymentInitiateSuccess(data.cartState, payload, paymentGateway)
        }),
        catchError(error => {
          if (error.status === 400) {
            return of(
              redirectToOrderDetailsPage(data.cartState),
              paymentInitiateFailure(data.cartState, error)
            )
          } else {
            return of(
              paymentInitiateFailure(data.cartState, error)
            )
          }
        })
      )
    })
  )
}

export function optExpressDelivery (action$, store) {
  return action$.pipe(
    ofType(OPT_EXPRESS_DELIVERY_LOADING),
    mergeMap(data => {
      return http(
        expressDelivery$(data.cartUId, data.expressDeliveryCheck)
      ).pipe(
        map(result => {
          return optForExpressDeliverySuccess(
            data.cartState,
            result.body.payload
          )
        }),
        catchError(error => {
          return of(optForExpressDeliveryFailure(data.cartState, error))
        })
      )
    })
  )
}

export function deleteCartState (action$, store) {
  return action$.pipe(
    ofType(DELETE_CART_LOADING),
    mergeMap(data => {
      const cartUid = data.cartState.payload.uid
      return http(deleteCart$(cartUid)).pipe(
        flatMap(result => {
          return of(
            deleteCartSuccess(data.cartState),
            getAnonymousCartIdLoading(
              data.cartState,
              data.source,
              data.facility_code,
              data.source_type,
              data.patientId,
              data.addMedicine
            )
          )
        }),
        catchError(error => {
          return deleteCartFailure(data.cartState, error)
        })
      )
    })
  )
}
