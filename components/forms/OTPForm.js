import React from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'

import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Button from '../../components/button'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

// Helper styles for demo

import {
  OTP_REQUIRED,
  OTP_INVALID,
  NUMBER_VALIDATION_REGEX
} from '../../containers/messages/ValidationMsg'
import { OTP_PLACEHOLDER } from '../../containers/messages/PlaceholderMsg'

import {
  CUSTOM_MESSGAE_SNACKBAR
} from '../../containers/messages/errorMessages'

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
    // textAlign: 'center',
  },
  resendTimer: {
    ...theme.typography.body3,
    color: theme.palette.customYellow.yellow400,
    paddingTop: theme.spacing.unit
  },
  resendLink: {
    ...theme.typography.body3,
    color: theme.palette.customYellow.yellow400,
    paddingTop: theme.spacing.unit,
    textDecoration: 'underline',
    cursor: 'pointer'
  }
})

class OTPForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSubmit: false,
      initialCounter: 30,
      updateCounter: 30,
      isHideResetButton: true
    }

    this.customCountTimer = this.customCountTimer.bind(this)
    this.resendOtp = this.resendOtp.bind(this)
  }

  componentDidMount () {
    this.customCountTimer()
  }

  handleChange = event => {
    const inputValue = event.target.value
    const regexInputExpression = RegExp(NUMBER_VALIDATION_REGEX).test(
      inputValue
    )
    if ((regexInputExpression && inputValue.length <= 4) || !inputValue) {
      this.props.handleChange(event)
    }
  }

  customCountTimer () {
    this.setState({
      isHideResetButton: true
    })

    this.otpResendTimer = setInterval(() => {
      this.setState(prevState => {
        return {
          updateCounter: prevState.updateCounter - 1
        }
      })

      if (this.state.updateCounter === 0) {
        this.setState({
          updateCounter: this.state.initialCounter,
          isHideResetButton: false
        })

        clearInterval(this.otpResendTimer)
      }
    }, 1000)
  }

  resendOtp () {
    this.props.resendButtonClick(
      this.props.loginState,
      this.props.setSubmitting,
      this.props.toggleForm,
      { mobile: this.props.loginState.payload.initialMobile }
    )
    this.customCountTimer()
  }

  render () {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleSubmit,
      classes,
      loginState,
      globalErrorState
      //   closeLoginModal
    } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <FormControl
          className={classes.formControl}
          aria-describedby='otp'
          error={
            (errors.otp && touched.otp) ||
            loginState.errorStateVerifyOtp.isError
          }
        >
          <Input
            autoComplete='off'
            id='otp'
            // type='number'
            value={values.otp}
            classes={{
              input: classes.otpInput
            }}
            autoFocus
            onChange={this.handleChange}
            placeholder={OTP_PLACEHOLDER}
          />
          {((errors.otp && touched.otp) ||
            loginState.errorStateVerifyOtp.isError) &&
            <FormHelperText id='otp'>
              {errors.otp ? errors.otp : (globalErrorState.statusCode === 401 ? OTP_INVALID : CUSTOM_MESSGAE_SNACKBAR )}
            </FormHelperText>}
          {this.state.isHideResetButton
            ? <Typography align='right' className={classes.resendTimer}>
              {this.state.updateCounter} seconds
            </Typography>
            : <a onClick={this.resendOtp}>
              <Typography align='right' className={classes.resendLink}>
                  Resend OTP
              </Typography>
            </a>}
        </FormControl>
        <div className={classes.buttonWrapper}>
          <Button
            type='submit'
            isloading={isSubmitting}
            variant='raised'
            color='primary'
            label={
              this.props.isRegisterClicked || loginState.isNewUser
                ? 'Register'
                : 'Login'
            }
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
        .matches(NUMBER_VALIDATION_REGEX, {
          message: OTP_INVALID
        })
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
