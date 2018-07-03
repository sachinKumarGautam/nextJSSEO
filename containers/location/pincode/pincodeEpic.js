import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'
import {CHECK_PINCODE_LOADING} from './pincodeActionTypes'
import {checkPincodeSuccess, checkPincodeFailure} from './pincodeAction'
import {checkPincode$} from '../../../services/api/index'

/**
 * Represents to the epic of get medicine list.
 * @param {object} action$ - this is the ActionsObservable
 * @param {object} store - to access the state from reducers
 */
export function checkPincode (action$, store) {
  return action$.pipe(
    ofType(CHECK_PINCODE_LOADING),
    mergeMap(data => {
      return http(checkPincode$(data.pincode)).pipe(
        map(result => {
          return checkPincodeSuccess(data.checkPincodeState, result)
        }),
        catchError(error => {
          return of(checkPincodeFailure(data.checkPincodeState, error))
        })
      )
    })
  )
}
