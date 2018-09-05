import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import Snackbar from '@material-ui/core/Snackbar'

import Button from '../../components/button'
import PaymentChannels from '../../components/PaymentChannels'
import TermsAndCondition from './TermsAndCondition'
import PaymentDeliveryDetail from './PaymentDeliveryDetail'

import { SELECT_PAYMENT_MODE } from '../messages/cartMessages'

import {
  LF_ASSURED,
  NORMAL,
  SNACK_BAR_DURATION
} from '../../components/constants/Constants'

class PaymentExpansionPanel extends React.Component {
  state = {
    paymentChannel: '',
    isShowSnackbar: false
  }

  placeOrder () {
    if (
      this.state.paymentChannel !== '' ||
      !this.props.cartState.payload.cart_items.payload.length
    ) {
      this.props.submitOrderLoading(
        this.props.cartState,
        this.state.paymentChannel
      )
    } else {
      this.setState({
        isShowSnackbar: true
      })
    }
  }

  handlePaymentChannelsChange (event) {
    this.setState({
      paymentChannel: event.target.value
    })
  }

  handleClose () {
    this.setState({
      isShowSnackbar: false
    })
  }

  render () {
    const shippingAddressDetails = this.props.cartState.payload.shipping_address_details
    const patientDetails = this.props.cartState.payload.patient_details

    return (
      <ExpansionPanel
        expanded={this.props.expanded === 'panel5'}
        onChange={
          this.props.loginState.isAuthenticated &&
          shippingAddressDetails.payload.shipping_address_id
            ? this.props.handleChange
            : null
        }
        className={this.props.expansionPanel}
      >
        <ExpansionPanelSummary expandIcon={<div />}>
          <img src='/static/images/payment.svg' className={this.props.imageIcon} />
          <Typography
            component='h1'
            className={this.props.heading}
          >
            Payment
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          classes={{
            root: this.props.thankYouWrapper
          }}
        >
          {
            (this.props.cartState.payload.service_type === LF_ASSURED ||
            this.props.cartState.payload.delivery_option !== NORMAL) &&
            <PaymentDeliveryDetail
              cartState={this.props.cartState}
              optForExpressDeliveryLoading={this.props.optForExpressDeliveryLoading}
              constantsState={this.props.constantsState}
            />
          }
          {
            this.props.cartState.payload.cart_items.payload.length
              ? (
                <div>
                  <Typography
                    className={this.props.selectPaymentMode}
                  >
                    SELECT PAYMENT MODE
                  </Typography>
                  <PaymentChannels
                    radioWrapper={this.props.radioWrapper}
                    paymentChannel={this.state.paymentChannel}
                    paymentChannelsPayload={this.props.cartState.payload.payment_channels}
                    handlePaymentChannelsChange={this.handlePaymentChannelsChange.bind(this)}
                  />
                </div>
              ) : null
          }
          <TermsAndCondition />
          <Button
            size='small'
            color='primary'
            variant='raised'
            classes={{
              root: this.props.nextButtonRoot
            }}
            label={'Place Order'}
            onClick={this.placeOrder.bind(this)}
            disabled={
              !patientDetails.payload.patient_id ||
              !shippingAddressDetails.payload.shipping_address_id
            }
          />
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            autoHideDuration={SNACK_BAR_DURATION}
            open={this.state.isShowSnackbar}
            onClose={this.handleClose.bind(this)}
            ContentProps={{
              'aria-describedby': 'cart-items'
            }}
            message={<span>{SELECT_PAYMENT_MODE}</span>}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default PaymentExpansionPanel
