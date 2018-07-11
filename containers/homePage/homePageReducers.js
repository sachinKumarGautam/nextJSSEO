import initialState from './homePageModal'

import {
  GET_BACKGROUND_IMAGES_LOADING,
  GET_BACKGROUND_IMAGES_SUCCESS,
  GET_BACKGROUND_IMAGES_FAILURE
} from './homePageActionTypes'

export default function homePageReducers (state = initialState, action) {
  switch (action.type) {
    // update loading details of home page background image
    case GET_BACKGROUND_IMAGES_LOADING:
      return {
        ...state,
        backGroundImage: {
          ...state.backGroundImage,
          isLoading: action.isLoading,
          errorState: {
            ...state.backGroundImage.errorState,
            isError: action.isError
          }
        }
      }

    // update success details of home page background image
    case GET_BACKGROUND_IMAGES_SUCCESS:
      return {
        ...state,
        backGroundImage: {
          ...state.backGroundImage,
          isLoading: action.isLoading,
          payload: action.payload
        }
      }

    // update failure details of home page background image
    case GET_BACKGROUND_IMAGES_FAILURE:
      return {
        ...state,
        backGroundImage: {
          ...state.backGroundImage,
          isLoading: action.isLoading,
          errorState: {
            ...state.backGroundImage.errorState,
            isError: action.isError,
            error: action.error
          }
        }
      }

    default:
      return state
  }
}
