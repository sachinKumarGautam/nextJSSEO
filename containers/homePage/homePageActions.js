import {
  GET_BACKGROUND_IMAGES_LOADING,
  GET_BACKGROUND_IMAGES_SUCCESS,
  GET_BACKGROUND_IMAGES_FAILURE
} from './homePageActionTypes'

/**
 * Represents to the loading state to get the home page background images.
 * @param {object} homePageState - The object maintained for payload, loading and error state.
 */
export function getBackGroundImagesLoading (homePageState, tagName) {
  return {
    type: GET_BACKGROUND_IMAGES_LOADING,
    homePageState,
    isLoading: true,
    isError: false,
    error: {},
    tagName
  }
}

/**
 * Represents to the success state to get the home page background images.
 * @param {object} homePageState - The object maintained for payload, loading and error state.
 * @param {array} result - The home page background image payload obtained from the API response
 */
export function getBackGroundImagesSuccess (homePageState, result) {
  return {
    type: GET_BACKGROUND_IMAGES_SUCCESS,
    homePageState,
    isLoading: false,
    payload: result
  }
}

/**
 * Represents to the error state to get the home page background images.
 * @param {object} homePageState - The object maintained for payload, loading and error state.
 * @param {object} error - The error details when API throws an error
 */
export function getBackGroundImagesFailure (homePageState, error) {
  return {
    type: GET_BACKGROUND_IMAGES_FAILURE,
    homePageState,
    isLoading: false,
    isError: true,
    error: error
  }
}
