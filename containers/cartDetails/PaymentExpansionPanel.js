import React from 'react'

import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'

import Button from '../../components/button'

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
          this.props.loginState.isAuthenticated
            ? this.props.handleChange
            : null
        }
        className={this.props.expansionPanel}
      >
        <ExpansionPanelSummary expandIcon={<div />}>
          <img src='/static/images/attachedPrescriptions.svg' className={this.props.imageIcon}/>
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
            <Grid item xs={1}>
              <Radio
                checked
                name='radio-button-demo'
                classes={{
                  root: this.props.radioButton,
                  checked: this.props.checked
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography
                component='h2'
                className={this.props.paymentDescription}
              >
                CASH ON DELIVERY
              </Typography>
            </Grid>
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
              !this.props.cartState.payload.patient_id.payload ||
              !this.props.cartState.payload.shipping_address_id.payload
            }
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default PaymentExpansionPanel
