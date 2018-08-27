import React from 'react'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'

import Button from '../../components/button'
import TermsAndCondition from './TermsAndCondition'
import PaymentDeliveryDetail from './PaymentDeliveryDetail'

import {
  LF_ASSURED,
  NORMAL
} from '../../components/constants/Constants'

class PaymentExpansionPanel extends React.Component {
  state = {
    paymentChannel: ''
  }

  placeOrder () {
    this.props.submitOrderLoading(
      this.props.cartState,
      this.state.paymentChannel
    )
  }

  handlePaymentChannelsChange (event) {
    this.setState({
      paymentChannel: event.target.value
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
            />
          }
          <div className={this.props.radioWrapper}>
            <RadioGroup
              aria-label='Payment Channels'
              name='payment_channels'
              value={this.state.paymentChannel}
              onChange={this.handlePaymentChannelsChange.bind(this)}
            >
              {
                this.props.cartState.payload.payment_channels.map(paymentChannel => {
                  return (
                    <FormControlLabel
                      value={paymentChannel.method}
                      control={
                        <Radio
                          classes={{
                            root: this.props.radioButton,
                            checked: this.props.checked
                          }}
                        />
                      }
                      label={paymentChannel.name}
                    />
                  )
                })
              }
            </RadioGroup>
          </div>
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
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default PaymentExpansionPanel
