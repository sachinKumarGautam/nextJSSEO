import { of } from 'rxjs/observable/of'
import { mergeMap, catchError, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import http from '../../services/api/ajaxWrapper'

import {
  GET_BACKGROUND_IMAGES_LOADING
} from './homePageActionTypes'

import {
  getBackGroundImagesSuccess,
  getBackGroundImagesFailure
} from './homePageActions'

import {
  getSliderImages$
} from '../../services/api'

/**
 * Represents to the epic of get home page background image.
 * @param {object} action$ - this is the ActionsObservable
 * @param {object} store - to access the state from reducers
 */
export function getBackGroungImages (action$, store) {
  return action$.pipe(
    ofType(GET_BACKGROUND_IMAGES_LOADING),
    mergeMap(data => {
      return http(getSliderImages$(data.tagName)).pipe(
        map(result => {
          return getBackGroundImagesSuccess(
            data.homePageState,
            result.body.payload.content
          )
        }),
        catchError(error => {
          return of(getBackGroundImagesFailure(data.homePageState, error))
        })
      )
    })
  )
}
