import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Snackbar from '@material-ui/core/Snackbar'

import Button from '../../components/button'
import PaymentChannels from '../../components/PaymentChannels'
import TermsAndCondition from './TermsAndCondition'
import PaymentDeliveryDetail from './PaymentDeliveryDetail'

import { SELECT_PAYMENT_MODE, ATLEAST_ONE_ITEM } from '../messages/cartMessages'

import {
  SERVICE_TYPE_LFASSURED,
  DELIVERY_OPTION_NORMAL,
  SNACK_BAR_DURATION
} from '../../components/constants/Constants'

class PaymentExpansionPanel extends React.Component {
  state = {
    paymentChannel: '',
    isShowSnackbar: false,
    snackBarMsg: ''
  }

  placeOrder () {
    if (
      this.state.paymentChannel !== '' ||
      !this.props.cartState.payload.total_payable_amount
    ) {
      this.props.submitOrderLoading(
        this.props.cartState,
        this.state.paymentChannel
      )
    } else if (
      !this.props.cartState.payload.cart_items.payload.length &&
      !this.props.cartState.payload.is_doctor_callback.payload &&
      !this.props.cartState.payload.cart_prescriptions.length
    ) {
      this.setState({
        isShowSnackbar: true
      })
      this.setState({
        snackBarMsg: ATLEAST_ONE_ITEM
      })
    } else {
      this.setState({
        isShowSnackbar: true
      })
      this.setState({
        snackBarMsg: SELECT_PAYMENT_MODE
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
    const shippingAddressDetails = this.props.cartState.payload
      .shipping_address_details
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
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <img
            src='/static/images/payment.svg'
            className={this.props.imageIcon}
          />
          <Typography component='h1' className={this.props.heading}>
            Payment
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          classes={{
            root: this.props.thankYouWrapper
          }}
        >
          {(this.props.cartState.payload.service_type ===
            SERVICE_TYPE_LFASSURED ||
            this.props.cartState.payload.delivery_option !==
              DELIVERY_OPTION_NORMAL) &&
              <PaymentDeliveryDetail
                cartState={this.props.cartState}
                optForExpressDeliveryLoading={
                  this.props.optForExpressDeliveryLoading
                }
                constantsState={this.props.constantsState}
              />}
          {this.props.cartState.payload.total_payable_amount
            ? <div>
              <Typography className={this.props.selectPaymentMode}>
                  SELECT PAYMENT MODE
              </Typography>
              <PaymentChannels
                radioWrapper={this.props.radioWrapper}
                paymentChannel={this.state.paymentChannel}
                paymentChannelsPayload={
                  this.props.cartState.payload.payment_channels
                }
                handlePaymentChannelsChange={this.handlePaymentChannelsChange.bind(
                  this
                )}
              />
            </div>
            : null}
          <TermsAndCondition
            retailFaciltyName={this.props.cartState.payload.seller_detail.retail_facilty_name}
          />
          <Button
            size='small'
            color='primary'
            variant='raised'
            classes={{
              root: this.props.nextButtonRoot
            }}
            label={
              this.props.cartState.payload.total_payable_amount
                ? 'PLACE ORDER'
                : 'Place a COD Order'
            }
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
            message={<span>{this.state.snackBarMsg}</span>}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default PaymentExpansionPanel
