import React from 'react'

import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'

import Button from '../../components/button'

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
          <Grid container spacing={24}>
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
          </Grid>
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
