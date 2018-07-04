import {
  GET_ANONYMOUS_CART_ID_LOADING,
  CART_TRANSFER_LOADING
} from './cartActionTypes'

import {
  cartTransfer$
} from '../../services/api'

// export function getAnonymousCartIdEpic (actions$) {
//   return (
//     actions$
//       .ofType(GET_ANONYMOUS_CART_ID_LOADING)
//       .switchMap((data) => {
//         return Observable.defer(() => {
//           return Observable.ajax(getAnonymousCartId$(data.source, data.facility_code, data.source_type))
//         })
//           .flatMap(getCartResponse => {
//             if (data.source_type === 'REFILL') {
//               return Observable.concat(
//                 Observable.of(
//                   getAnonymousCartIdSuccess(
//                     data.cartState,
//                     getCartResponse
//                   )
//                 ),
//                 Observable.of(
//                   savePatientToCart(
//                     data.cartState,
//                     data.patientId,
//                     data.navigationState,
//                     getCartResponse.response.payload.uid
//                   )
//                 )
//               )
//             } else {
//               return Observable.concat(
//                 Observable.of(
//                   getAnonymousCartIdSuccess(
//                     data.cartState,
//                     getCartResponse
//                   )
//                 )
//               )
//             }
//           })
//           .catch((error, source) => {
//             const errorObservable = Observable.of(
//               getAnonymousCartIdFailure(
//                 data.cartState,
//                 error.xhr.response
//               )
//             )

//             return checkTokenAuthentication(
//               actions$,
//               error,
//               source,
//               data.type,
//               errorObservable
//             )
//           })
//       })
//   )
// }

export function cartTransferEpic (action$) {
  return (
    action$
      .ofType(CART_TRANSFER_LOADING)
      .switchMap((data) => {
        return Observable.defer(() => {
          return Observable.ajax(cartTransfer$(data.cartUid))
        })
          .flatMap(cartResponse => {
            let cartItems = cartResponse.response.payload.cart_items
            let cartPrescriptions = cartResponse.response.payload.cart_prescriptions

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

            if (data.isExistingUser) {
              return Observable.concat(
                Observable.of(toggleNavigationFlag(data.navigationState)),
                Observable.of(
                  cartTransferSuccess(
                    data.cartState,
                    cartResponse,
                    cartItems,
                    updatedCartPrescriptions
                  )
                )
              )
            } else if (data.isPatientRegistration) {
              return Observable.concat(
                Observable.of(
                  cartTransferSuccess(
                    data.cartState,
                    cartResponse,
                    cartItems,
                    updatedCartPrescriptions
                  )
                ),
                Observable.of(
                  submitPatientDetailLoading(
                    data.patientFormState,
                    data.customerId,
                    data.cartState,
                    data.navigationState,
                    data.isExistingUser
                  )
                )
              )
            } else {
              return Observable.concat(
                Observable.of(
                  cartTransferSuccess(
                    data.cartState,
                    cartResponse,
                    cartItems,
                    updatedCartPrescriptions
                  )
                ),
                Observable.of(
                  savePatientToCart(
                    data.cartState,
                    data.patientId,
                    data.navigationState,
                    cartResponse.response.payload.uid
                  )
                )
              )
            }
          })
          .catch((error, source) => {
            let errorObservable
            if (data.isExistingUser) {
              errorObservable = Observable.concat(
                Observable.of(resetLoginState()),
                Observable.of(
                  cartTransferFailure(
                    data.cartState,
                    error
                  )
                ),
                Observable.of(
                  cartErrorHandling(
                    data.cartState,
                    error
                  )
                )
              )
            } else {
              errorObservable = Observable.concat(
                Observable.of(
                  cartTransferFailure(
                    data.cartState,
                    error
                  )
                ),
                Observable.of(
                  cartErrorHandling(
                    data.cartState,
                    error
                  )
                )
              )
            }

            return checkTokenAuthentication(
              action$,
              error,
              source,
              data.type,
              errorObservable
            )
          })
      })
  )
}