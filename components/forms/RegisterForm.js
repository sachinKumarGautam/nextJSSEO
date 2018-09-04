import { withFormik } from 'formik'
import * as Yup from 'yup'
import debounce from 'lodash.debounce'

import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Button from '../../components/button'
import CircularProgress from '@material-ui/core/CircularProgress'
import InputAdornment from '@material-ui/core/InputAdornment'

import { withStyles } from '@material-ui/core/styles'

import {
  FULL_NAME_REQUIRED,
  MOBILE_REQUIRED,
  GENDER_REQUIRED,
  MOBILE_INVALID,
  REFERRAL_CODE_INVALID,
  MOBILE_VALIDATION_REGEX,
  NUMBER_VALIDATION_REGEX
} from '../../containers/messages/ValidationMsg'

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
  },
  mobilePrefix: {
    marginBottom: theme.spacing.unit / 8
  }
})

class RegisterForm extends React.Component {
  constructor (props) {
    super(props)
    // this.onChangeReferralCode = this.onChangeReferralCode.bind(this)
    this.checkReferralCode = debounce(this.checkReferralCode, 350)
    this.emptyHandleSubmit = this.emptyHandleSubmit.bind(this)
  }

  componentDidUpdate (prevProps) {
    const referralValue = this.props.customerState.payload.referral_code.payload
    const prevReferralValue =
      prevProps.customerState.payload.referral_code.payload
    const membershipCode = this.props.customerState.payload.membership_code
      .payload

    const prevMembershipCode =
      prevProps.customerState.payload.membership_code.payload
    if (referralValue && referralValue !== prevReferralValue) {
      this.props.setFieldValue('referral_code', referralValue)
    }

    if (membershipCode !== prevMembershipCode) {
      this.props.setFieldValue('membership_code', membershipCode)
    }
  }

  onChangeReferralCode = event => {
    this.checkReferralCode(event.target.value)
    this.props.handleChange(event)
  }

  onChangePhoneNumber = event => {
    const inputValue = event.target.value
    const regexInputExpression = RegExp(NUMBER_VALIDATION_REGEX).test(
      inputValue
    )
    if ((regexInputExpression && inputValue.length <= 10) || !inputValue) {
      this.props.handleChange(event)
    }
  }

  checkReferralCode (value) {
    if (value.length) {
      this.props.checkReferralCodeLoading(this.props.customerState, value)
    }
  }

  emptyHandleSubmit (event) {
    event.preventDefault()
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

    const referralCodeError = customerState.payload.referral_code.errorState
      .error
      ? customerState.payload.referral_code.errorState.error.error.status
      : ''
    const referralCodeLoading = customerState.payload.referral_code.isLoading

    const referralCodeValue = this.props.values.referral_code

    return (
      <form
        onSubmit={
          (!referralCodeValue || !referralCodeError) && !referralCodeLoading
            ? handleSubmit
            : this.emptyHandleSubmit
        }
      >
        <FormControl
          className={classes.formControl}
          aria-describedby='full-name'
          error={errors.full_name && touched.full_name}
        >
          <Input
            id='full_name'
            type='text'
            autoComplete={'off'}
            onChange={handleChange}
            placeholder={'Full Name'}
            value={values.full_name}
          />
          {errors.full_name &&
            touched.full_name &&
            <FormHelperText id='full_name'>
              {errors.full_name}
            </FormHelperText>}
        </FormControl>
        <FormControl
          className={classes.formControl}
          aria-describedby='mobile'
          error={errors.mobile && touched.mobile}
        >
          <Input
            id='mobile'
            autoComplete={'off'}
            placeholder={'Mobile'}
            onChange={this.onChangePhoneNumber}
            value={values.mobile}
            startAdornment={
              <InputAdornment position='start'>
                <span className={classes.mobilePrefix}>{'+91'}</span>
              </InputAdornment>
            }
          />
          {errors.mobile &&
            touched.mobile &&
            <FormHelperText id='mobile'>
              {errors.mobile}
            </FormHelperText>}
        </FormControl>
        <FormControl
          className={classes.formControl}
          aria-describedby='gender'
          error={errors.gender && touched.gender}
        >
          <Select
            value={values.gender}
            onChange={handleChange}
            // placeholder={'Gender'}
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
          {errors.gender &&
            touched.gender &&
            <FormHelperText id='gender'>
              {errors.gender}
            </FormHelperText>}
        </FormControl>
        <FormControl
          className={classes.formControl}
          aria-describedby='referral_code'
          error={
            values.referral_code &&
              ((errors.referral_code && touched.referral_code) ||
                referralCodeError)
          }
        >
          <Input
            id='referral_code'
            autoComplete={'off'}
            placeholder={'Referral Code'}
            onChange={this.onChangeReferralCode}
            value={values.referral_code}
          />
          {customerState.payload.referral_code.isLoading &&
            <CircularProgress className={classes.progress} size={20} />}
          {values.referral_code &&
            ((errors.referral_code && touched.referral_code) ||
              referralCodeError) &&
              <FormHelperText id='referral_code'>
                {referralCodeError ? REFERRAL_CODE_INVALID : errors.referral_code}
              </FormHelperText>}
        </FormControl>
        {this.props.customerState.payload.membership_code.payload &&
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
            {errors.membership_code &&
              touched.membership_code &&
              <FormHelperText id='membership_code'>
                {errors.membership_code}
              </FormHelperText>}
          </FormControl>}
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

export default withStyles(styles)(
  withFormik({
    enableReinitialize: false,
    mapPropsToValues: props => {
      return {
        full_name: '',
        gender: '',
        mobile: props.loginState.payload.initialMobile,
        membership_code: props.customerState.payload.membership_code.payload,
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
      full_name: Yup.string().trim().required(FULL_NAME_REQUIRED),
      mobile: Yup.string()
        .trim()
        .min(10, MOBILE_INVALID)
        .max(10, MOBILE_INVALID)
        .matches(MOBILE_VALIDATION_REGEX, {
          message: MOBILE_INVALID
        })
        .required(MOBILE_REQUIRED),
      gender: Yup.string().required(GENDER_REQUIRED),
      referral_code: Yup.string().trim().max(10, REFERRAL_CODE_INVALID)
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
      props.onSubmit(
        props.customerState,
        props.closeLoginModal,
        setSubmitting,
        values
      )
    },
    displayName: 'RegisterForm' // helps with React DevTools
  })(RegisterForm)
)
