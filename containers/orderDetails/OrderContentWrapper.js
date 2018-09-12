import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'

import Bazooka from './Bazooka'
import PatientDetails from './PatientDetails'
import AddressDetails from './AddressDetails'
import Prescriptions from './Prescriptions'
import DeliveryDate from './DeliveryDate'
import PaymentDetails from './PaymentDetails'
import PaymentDeliveryDetail from './PaymentDeliveryDetail'
import OrderStatusDetails from './OrderStatusDetails'
// import OrderDetailsFooter from './OrderDetailsFooter'
import MedicineList from './MedicineList'
import CouponMessage from './CouponMessage'
import PriceDetails from './PriceDetails'
import TotalAmount from './TotalAmount'
import TermsAndCondition from './TermsAndCondition'

import Button from '../../components/button'

import {
  PAYMENT_PENDING
} from '../../components/constants/paymentConstants'

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
  OrderDetailsFooter
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

const OrderContentWrapper = (props) => {
  return (
    <div className={props.classes.orderContentWrapper}>
      <OrderStatusDetails
        orderId={props.orderDetailsState.payload.id}
        serviceType={props.orderDetailsState.payload.service_type}
        deliveryOption={props.orderDetailsState.payload.delivery_option}
      />
      <Divider />
      <PaymentDetails
        createdAt={props.orderDetailsState.payload.created_at}
        paymentMethod={props.orderDetailsState.payload.payment_method}
        paymentStatus={props.orderDetailsState.payload.viewStatus}
      />
      <Bazooka
        orderDetailsState={props.orderDetailsState}
      />
      <PaymentDeliveryDetail
        deliveryOption={props.orderDetailsState.payload.delivery_option}
        serviceType={props.orderDetailsState.payload.service_type}
        constantsState={props.constantsState}
      />
      <DeliveryDate
        promisedDeliveryDate={props.orderDetailsState.payload.promised_delivery_date}
      />
      {
        props.orderDetailsState.payload.order_prescriptions.length
          ? (
            <Prescriptions
              orderPrescriptions={props.orderDetailsState.payload.order_prescriptions}
            />
          ) : null
      }
      <PatientDetails
        patientFirstName={props.orderDetailsState.payload.patient_first_name}
        patientLastName={props.orderDetailsState.payload.patient_last_name}
      />
      <AddressDetails
        shippingAddress={props.orderDetailsState.payload.shipping_address}
      />
      {
        props.orderDetailsState.payload.order_items.length
          ? (
            <MedicineList
              orderItems={props.orderDetailsState.payload.order_items}
            />
          ) : null
      }
      <CouponMessage />
      <Divider className={props.classes.divider} />
      {
        props.orderDetailsState.payload.order_items.length
          ? (
            <PriceDetails
              orderDetailsState={props.orderDetailsState}
            />
          ) : null
      }
      {
        props.orderDetailsState.payload.order_items.length
          ? (
            <TotalAmount
              orderDetailsState={props.orderDetailsState}
            />
          ) : null
      }
      <TermsAndCondition
        sellerName={props.orderDetailsState.payload.seller_name}
      />
      {
        props.orderDetailsState.payload.status === PAYMENT_PENDING &&
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
            onClick={props.retryPayment}
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
            onClick={props.placeOrder}
            label={'Convert to COD'}
          />
        </div>
      }
      {
        // <OrderDetailsFooter />
      }
    </div>
  )
}

export default withStyles(styles)(OrderContentWrapper)
