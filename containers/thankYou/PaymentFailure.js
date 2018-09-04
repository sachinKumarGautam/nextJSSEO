import React from 'react'

import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'

import PaymentFailedDetails from './PaymentFailedDetails'
import Button from '../../components/button'

import Router from 'next/router'

import {
  THANK_YOU,
  ORDER_DETAILS
} from '../../routes/RouteConstant'

import {
  getReplacedString
} from '../../utils/replaceConstants'

import ActivityIndicator from '../../components/activityIndicator/index'
import SnackbarErrorMessage from '../../components/activityIndicator/error/SnackbarErrorMessage'

const styles = theme => ({
  cardContent: {
    paddingBottom: 0
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
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    textAlign: 'center',
    marginRight: theme.spacing.unit * 2.37
  },
  buttonHomeRoot: {
    border: `1px solid ${theme.palette.customGrey.grey500}`
  },
  buttonHomeLabel: {
    color: theme.palette.customGrey.grey500,
    fontWeight: theme.typography.fontWeightBold
  },
  buttonHomeStyle: {
    ...theme.typography.body2,
    paddingLeft: theme.spacing.unit * 9.12,
    paddingRight: theme.spacing.unit * 9,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    textAlign: 'center'
  },
  buttonWrapper: {
    marginLeft: theme.spacing.unit * 5.25,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing.unit * 5.37,
    marginTop: theme.spacing.unit * 10
  },
  paymentPendingDesc: {
    margin: `${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 5}px`
  }
})

class PaymentFailure extends React.Component {
  componentDidUpdate (prevProps) {
    if (
      (this.props.cartState.isOrderSubmitted !==
      prevProps.cartState.isOrderSubmitted) &&
      this.props.cartState.isOrderSubmitted &&
      this.props.cartState.orderResponse.payload.order_type === 'COD'
    ) {
      this.props.resetCartState()
      const url = getReplacedString(THANK_YOU)
      const as = `${url}?payment-status=success`
      const href = `${url}?payment-status=success`
      Router.push(href, as)
    }

    if (
      (this.props.cartState.isRedirectToOrderDetailsPage !==
      prevProps.cartState.isRedirectToOrderDetailsPage) &&
      this.props.cartState.isRedirectToOrderDetailsPage
    ) {
      const url = getReplacedString(ORDER_DETAILS)
      Router.push(url)
    }
  }

  placeOrder () {
    const paymentChannel = 'COD'

    this.props.paymentInitiateLoading(
      this.props.cartState,
      this.props.orderId,
      paymentChannel
    )
  }

  resetPaymentInitiateErrorState () {
    this.props.resetPaymentInitiateErrorState(this.props.cartState)
  }

  render () {
    return (
      <Card elevation={'1'}>
        <CardContent className={this.props.classes.cardContent}>
          <ActivityIndicator
            isError={
              this.props.cartState.payment.errorState.isError
            }
            ErrorComp={
              <SnackbarErrorMessage
                error={
                  this.props.cartState.payment.errorState.error
                }
                resetState={this.resetPaymentInitiateErrorState.bind(this)}
              />
            }
            bottomError
          >
            <PaymentFailedDetails
              cartState={this.props.cartState}
            />
            <Divider />
            <div className={this.props.classes.paymentPendingDesc}>
              <Typography>
                We have received your Order No. {this.props.cartState.orderResponse.payload.order_number}.
                However, the payment was unsuccessful. If money has been deducted, your order will be confirmed in the next
                {' ' + this.props.cartState.payload.payment_confirmation_time + ' '}
                minutes and you will receive a confirmation message. In case you dont receive
                a confirmation, the amount deducted will be automatically refunded
                back to your account in the next 5-7 days. You have an option to retry the
                payment or convert your order into cash on delivery till the next
                {' ' + this.props.cartState.payload.payment_cancellation_time + ' '}.
                Post that, your order will be automatically cancelled. Please feel free to
                reach out to us at
                {' ' + this.props.cartState.payload.customer_care_number + ' '} in case of any queries.
              </Typography>
            </div>
            <div className={this.props.classes.buttonWrapper}>
              <Button
                size='small'
                variant='outlined'
                color='primary'
                classes={{
                  root: this.props.classes.buttonViewRoot,
                  label: this.props.classes.buttonViewLabel
                }}
                className={this.props.classes.buttonViewStyle}
                onClick={this.props.retryPayment}
                label={'Retry Payment'}
              />
              <Button
                size='small'
                variant='raised'
                color='primary'
                className={this.props.classes.buttonViewStyle}
                onClick={this.placeOrder.bind(this)}
                label={'Convert to COD'}
              />
            </div>
          </ActivityIndicator>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(PaymentFailure)
