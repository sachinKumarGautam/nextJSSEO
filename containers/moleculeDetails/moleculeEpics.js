import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import ajax from 'universal-rx-request' // because standard AjaxObservable only works in browser
import { ofType } from 'redux-observable'

import {
  GET_MOLECULE_SUMMARY_LOADING
} from './moleculeActionTypes'

import {
  getMoleculeSummarySuccess,
  getMoleculeSummaryFailure
} from './moleculeActions'

// export function getMoleculeSummary (action$) {
//   action$.ofType(GET_MOLECULE_SUMMARY_LOADING)
//     .switchMap()
//     .map(data => data.payload)
//     .catch(error => return )
// }

// export const getMoleculeSummary = (action$, store) =>
//   action$.pipe(
//     ofType(types.GET_MOLECULE_SUMMARY_LOADING),
//     mergeMap(action => {
//       return interval(3000).pipe(
//         mergeMap(x =>
//           actions.fetchCharacter({
//             isServer: store.getState().isServer
//           })
//         ),
//         takeUntil(action$.ofType(types.STOP_FETCHING_CHARACTERS))
//       )
//     })
//   )

// export const getMoleculeSummary = (action$, store) =>
//   action$.pipe(
//     ofType(GET_MOLECULE_SUMMARY_LOADING),
//     mergeMap(data =>
//       ajax({
//         url: `http://sandbox.lifcare.in/v6/catalog/salts?salt-ids=5a61a295ae8bdc26685f2b09`
//       }).pipe(
//         map(response => {
//           console.log(response)
//           // return of(
//           //   getMoleculeSummarySuccess(data.moleculeState, response))
//           // )
//         }),
//         catchError(error => of(
//           getMoleculeSummaryFailure(data.moleculeState, error)
//         ))
//       )
//     )
//   )

export function getMoleculeSummary (action$, store) {
  return action$.pipe(
    ofType(GET_MOLECULE_SUMMARY_LOADING),
    mergeMap(data => {
      return ajax({
        url: `http://sandbox.lifcare.in/v6/catalog/salts?salt-ids=5a61a295ae8bdc26685f2b09`
      }).pipe(
        map(result => {
          console.log('API response', result)
          return getMoleculeSummarySuccess(data.moleculeState, result.body.payload.content[0])
        }),
        catchError(error => {
          return of(getMoleculeSummaryFailure(data.moleculeState, error))
        })
      )
    })
  )
}
