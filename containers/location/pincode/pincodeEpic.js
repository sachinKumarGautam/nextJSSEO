import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import {CHECK_PINCODE_LOADING} from './pincodeActionTypes'
import {checkPincodeSuccess, checkPincodeFailure} from './pincodeAction'
import {checkPincode$} from '../../../services/api'
import http from '../../../services/api/ajaxWrapper'

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
      return http(checkPincode$(data.pincode)).pipe(
        map(result => {
          console.log(result)
          setTimeout(() => {
            data.handleClose()
          }, 350)
          data.setSubmitting(false)
          return checkPincodeSuccess(checkPincodeState, result)
        }),
        catchError(error => {
          return of(checkPincodeFailure(checkPincodeState, error))
        })
      )
    })
  )
}
