import React from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { withStyles } from '@material-ui/core/styles'

import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'

import Button from '../../../components/button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'

import {
  PINCODE_INVALID,
  CHECKING_PINCODE,
  PINCODE_REQUIRED,
  NUMBER_VALIDATION_REGEX
} from '../../messages/ValidationMsg'

import { CUSTOM_MESSGAE_SNACKBAR } from '../../messages/errorMessages'

const styles = theme => ({
  paper: {
    minWidth: theme.spacing.unit * 62.5
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%',
    marginLeft: 0
  },
  buttonWrapper: {
    marginTop: theme.spacing.unit * 3.5,
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto'
  },
  formHelperText: {
    textAlign: 'center',
    marginTop: theme.spacing.unit
  },
  buttonLabel: {
    color: theme.palette.common.black
  },
  cancelButton: {
    marginRight: theme.spacing.unit * 2.25,
    display: 'flex'
  }
})

function getPincodeErrorMsg (
  pincodeFormError,
  inValidPincodeError,
  pincodeLoading,
  checkPincodeState
) {
  if (pincodeLoading) {
    return CHECKING_PINCODE
  } else if (pincodeFormError) {
    return pincodeFormError
  } else if (!pincodeFormError && inValidPincodeError) {
    return inValidPincodeError
  } else if (checkPincodeState.errorState.isError) {
    return CUSTOM_MESSGAE_SNACKBAR
  }
}

class PincodeDialog extends React.Component {
  handleChange = event => {
    const inputValue = event.target.value
    const regexInputExpression = RegExp(NUMBER_VALIDATION_REGEX).test(
      inputValue
    )
    if ((regexInputExpression && inputValue.length <= 6) || !inputValue) {
      this.props.changePincodeValue(
        this.props.checkPincodeState,
        event.target.value
      )
      this.props.handleChange(event)
    }
  }

  render () {
    const { props } = this

    const {
      touched,
      errors,
      isSubmitting,
      // handleBlur,
      handleSubmit,
      classes,
      checkPincodeState
      // toggleForm
    } = props
    const pincodeLoading = checkPincodeState.isLoading
    const pincodeError = checkPincodeState.errorState.error
    const pincodeFormError = errors.pincode && touched.pincode
      ? errors.pincode
      : ''

    const inValidPincodeError = touched.pincode &&
      pincodeError === 'NotFoundException'
      ? PINCODE_INVALID
      : ''

    return (
      <div>
        <Dialog
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby='form-dialog-title'
          classes={{
            paper: props.classes.paper
          }}
        >
          <DialogContent>
            <DialogContentText>
              Enter Delivery Pincode
            </DialogContentText>
            <form onSubmit={handleSubmit}>
              <FormControl
                className={classes.formControl}
                aria-describedby='pincode'
                error={
                  pincodeFormError ||
                    inValidPincodeError ||
                    checkPincodeState.errorState.isError
                }
              >
                <Input
                  autoFocus
                  margin='dense'
                  label='Pincode'
                  fullWidth
                  autoComplete='off'
                  id='pincode'
                  value={props.checkPincodeState.pincodeValue}
                  onChange={this.handleChange}
                  // onBlur={handleBlur}
                  placeholder={'Enter your pincode'}
                />
                <FormHelperText id='pincode'>
                  {getPincodeErrorMsg(
                    pincodeFormError,
                    inValidPincodeError,
                    pincodeLoading,
                    checkPincodeState
                  )}
                </FormHelperText>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <div className={classes.cancelButton}>
              <Button
                onClick={props.handleClose}
                label={'Cancel'}
                variant='flat'
                color='primary'
                classes={{
                  label: classes.buttonLabel
                }}
              />
              <Button
                onClick={props.handleSubmit}
                isloading={isSubmitting}
                color='primary'
                label={'Apply'}
                variant='raised'
                autoFocus
              />
            </div>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(
  withFormik({
    enableReinitialize: true,
    mapPropsToValues: props => ({
      pincode: props.checkPincodeState.payload.pincodeValue
    }),
    validationSchema: Yup.object().shape({
      pincode: Yup.number().required(PINCODE_REQUIRED)
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
      props.onSubmit(
        props.checkPincodeState,
        props.handleClose,
        setSubmitting,
        values,
        {
          incrementCartItemLoading: props.incrementCartItemLoading,
          inProgressCartItem: props.inProgressCartItem
        }
      )
    },
    displayName: 'pincode' // helps with React DevTools
  })(PincodeDialog)
)
