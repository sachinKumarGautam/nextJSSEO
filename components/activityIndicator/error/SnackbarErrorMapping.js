import {
  CUSTOM_MESSGAE_SNACKBAR,
  ERROR_404_MSG,
  ERROR_400_MSG,
  ERROR_408_MSG,
  ERROR_428_MSG
} from '../../../containers/messages/errorMessages'

export const snackbarMapping = (statusCode) => {
  switch (statusCode) {
    case 404: return ERROR_404_MSG
    case 400: return ERROR_400_MSG
    case 408: return ERROR_408_MSG
    case 428: return ERROR_428_MSG
    default: return CUSTOM_MESSGAE_SNACKBAR
  }
}
