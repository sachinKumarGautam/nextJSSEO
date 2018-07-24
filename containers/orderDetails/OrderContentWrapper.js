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
import OrderStatusDetails from './OrderStatusDetails'

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
  }
})

const steps = ['Processing', 'Confirmed', 'Dispatched', 'Delivered']

const OrderContentWrapper = (props) => {
  return (
    <div className={props.classes.orderContentWrapper}>
      <OrderStatusDetails />
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
      <DeliveryDate />
      <Prescriptions />
      <PatientDetails />
      <AddressDetails />
    </div>
  )
}

export default withStyles(styles)(OrderContentWrapper)
