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
  }
})

class LoginForm extends React.Component {
  render () {
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
    } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <FormControl
          className={classes.formControl}
          aria-describedby='mobile-number'
          error={errors.mobile && touched.mobile}
        >
          <Input
            startAdornment={
              <InputAdornment position='start'>
                <AccountCircle />
              </InputAdornment>
            }
            autoComplete='off'
            id='mobile'
            type='number'
            value={values.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={'Enter registered mobile no.'}
          />
          {
            errors.mobile && touched.mobile &&
            <FormHelperText
              id='name-helper-text'
            >
              {errors.mobile}
            </FormHelperText>
          }
          <Typography variant='caption' className={classes.formHelperText} component='h6'>
            We will send you an SMS with an OTP to this number
          </Typography>
        </FormControl>
        <div className={classes.buttonWrapper}>
          <Button
            type='submit'
            // disabled={isSubmitting}
            isLoading={isSubmitting}
            variant='raised'
            // onClick={toggleModal}
            color='primary'
            label={'Login with OTP'}
          />
        </div>
      </form>
    )
  }
}

export default withStyles(styles)(withFormik({
  mapPropsToValues: () => ({ mobile: '' }),
  validationSchema: Yup.object().shape({
    mobile: Yup.number()
    // .min(10, 'Please enter valid phone number')
    // .max(10, 'Please enter valid phone number')
    // .required('Mobile is required!')
  }),
  handleSubmit: (values, { props, changeLoadingState, setSubmitting }) => {
    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2))
      // props.toggleForm('otp')
      // console.log(changeLoadingState)
      setSubmitting(false)
    }, 2000)
  },
  displayName: 'LoginForm' // helps with React DevTools
})(LoginForm))
