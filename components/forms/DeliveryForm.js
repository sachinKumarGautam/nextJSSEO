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
import {
  FULL_NAME_REQUIRED,
  MOBILE_REQUIRED,
  STATE_REQUIRED,
  LOCALITY_REQUIRED,
  CITY_REQUIRED,
  PINCODE_REQUIRED
} from '../../containers/messages/ValidationMsg'

// Helper styles for demo

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    width: '100%',
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 6
  },
  labelStyle: {
    ...theme.typography.subheading,
    color: theme.palette.customGrey.grey200,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 5
  },
  buttonWrapper: {
    marginTop: theme.spacing.unit * 3,
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 2
  },
  formHelperText: {
    textAlign: 'center'
  }
})

class DeliveryForm extends React.Component {
  render () {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleSubmit,
      classes,
      onSubmit
    } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <FormControl
          className={classes.formControl}
          aria-describedby='full-name'
          error={errors.full_name && touched.full_name}
        >
          <InputLabel
            className={classes.labelStyle}
            htmlFor='full_name'
          >
            Full Name
          </InputLabel>
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
          <InputLabel
            className={classes.labelStyle}
            htmlFor='mobile'
          >
            Phone No.
          </InputLabel>
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
          aria-describedby='pincode'
          error={errors.pincode && touched.pincode}
        >
          <InputLabel
            className={classes.labelStyle}
            htmlFor='pincode'
          >
            Pincode
          </InputLabel>
          <Input
            id='pincode'
            type='number'
            onChange={handleChange}
            value={values.pincode}
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
        <FormControl
          className={classes.formControl}
          aria-describedby='locality'
          error={errors.locality && touched.locality}
        >
          <InputLabel
            className={classes.labelStyle}
            htmlFor='locality'
          >
            Locality
          </InputLabel>
          <Input
            id='locality'
            type='text'
            onChange={handleChange}
            value={values.locality}
          />
          {
            errors.locality && touched.locality &&
            <FormHelperText
              id='locality'
            >
              {errors.locality}
            </FormHelperText>
          }
        </FormControl>
        <FormControl
          className={classes.formControl}
          aria-describedby='city'
          error={errors.city && touched.city}
        >
          <InputLabel
            className={classes.labelStyle}
            htmlFor='city'
          >
            City
          </InputLabel>
          <Input
            id='city'
            type='text'
            onChange={handleChange}
            value={values.city}
          />
          {
            errors.city && touched.city &&
            <FormHelperText
              id='city'
            >
              {errors.city}
            </FormHelperText>
          }
        </FormControl>
        <FormControl
          className={classes.formControl}
          aria-describedby='state'
          error={errors.state && touched.state}
        >
          <InputLabel
            className={classes.labelStyle}
            htmlFor='state'
          >
            State
          </InputLabel>
          <Input
            id='state'
            type='text'
            onChange={handleChange}
            value={values.state}
          />
          {
            errors.city && touched.state &&
            <FormHelperText
              id='state'
            >
              {errors.state}
            </FormHelperText>
          }
        </FormControl>

        <div className={classes.buttonWrapper}>
          <Button
            type='submit'
            isloading={isSubmitting}
            variant='raised'
            color='primary'
            label={'Save'}
          />
        </div>
      </form>
    )
  }
}

export default withStyles(styles)(withFormik({
  mapPropsToValues: (props) => {
    return {
      full_name: '',
      mobile: '',
      pincode: '',
      locality: '',
      street1: 'deafult street1',
      street2: 'deafult street2',
      city: '',
      state: ''
    }
  },
  validationSchema: Yup.object().shape({
    full_name: Yup.string().required(FULL_NAME_REQUIRED),
    mobile: Yup.number().required(MOBILE_REQUIRED),
    pincode: Yup.string().required(PINCODE_REQUIRED),
    locality: Yup.string().required(LOCALITY_REQUIRED),
    city: Yup.string().required(CITY_REQUIRED),
    state: Yup.string().required(STATE_REQUIRED)
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(
      props.deliveryDetailsState,
      props.deliveryFormState,
      props.customerId,
      setSubmitting,
      props.closeModal,
      values,
      props.isCartPage
    )
  },
  displayName: 'DeliveryForm' // helps with React DevTools
})(DeliveryForm))
