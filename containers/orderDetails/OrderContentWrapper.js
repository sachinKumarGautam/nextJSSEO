import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

import PatientDetails from './PatientDetails'
import AddressDetails from './AddressDetails'
import Prescriptions from './Prescriptions'
import DeliveryDate from './DeliveryDate'
import PaymentDetails from './PaymentDetails'
import PaymentDeliveryDetail from './PaymentDeliveryDetail'
import OrderStatusDetails from './OrderStatusDetails'
import MedicineList from './MedicineList'
import CouponMessage from './CouponMessage'
import PriceDetails from './PriceDetails'
import TotalAmount from './TotalAmount'
import TermsAndCondition from './TermsAndCondition'

import Button from '../../components/button'

/*
  OrderStatusDetails
  PaymentDetails
  Bazooka
  DeliveryDate
  Prescriptions
  PatientDetails
  AddressDetails
  MedicineList
  Coupon
  PricingDetails
  Terms&Conditions
  Buttons
*/

const styles = theme => ({
  orderContentWrapper: {
    padding: theme.spacing.unit * 2.5,
    paddingTop: theme.spacing.unit * 3.75
  },
  buttonViewRoot: {
    border: `1px solid ${theme.palette.customGreen.green300}`
  },
  buttonViewLabel: {
    color: theme.palette.customGreen.green300,
    fontWeight: theme.typography.fontWeightBold
  },
  buttonViewStyle: {
    ...theme.typography.body2,
    width: theme.spacing.unit * 29.125,
    height: theme.spacing.unit * 3.75,
    textAlign: 'center',
    marginRight: theme.spacing.unit * 2.37,
    lineHeight: 0
  },
  buttonHomeLabel: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold
  },
  buttonHomeStyle: {
    ...theme.typography.body2,
    width: theme.spacing.unit * 29.125,
    height: theme.spacing.unit * 3.75,
    textAlign: 'center',
    lineHeight: 0
  },
  buttonWrapper: {
    marginLeft: theme.spacing.unit * 5.25,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing.unit * 5.37,
    marginTop: theme.spacing.unit * 5.37,
    justifyContent: 'center'
  },
  divider: {
    marginLeft: theme.spacing.unit * 2.5
  }
})

const steps = ['Processing', 'Confirmed', 'Dispatched', 'Delivered']

const OrderContentWrapper = (props) => {
  return (
    <div className={props.classes.orderContentWrapper}>
      <OrderStatusDetails
        orderId={props.orderDetailsState.payload.id}
      />
      <Divider />
      <PaymentDetails />
      <Stepper activeStep={0} alternativeLabel>
        {steps.map(label => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <PaymentDeliveryDetail />
      <DeliveryDate />
      <Prescriptions />
      <PatientDetails />
      <AddressDetails
        shippingAddress={props.orderDetailsState.payload.shipping_address}
      />
      <MedicineList
        orderItems={props.orderDetailsState.payload.order_items}
      />
      <CouponMessage />
      <Divider className={props.classes.divider} />
      <PriceDetails
        cartState={props.cartState}
      />
      <TotalAmount
        cartState={props.cartState}
      />
      <TermsAndCondition />
      <div className={props.classes.buttonWrapper}>
        <Button
          size='small'
          variant='outlined'
          color='primary'
          classes={{
            root: props.classes.buttonViewRoot,
            label: props.classes.buttonViewLabel
          }}
          className={props.classes.buttonViewStyle}
          // onClick={this.handleClickOpen}
          label={'Retry Payment'}
        />
        <Button
          size='small'
          variant='raised'
          color='primary'
          classes={{
            label: props.classes.buttonHomeLabel
          }}
          className={props.classes.buttonHomeStyle}
          // onClick={() => { Router.push({ pathname: HOME_PAGE }) }}
          label={'Convert to COD'}
        />
      </div>
    </div>
  )
}

export default withStyles(styles)(OrderContentWrapper)
