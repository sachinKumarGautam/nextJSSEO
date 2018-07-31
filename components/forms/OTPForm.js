import React from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'

import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Button from '../../components/button'
import { withStyles } from '@material-ui/core/styles'

// Helper styles for demo

import {
  OTP_REQUIRED,
  OTP_INVALID
} from '../../containers/messages/ValidationMsg'
import { OTP_PLACEHOLDER } from '../../containers/messages/PlaceholderMsg'

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    width: '100%'
  },
  buttonWrapper: {
    marginTop: theme.spacing.unit * 3.5,
    width: '180.5px',
    height: '34px',
    margin: '0 auto'
  },
  formHelperText: {
    textAlign: 'center',
    marginTop: theme.spacing.unit
  },
  inputCenter: {
    textAlign: 'center'
  },
  otpInput: {
    textAlign: 'center',
    letterSpacing: theme.spacing.unit / 2
  }
})

class OTPForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isSubmit: false }
  }

  handleChange = event => {
    if (event.target.value.length <= 4) {
      this.props.handleChange(event)
    }
  }

  render () {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleSubmit,
      classes
      //   closeLoginModal
    } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <FormControl
          className={classes.formControl}
          aria-describedby='otp'
          error={errors.otp && touched.otp}
        >
          <Input
            autoComplete='off'
            id='otp'
            type='number'
            value={values.otp}
            classes={{
              input: classes.otpInput
            }}
            onChange={this.handleChange}
            placeholder={OTP_PLACEHOLDER}
          />
          {errors.otp &&
            touched.otp &&
            <FormHelperText id='otp'>
              {errors.otp}
            </FormHelperText>}
        </FormControl>
        <div className={classes.buttonWrapper}>
          <Button
            type='submit'
            isloading={isSubmitting}
            variant='raised'
            color='primary'
            label={'Login'}
          />
        </div>
      </form>
    )
  }
}

export default withStyles(styles)(
  withFormik({
    mapPropsToValues: () => ({ otp: '' }),
    validationSchema: Yup.object().shape({
      otp: Yup.string()
        .min(4, OTP_INVALID)
        .max(4, OTP_INVALID)
        .required(OTP_REQUIRED)
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
      props.onSubmit(
        props.loginState,
        setSubmitting,
        props.closeLoginModal,
        props.toggleForm,
        values
      )
    },
    displayName: 'OTPForm' // helps with React DevTools
  })(OTPForm)
)
