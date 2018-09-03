import React from 'react'

import Grid from '@material-ui/core/Grid'

import OrderConfirmationDetails from './OrderConfirmationDetails'
import PaymentFailure from './PaymentFailure'
import RetryPayment from './RetryPayment'
import MyCartDetails from './MyCartDetails'

class OrderConfirmation extends React.Component {
  render () {
    return (
      <Grid container>
        <Grid item xs={7}>
          {
            this.props.queryParamPaymentStatus === 'failed' &&
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
            this.props.queryParamPaymentStatus === 'success' &&
            <OrderConfirmationDetails
              cartState={this.props.cartState}
              submitRefillDateLoading={this.props.submitRefillDateLoading}
              thankYouState={this.props.thankYouState}
              viewYouOrder={this.props.viewYouOrder}
            />
          }
          {
            this.props.queryParamPaymentStatus === 'retry' &&
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
        </Grid>
        <Grid item xs={5}>
          <MyCartDetails cartState={this.props.cartState} />
        </Grid>
      </Grid>
    )
  }
}

export default OrderConfirmation
