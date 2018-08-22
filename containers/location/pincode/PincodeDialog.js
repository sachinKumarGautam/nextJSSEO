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
  PINCODE_REQUIRED
} from '../../messages/ValidationMsg'

const styles = theme => ({
  paper: {
    minWidth: theme.spacing.unit * 62.5
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%'
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
    marginRight: theme.spacing.unit
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
    return 'Oops!! Something went wrong'
  }
}

class PincodeDialog extends React.Component {
  handleChange = event => {
    if (event.target.value.length <= 6) {
      this.props.handleChange(event)
    }
  }

  render () {
    const { props } = this

    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleBlur,
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
                error={pincodeFormError || inValidPincodeError}
              >
                <Input
                  autoFocus
                  margin='dense'
                  label='Pincode'
                  fullWidth
                  autoComplete='off'
                  id='pincode'
                  type='number'
                  value={values.pincode}
                  onChange={this.handleChange}
                  onBlur={handleBlur}
                  placeholder={'Enter you pincode'}
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
            </div>
            <Button
              onClick={props.handleSubmit}
              isloading={isSubmitting}
              color='primary'
              label={'Apply'}
              variant='raised'
              autoFocus
            />
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(
  withFormik({
    mapPropsToValues: props => ({
      pincode: props.checkPincodeState.payload.pincode
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
        { isDeliveryAddress: false },
        props.incrementCartItemLoading,
        props.inProgressCartItem
      )
    },
    displayName: 'pincode' // helps with React DevTools
  })(PincodeDialog)
)
