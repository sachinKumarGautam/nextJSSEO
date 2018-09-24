import React from 'react'

import Grid from '@material-ui/core/Grid'

import OrderConfirmationDetails from './OrderConfirmationDetails'
import PaymentFailure from './PaymentFailure'
import RetryPayment from './RetryPayment'
import MyCartDetails from './MyCartDetails'

import {
  PAYMENT_FAILED,
  PAYMENT_SUCCESS,
  PAYMENT_RETRY
} from '../../components/constants/paymentConstants'

import ActivityIndicator from '../../components/activityIndicator/index'
import SnackbarErrorMessage from '../../components/activityIndicator/error/SnackbarErrorMessage'

class OrderConfirmation extends React.Component {
  resetPaymentInitiateErrorState () {
    this.props.resetPaymentInitiateErrorState(this.props.cartState)
  }

  render () {
    return (
      <Grid container>
        <Grid item xs={7}>
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
            {
              this.props.queryParamPaymentStatus === PAYMENT_FAILED &&
              <PaymentFailure
                cartState={this.props.cartState}
                submitRefillDateLoading={this.props.submitRefillDateLoading}
                paymentInitiateLoading={this.props.paymentInitiateLoading}
                resetCartState={this.props.resetCartState}
                thankYouState={this.props.thankYouState}
                retryPayment={this.props.retryPayment}
                orderId={this.props.orderId}
                getPaymentChannelsLoading={this.props.getPaymentChannelsLoading}
                orderDetailsState={this.props.orderDetailsState}
              />
            }
            {
              this.props.queryParamPaymentStatus === PAYMENT_SUCCESS &&
              <OrderConfirmationDetails
                cartState={this.props.cartState}
                submitRefillDateLoading={this.props.submitRefillDateLoading}
                thankYouState={this.props.thankYouState}
                viewYouOrder={this.props.viewYouOrder}
                constantsState={this.props.constantsState}
              />
            }
            {
              this.props.queryParamPaymentStatus === PAYMENT_RETRY &&
              <RetryPayment
                cartState={this.props.cartState}
                customerState={this.props.customerState}
                getPaymentChannelsLoading={this.props.getPaymentChannelsLoading}
                paymentInitiateLoading={this.props.paymentInitiateLoading}
                updatePaymentFailureFlag={this.props.updatePaymentFailureFlag}
                verifyPaymentLoading={this.props.verifyPaymentLoading}
                resetCartState={this.props.resetCartState}
                thankYouState={this.props.thankYouState}
                orderDetailsState={this.props.orderDetailsState}
                orderId={this.props.orderId}
              />
            }
          </ActivityIndicator>
        </Grid>
        <Grid item xs={5}>
          <MyCartDetails cartState={this.props.cartState} />
        </Grid>
      </Grid>
    )
  }
}

export default OrderConfirmation
