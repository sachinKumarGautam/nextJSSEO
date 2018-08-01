import React from 'react'

import Radio from '@material-ui/core/Radio'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'

import Button from '../../components/button'
import TermsAndCondition from './TermsAndCondition'
import PaymentDeliveryDetail from './PaymentDeliveryDetail'

class PaymentExpansionPanel extends React.Component {
  placeOrder () {
    this.props.submitOrderLoading(
      this.props.cartState
    )
  }

  render () {
    return (
      <ExpansionPanel
        expanded={this.props.expanded === 'panel5'}
        onChange={
          this.props.loginState.isAuthenticated &&
          this.props.cartState.payload.shipping_address_details.payload.shipping_address_id
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
            (this.props.cartState.payload.service_type === 'LF_ASSURED' ||
            this.props.cartState.payload.delivery_option === 'NORMAL') &&
            <PaymentDeliveryDetail
              cartState={this.props.cartState}
            />
          }
          <div className={this.props.radioWrapper}>
            <Radio
              checked
              name='radio-button-demo'
              classes={{
                root: this.props.radioButton,
                checked: this.props.checked
              }}
            />
            <Typography
              component='h2'
              className={this.props.paymentDescription}
            >
              Cash On Delivery
            </Typography>
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
              !this.props.cartState.payload.patient_details.payload.patient_id ||
              !this.props.cartState.payload.shipping_address_details.payload.shipping_address_id
            }
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default PaymentExpansionPanel
