import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import { GET_USER_REVIEW_LOADING } from './homePageActionTypes'

import { getUserReviewSuccess, getUserReviewFailure } from './homePageActions'

import { getUserReview$ } from '../../services/api'

/**
 * Represents to the epic of get home page background image.
 * @param {object} action$ - this is the ActionsObservable
 * @param {object} store - to access the state from reducers
 */
export function getUserReview (action$, store) {
  return action$.pipe(
    ofType(GET_USER_REVIEW_LOADING),
    mergeMap(data => {
      return http(getUserReview$()).pipe(
        map(result => {
          return getUserReviewSuccess(
            data.homePageState,
            result.body.payload.content
          )
        }),
        catchError(error => {
          return of(getUserReviewFailure(data.homePageState, error))
        })
      )
    })
  )
}
