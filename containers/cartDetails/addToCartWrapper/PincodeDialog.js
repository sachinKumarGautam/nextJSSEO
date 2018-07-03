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

const styles = theme => ({
  paper: {
    minWidth: 500
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
  }
})

const PincodeDialog = (props) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    classes
    // toggleForm
  } = props
  console.log('dkdkjkj')
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
          <form onSubmit={props.handleSubmit}>
            <FormControl
              className={classes.formControl}
              aria-describedby='pincode'
              error={errors.pincode && touched.pincode}
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
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={'Enter you pincode'}
              />
              {
                errors.pincode && touched.pincode &&
                <FormHelperText
                  id='pincode'
                >
                  {errors.pincode}
                </FormHelperText>
              }
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={props.handleClose}
            color='primary'
            variant='outlined'
            label={'Cancel'}
          />
          <Button
            onClick={props.handleSubmit}
            color='primary'
            label={'Apply'}
            variant='raised' 
          />
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default withStyles(styles)(withFormik({
  mapPropsToValues: (props) => ({ pincode: '' }),
  validationSchema: Yup.object().shape({
    pincode: Yup.number().required('Pincode is required!')
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(props.checkPincodeState, props.handleClose, setSubmitting, values)
  },
  displayName: 'pincode' // helps with React DevTools
})(PincodeDialog))
