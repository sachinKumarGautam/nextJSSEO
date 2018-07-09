import { withFormik } from 'formik'
import * as Yup from 'yup'

import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Button from '../../components/button'
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
    textAlign: 'center'
  }
})

const RegisterForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    classes
  } = props
  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        className={classes.formControl}
        aria-describedby='full-name'
        error={errors.full_name && touched.full_name}
      >
        <InputLabel htmlFor='full_name'>Full Name</InputLabel>
        <Input
          id='full_name'
          type='text'
          onChange={handleChange}
          value={values.full_name}
        />
        {
          errors.full_name && touched.full_name &&
          <FormHelperText
            id='full_name'
          >
            {errors.full_name}
          </FormHelperText>
        }
      </FormControl>
      <FormControl
        className={classes.formControl}
        aria-describedby='mobile'
        error={errors.mobile && touched.mobile}
      >
        <InputLabel htmlFor='mobile'>Phone number</InputLabel>
        <Input
          id='mobile'
          type='text'
          onChange={handleChange}
          value={values.mobile}
        />
        {
          errors.mobile && touched.mobile &&
          <FormHelperText
            id='mobile'
          >
            {errors.mobile}
          </FormHelperText>
        }
      </FormControl>
      <FormControl
        className={classes.formControl}
        aria-describedby='gender'
        error={errors.gender && touched.gender}
      >
        <InputLabel htmlFor='gender'>Gender</InputLabel>
        <Select
          value={values.gender}
          onChange={handleChange}
          inputProps={{
            name: 'gender',
            id: 'gender',
            placeholder: 'Gender'
          }}
        >
          <MenuItem value=''>
            <em>Gender</em>
          </MenuItem>
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'femlae'}>Female</MenuItem>
          <MenuItem value={'others'}>Others</MenuItem>
        </Select>
        {
          errors.gender && touched.gender &&
          <FormHelperText
            id='gender'
          >
            {errors.gender}
          </FormHelperText>
        }
      </FormControl>
      <FormControl
        className={classes.formControl}
        aria-describedby='membership_code'
        error={errors.membership_code && touched.membership_code}
      >
        <InputLabel htmlFor='membership_code'>Membership code</InputLabel>
        <Input
          id='membership_code'
          disabled
          onChange={handleChange}
          value={values.membership_code}
        />
        {
          errors.referral_code && touched.referral_code &&
          <FormHelperText
            id='referral_code'
          >
            {errors.referral_code}
          </FormHelperText>
        }
      </FormControl>
      <FormControl
        className={classes.formControl}
        aria-describedby='referral_code'
        error={errors.referral_code && touched.referral_code}
      >
        <InputLabel htmlFor='referral-code'>Referral code</InputLabel>
        <Input
          id='referral_code'
          onChange={handleChange}
          value={values.referral_code}
          disabled
        />
        {
          errors.referral_code && touched.referral_code &&
          <FormHelperText
            id='referral_code'
          >
            {errors.referral_code}
          </FormHelperText>
        }
      </FormControl>
      <div className={classes.buttonWrapper}>
        <Button
          type='submit'
          isloading={isSubmitting}
          variant='raised'
          color='primary'
          label={'Register'}
        />
      </div>
    </form>
  )
}

export default withStyles(styles)(withFormik({
  mapPropsToValues: (props) => {
    return {
      full_name: '',
      gender: '',
      mobile: props.loginState.payload.initialMobile,
      membership_code: '',
      referral_code: '',
      age: '',
      id: '',
      membership_type: '',
      reference_code: '',
      email: '',
      default_location: 'J-58, 3rd floor, lajpat Nagar 4'
    }
  },
  validationSchema: Yup.object().shape({
    full_name: Yup.string().required('Please enter your full name'),
    mobile: Yup.number().required('Please enter OTP'),
    gender: Yup.string().required('Gender is required'),
    membership_code: Yup.string(),
    referral_code: Yup.string()
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(props.customerState, props.closeLoginModal, setSubmitting, values)
  },
  displayName: 'RegisterForm' // helps with React DevTools
})(RegisterForm))
