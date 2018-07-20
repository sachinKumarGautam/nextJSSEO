import { withFormik } from 'formik'
import * as Yup from 'yup'
import debounce from 'lodash.debounce';

import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Button from '../../components/button'
import CircularProgress from '@material-ui/core/CircularProgress'

import { withStyles } from '@material-ui/core/styles'

import {
  FULL_NAME_REQUIRED,
  MOBILE_REQUIRED,
  GENDER_REQUIRED
} from '../../containers/messages/ValidationMsg'
import TransactionHistory from '../../containers/carePoint/TransactionHistory'

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
  },
  progress: {
    position: 'absolute',
    right: theme.spacing.unit * 1.5,
    bottom: theme.spacing.unit,
    color: theme.palette.customGrey.grey100
  }
})

class RegisterForm extends React.Component {

  constructor (props) {
    super(props)
    this.onChangeReferralCode = this.onChangeReferralCode.bind(this)
    this.checkReferralCode = debounce(this.checkReferralCode, 350)
  }

  onChangeReferralCode (handleChange, event) {
    this.checkReferralCode(event.target.value)
    handleChange(event)
  }

  checkReferralCode (value) {
    this.props.checkReferralCodeLoading(this.props.customerState, value)
  }

  render () {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleSubmit,
      classes,
      customerState
    } = this.props

    const referralCodeError = customerState.payload.referral_code.errorState.error 
    ? customerState.payload.referral_code.errorState.error.error.status  
    : ''

    return (
      <form onSubmit={handleSubmit}>
        <FormControl
          className={classes.formControl}
          aria-describedby='full-name'
          error={errors.full_name && touched.full_name}
        >
          <Input
            id='full_name'
            type='text'
            onChange={handleChange}
            placeholder={'Full Name'}
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
          <Input
            id='mobile'
            type='text'
            placeholder={'Mobile'}
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
          <Select
            value={values.gender}
            onChange={handleChange}
            placeholder={'Gender'}
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
            <MenuItem value={'female'}>Female</MenuItem>
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
          aria-describedby='referral_code'
          error={(errors.referral_code && touched.referral_code) || referralCodeError}
        >
          <Input
            id='referral_code'
            placeholder={'Referral Code'}
            onChange={this.onChangeReferralCode.bind(this, handleChange)}
            value={values.referral_code}
          />
          { customerState.payload.referral_code.isLoading && <CircularProgress className={classes.progress} size={20} />}
          {
            ((errors.referral_code && touched.referral_code) || referralCodeError) &&
            <FormHelperText
              id='referral_code'
            >
              {referralCodeError ? `Please enter a valid Referral Code` : errors.referral_code}
            </FormHelperText>
          }
        </FormControl>
        <FormControl
          className={classes.formControl}
          aria-describedby='membership_code'
          error={errors.membership_code && touched.membership_code}
        >
          <Input
            id='membership_code'
            disabled
            placeholder={'Membership Code'}
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
}

export default withStyles(styles)(withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    return {
      full_name: '',
      gender: '',
      mobile: props.loginState.payload.initialMobile,
      membership_code: '',
      referral_code: props.customerState.payload.referral_code.payload,
      age: '',
      id: '',
      membership_type: '',
      reference_code: '',
      email: '',
      default_location: 'J-58, 3rd floor, lajpat Nagar 4'
    }
  },
  validationSchema: Yup.object().shape({
    full_name: Yup.string().required(FULL_NAME_REQUIRED),
    mobile: Yup.number().required(MOBILE_REQUIRED),
    gender: Yup.string().required(GENDER_REQUIRED),
    referral_code: Yup.string()
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(props.customerState, props.closeLoginModal, setSubmitting, values)
  },
  displayName: 'RegisterForm' // helps with React DevTools
})(RegisterForm))
