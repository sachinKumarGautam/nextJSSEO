import React from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'

import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Button from '../../components/button'
import { withStyles } from '@material-ui/core/styles'
import LocationSearch from './LocationSearch'
import {
  FULL_NAME_REQUIRED,
  MOBILE_REQUIRED,
  STATE_REQUIRED,
  LOCALITY_REQUIRED,
  CITY_REQUIRED,
  PINCODE_REQUIRED,
  STREET1_REQUIRED,
  MOBILE_INVALID,
  MOBILE_VALIDATION_REGEX
} from '../../containers/messages/ValidationMsg'

// Helper styles for demo

const styles = theme => ({
  formControl: {
    marginBottom: theme.spacing.unit,
    width: '100%',
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 6
  },
  valueStyle: {
    ...theme.typography.body1,
    color: theme.palette.customGrey.grey500,
    marginTop: theme.spacing.unit * 2
  },
  buttonWrapper: {
    marginTop: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  formHelperText: {
    textAlign: 'center'
  }
})

class DeliveryForm extends React.Component {
  onPincodeInput (handleChange, event) {
    if (event.target.value.length > 6) return
    else if (event.target.value.length === 6) {
      this.props.checkPincodeDetailLoading(
        this.props.checkPincodeState,
        { handleClose: '' },
        { setSubmitting: '' },
        event.target.value,
        { isDeliveryAddress: true }
      )
    }

    this.props.updateAddressFormValue(
      this.props.deliveryDetailsState,
      'pincode',
      event.target.value
    )
  }

  onChange (name, handleChange, event) {
    if (name === 'mobile' && event.target.value.length > 10) return
    this.props.updateAddressFormValue(
      this.props.deliveryDetailsState,
      name,
      event.target.value
    )
  }

  onLocalityChange (handleChange, value) {
    this.props.updateAddressFormValue(
      this.props.deliveryDetailsState,
      'locality',
      value
    )
  }

  render () {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleSubmit,
      handleChange,
      classes
    } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <FormControl
          className={classes.formControl}
          aria-describedby='full-name'
          error={errors.full_name && touched.full_name}
        >
          <Input
            placeholder='Full Name'
            className={classes.valueStyle}
            id='full_name'
            type='text'
            onChange={this.onChange.bind(this, 'full_name', handleChange)}
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
            placeholder='Phone No.'
            className={classes.valueStyle}
            id='mobile'
            type='number'
            onChange={this.onChange.bind(this, 'mobile', handleChange)}
            value={values.mobile}
          />
          {errors.mobile &&
            touched.mobile &&
            <FormHelperText id='mobile'>
              {errors.mobile}
            </FormHelperText>}
        </FormControl>
        <FormControl
          className={classes.formControl}
          aria-describedby='pincode'
          error={errors.pincode && touched.pincode}
        >
          <Input
            placeholder='Pincode'
            className={classes.valueStyle}
            id='pincode'
            type='number'
            onChange={this.onPincodeInput.bind(this, handleChange)}
            value={values.pincode}
          />
          {errors.pincode &&
            touched.pincode &&
            <FormHelperText id='pincode'>
              {errors.pincode}
            </FormHelperText>}
        </FormControl>
        <FormControl
          className={classes.formControl}
          aria-describedby='locality'
          error={errors.locality && touched.locality}
        >
          <LocationSearch
            onChange={this.onLocalityChange.bind(this, handleChange)}
            deliveryDetailsState={this.props.deliveryDetailsState}
            getLocalityDetailListLoading={
              this.props.getLocalityDetailListLoading
            }
          />
          {errors.locality &&
            touched.locality &&
            <FormHelperText id='locality'>
              {errors.locality}
            </FormHelperText>}
        </FormControl>
        <FormControl
          className={classes.formControl}
          aria-describedby='street1'
          error={errors.street1 && touched.street1}
        >
          <Input
            placeholder='Flat/House/Office No.'
            className={classes.valueStyle}
            id='street1'
            type='text'
            onChange={this.onChange.bind(this, 'street1', handleChange)}
            value={values.street1}
          />
          {errors.street1 &&
            touched.street1 &&
            <FormHelperText id='street1'>
              {errors.street1}
            </FormHelperText>}
        </FormControl>
        <FormControl className={classes.formControl} aria-describedby='street2'>
          <Input
            placeholder='Street/Society(Optional)'
            className={classes.valueStyle}
            id='street2'
            type='text'
            onChange={this.onChange.bind(this, 'street2', handleChange)}
            value={values.street2}
          />
        </FormControl>
        <FormControl
          className={classes.formControl}
          aria-describedby='city'
          error={errors.city && touched.city}
          disabled
        >
          <Input
            placeholder='  City'
            className={classes.valueStyle}
            id='city'
            type='text'
            onChange={handleChange}
            value={values.city}
          />
          {errors.city &&
            touched.city &&
            <FormHelperText id='city'>
              {errors.city}
            </FormHelperText>}
        </FormControl>
        <FormControl
          className={classes.formControl}
          aria-describedby='state'
          error={errors.state && touched.state}
          disabled
        >
          <Input
            placeholder='State'
            className={classes.valueStyle}
            id='state'
            type='text'
            onChange={handleChange}
            value={values.state}
          />
          {errors.city &&
            touched.state &&
            <FormHelperText id='state'>
              {errors.state}
            </FormHelperText>}
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

export default withStyles(styles)(
  withFormik({
    enableReinitialize: true,
    mapPropsToValues: props => {
      return {
        full_name: props.deliveryDetailsState.addressForm.full_name,
        mobile: props.deliveryDetailsState.addressForm.mobile,
        pincode: props.deliveryDetailsState.addressForm.pincode,
        locality: props.deliveryDetailsState.addressForm.locality,
        street1: props.deliveryDetailsState.addressForm.street1,
        street2: props.deliveryDetailsState.addressForm.street2,
        city: props.deliveryDetailsState.addressForm.city,
        state: props.deliveryDetailsState.addressForm.state
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
      pincode: Yup.string().trim().required(PINCODE_REQUIRED),
      locality: Yup.string().trim().required(LOCALITY_REQUIRED),
      street1: Yup.string().trim().required(STREET1_REQUIRED),
      city: Yup.string().trim().required(CITY_REQUIRED),
      state: Yup.string().trim().required(STATE_REQUIRED)
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
  })(DeliveryForm)
)
