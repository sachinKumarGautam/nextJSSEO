import React from 'react'

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import Button from '../../components/button'

import Router from 'next/router'

import {
  THANK_YOU,
  ORDER_DETAILS
} from '../../routes/RouteConstant'

import {
  getReplacedString
} from '../../utils/replaceConstants'

import openRazorpayCheckout from '../../utils/openRazorpayCheckout'

import ActivityIndicator from '../../components/activityIndicator/index'
import ComponentSpecificError from '../../components/activityIndicator/error/ComponentSpecificError'

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
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    textAlign: 'center'
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
    marginRight: theme.spacing.unit * 3.75,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing.unit * 5.37,
    marginTop: theme.spacing.unit * 1.25
  },
  radioButton: {
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 4,
    '&$checked': {
      color: theme.palette.customGreen.green300
    }
  },
  checked: {},
  radioWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 7.5
  },
  imageStyle: {
    marginLeft: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit * 3.5,
    marginBottom: theme.spacing.unit * 2.25
  },
  thankyou: {
    fontSize: theme.spacing.unit * 2.75,
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit * 4
  },
  orderWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  selectPaymentMode: {
    marginLeft: theme.spacing.unit * 11.25,
    marginTop: theme.spacing.unit * 2.5,
    fontSize: theme.spacing.unit * 1.75
  }
})

class RetryPayment extends React.Component {
  state = {
    paymentChannel: ''
  }

  componentDidMount () {
    this.props.getPaymentChannelsLoading(
      this.props.orderDetailsState,
      this.props.orderId
    )
  }

  retryPayment () {
    this.props.paymentInitiateLoading(
      this.props.cartState,
      this.props.orderId,
      this.state.paymentChannel
    )
  }

  handlePaymentChannelsChange (event) {
    this.setState({
      paymentChannel: event.target.value
    })
  }

  componentDidUpdate (prevProps) {
    if (
      (this.props.cartState.isOrderSubmitted !==
      prevProps.cartState.isOrderSubmitted) &&
      this.props.cartState.isOrderSubmitted &&
      this.props.cartState.orderResponse.payload.order_type !== 'COD'
    ) {
      this.openCheckout(this.props.cartState)
    }

    if (
      (this.props.cartState.payment.isPaymentSuccessful !==
      prevProps.cartState.payment.isPaymentSuccessful) &&
      this.props.cartState.payment.isPaymentSuccessful
    ) {
      this.props.resetCartState()
      const url = getReplacedString(THANK_YOU)
      const as = `${url}?payment-status=success`
      const href = `${url}?payment-status=success`
      Router.push(href, as)
    }

    if (
      (this.props.cartState.payment.isPaymentFailure !==
      prevProps.cartState.payment.isPaymentFailure) &&
      this.props.cartState.payment.isPaymentFailure
    ) {
      const url = getReplacedString(THANK_YOU)
      const as = `${url}?payment-status=failed`
      const href = `${url}?payment-status=failed`
      Router.push(href, as)
    }

    if (
      (this.props.cartState.orderResponse.payload.order_type !==
      prevProps.cartState.orderResponse.payload.order_type
      ) &&
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

  verifyPayment (response) {
    this.props.verifyPaymentLoading(
      this.props.cartState,
      response,
      this.props.cartState.payment_gateway.order_id
    )
  }

  openCheckout (cartState) {
    openRazorpayCheckout(
      cartState,
      this.props.customerState,
      this.verifyPayment.bind(this),
      this.onModalDismiss.bind(this)
    )
  }

  onModalDismiss () {
    const isPaymentFailure = true

    this.props.updatePaymentFailureFlag(
      this.props.cartState,
      isPaymentFailure
    )
  }

  tryAgain () {
    this.props.getPaymentChannelsLoading(
      this.props.orderDetailsState,
      this.props.orderId
    )
  }

  render () {
    return (
      <Card elevation={'1'}>
        <CardContent className={this.props.classes.cardContent}>
          <ActivityIndicator
            isError={
              this.props.orderDetailsState.payment_channels.errorState.isError
            }
            ErrorComp={
              <ComponentSpecificError
                error={
                  this.props.orderDetailsState.payment_channels.errorState.error
                }
                tryAgain={this.tryAgain.bind(this)}
              />
            }
          >
            <div className={this.props.classes.orderWrapper}>
              <img
                src='/static/images/retryPaymentIcon.svg'
                alt='check'
                className={this.props.classes.imageStyle}
              />
              <Typography
                variant='display1'
                className={this.props.classes.thankyou}
              >
                Retry Payment
              </Typography>
            </div>
            <Typography
              className={this.props.classes.selectPaymentMode}
            >
                SELECT PAYMENT MODE
            </Typography>
            <div className={this.props.classes.radioWrapper}>
              <RadioGroup
                aria-label='Payment Channels'
                name='payment_channels'
                value={this.state.paymentChannel}
                onChange={this.handlePaymentChannelsChange.bind(this)}
              >
                {
                  this.props.orderDetailsState.payment_channels.payload.map(paymentChannel => {
                    return (
                      <FormControlLabel
                        value={paymentChannel.method}
                        control={
                          <Radio
                            classes={{
                              root: this.props.classes.radioButton,
                              checked: this.props.classes.checked
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
            <div className={this.props.classes.buttonWrapper}>
              <Button
                size='small'
                variant='raised'
                color='primary'
                className={this.props.classes.buttonViewStyle}
                onClick={this.retryPayment.bind(this)}
                label={'Continue'}
              />
            </div>
          </ActivityIndicator>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(RetryPayment)
