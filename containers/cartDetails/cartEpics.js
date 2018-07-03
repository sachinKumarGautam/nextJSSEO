import {
  GET_ANONYMOUS_CART_ID_LOADING
} from './cartActionTypes'

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