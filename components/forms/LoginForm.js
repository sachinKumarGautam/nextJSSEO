import React from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'

import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Button from '../../components/button'
// import classNames from 'classNames'
// import classNames from 'classnames'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from '@material-ui/icons/StayPrimaryPortrait'
import { withStyles } from '@material-ui/core/styles'

import {
  MOBILE_REQUIRED,
  MOBILE_INVALID,
  MOBILE_VALIDATION_REGEX,
  NUMBER_VALIDATION_REGEX
} from '../../containers/messages/ValidationMsg'

import {
  CUSTOM_MESSGAE_SNACKBAR
} from '../../containers/messages/errorMessages'

// Helper styles for demo

const styles = theme => ({
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
  buttonStyle: {
    width: theme.spacing.unit * 25
  },
  mobilePrefix: {
    marginBottom: theme.spacing.unit / 8,
    color: theme.palette.customGrey.grey200
  },
  mobileIcon: {
    color: theme.palette.customGrey.grey200,
    height: theme.spacing.unit * 2
  }
})

class LoginForm extends React.Component {
  handleChange = event => {
    const inputValue = event.target.value
    const regexInputExpression = RegExp(NUMBER_VALIDATION_REGEX).test(
      inputValue
    )
    if ((regexInputExpression && inputValue.length <= 10) || !inputValue) {
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
      classes,
      loginState
    } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <FormControl
          className={classes.formControl}
          aria-describedby='mobile-number'
          error={
            (errors.mobile && touched.mobile) ||
              loginState.errorStateSendOtp.isError
          }
        >
          <Input
            startAdornment={
              <InputAdornment position='start'>
                <AccountCircle className={classes.mobileIcon} />
                <span className={classes.mobilePrefix}>{'+91'}</span>
              </InputAdornment>
            }
            autoComplete='off'
            id='mobile'
            value={values.mobile}
            onChange={this.handleChange}
            autoFocus
            placeholder={
              this.props.isRegisterClicked
                ? 'Enter mobile no.'
                : 'Enter registered mobile no.'
            }
          />
          {errors.mobile &&
            touched.mobile &&
            <FormHelperText id='name-helper-text'>
              {errors.mobile}
            </FormHelperText>}
          {loginState.errorStateSendOtp.isError &&
            <FormHelperText id='name-helper-text'>
              {CUSTOM_MESSGAE_SNACKBAR}
            </FormHelperText>}
          <Typography
            variant='caption'
            className={classes.formHelperText}
            component='h6'
          >
            We will send you an SMS with an OTP to this number
          </Typography>
        </FormControl>
        <div className={classes.buttonWrapper}>
          <Button
            type='submit'
            className={classes.buttonStyle}
            isloading={isSubmitting}
            variant='raised'
            color='primary'
            label={
              this.props.isRegisterClicked
                ? 'Register with OTP'
                : 'Login with OTP'
            }
          />
        </div>
      </form>
    )
  }
}

export default withStyles(styles)(
  withFormik({
    mapPropsToValues: () => ({ mobile: '' }),
    validationSchema: Yup.object().shape({
      mobile: Yup.string()
        .trim()
        .min(10, MOBILE_INVALID)
        .max(10, MOBILE_INVALID)
        .matches(MOBILE_VALIDATION_REGEX, {
          message: MOBILE_INVALID
        })
        .required(MOBILE_REQUIRED)
    }),
    handleSubmit: (values, { props, changeLoadingState, setSubmitting }) => {
      props.onSubmit(props.loginState, setSubmitting, props.toggleForm, values)
    },
    displayName: 'LoginForm' // helps with React DevTools
  })(LoginForm)
)
