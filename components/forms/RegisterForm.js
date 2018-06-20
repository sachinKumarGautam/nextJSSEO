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
    width: '180.5px',
    height: '34px',
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
        error={errors.fullName && touched.fullName}
      >
        <InputLabel htmlFor='fullName'>Full Name</InputLabel>
        <Input
          id='fullName'
          type='text'
          onChange={handleChange}
          value={values.fullName}
        />
        {
          errors.fullName && touched.fullName &&
          <FormHelperText
            id='fullName'
          >
            {errors.fullName}
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
            id: 'gender'
          }}
        >
          <MenuItem value=''>
            <em>Gender</em>
          </MenuItem>
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
          <MenuItem value={30}>Others</MenuItem>
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
        aria-describedby='membershipCode'
        error={errors.membershipCode && touched.membershipCode}
      >
        <InputLabel htmlFor='membershipCode'>Membership code</InputLabel>
        <Input
          id='membershipCode'
          onChange={handleChange}
          value={values.membershipCode}
        />
        {
          errors.referralCode && touched.referralCode &&
          <FormHelperText
            id='referralCode'
          >
            {errors.referralCode}
          </FormHelperText>
        }
      </FormControl>
      <FormControl
        className={classes.formControl}
        aria-describedby='referralCode'
        error={errors.referralCode && touched.referralCode}
      >
        <InputLabel htmlFor='referral-code'>Referral code</InputLabel>
        <Input
          id='referralCode'
          onChange={handleChange}
          value={values.referralCode}
        />
        {
          errors.referralCode && touched.referralCode &&
          <FormHelperText
            id='referralCode'
          >
            {errors.referralCode}
          </FormHelperText>
        }
      </FormControl>
      <div className={classes.buttonWrapper}>
        <Button
          type='submit'
          disabled={isSubmitting}
          variant='raised'
          color='primary'
          label={'Register'}
        />
      </div>
    </form>
  )
}

export default withStyles(styles)(withFormik({
  mapPropsToValues: () => (
    {
      fullName: '',
      gender: '',
      membershipCode: '',
      referralCode: ''
    }),
  validationSchema: Yup.object().shape({
    fullName: Yup.string().required('Please enter your full name'),
    gender: Yup.string().required('Gender is required'),
    membershipCode: Yup.string(),
    referralCode: Yup.string()
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    setTimeout(() => {
      props.closeLoginModal()
      setSubmitting(false)
    }, 1000)
  },
  displayName: 'RegisterForm' // helps with React DevTools
})(RegisterForm))
