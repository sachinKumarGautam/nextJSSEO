import React, { Component } from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import Avatar from './Avatar'
import MedicineList from './MedicineList'
import Coupon from './Coupon'
import PriceDetails from './PriceDetails'
import TotalAmount from './TotalAmount'

import Router from 'next/router'

import { THANK_YOU } from '../../routes/RouteConstant'

import { NO_MEDICINES, MEDICINE_QUANTITY_ALERT } from '../messages/cartMessages'
import CartItemLoader
  from '../../components/activityIndicator/loader/cartLoaders/CartItemLoaderWrapper'
import ActivityIndicator from '../../components/activityIndicator/index'

import { getReplacedString } from '../../utils/replaceConstants'

import openRazorpayCheckout from '../../utils/openRazorpayCheckout'

import { COD } from '../../components/constants/paymentConstants'

import Snackbar from '@material-ui/core/Snackbar'

import { SNACK_BAR_DURATION } from '../../components/constants/Constants'

/*
  avatar
  medicine list
  coupon
  care points
  care points plus
  price details
  total amount
*/

const styles = theme => ({
  card: {
    marginLeft: theme.spacing.unit * 3.125
  },
  cardContent: {
    padding: 0
  },
  cartDetailsWrapper: {
    backgroundColor: theme.palette.common.white
  },
  myCartWrapper: {
    height: theme.spacing.unit * 5.565,
    backgroundColor: theme.palette.customGreen.green300
  },
  myCartText: {
    color: theme.palette.common.white,
    paddingTop: theme.spacing.unit * 1.25,
    marginLeft: theme.spacing.unit * 2.5,
    fontWeight: theme.typography.fontWeightBold
  },
  scrollWrapper: {
    maxHeight: theme.spacing.unit * 50,
    overflowY: 'scroll',
    overflowX: 'hidden'
  },
  cartWrapper: {
    '&:last-child': {
      paddingBottom: 0
    }
  },
  medicineListWrapper: {
    paddingTop: theme.spacing.unit * 4.375,
    paddingBottom: theme.spacing.unit * 4.375,
    textAlign: 'center'
  }
})

class CartDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quantityStatus: null,
      openSnackbar: false
    }

    this.verifyPayment = this.verifyPayment.bind(this)
    this.onModalDismiss = this.onModalDismiss.bind(this)
  }

  handleCloseSnackbar = () =>
    this.setState({
      openSnackbar: !this.state.openSnackbar
    })

  decrementCartItem (cartItem) {
    this.setState({
      quantityStatus: 'decrease'
    })
    if (cartItem.quantity === 1) {
      this.props.deleteCartItemLoading(this.props.cartState, cartItem)
    } else if (cartItem.quantity > 1) {
      this.props.decrementCartItemLoading(this.props.cartState, cartItem)
    }
  }

  incrementCartItem (cartItem) {
    if (
      cartItem.max_order_quantity &&
      cartItem.quantity >= cartItem.max_order_quantity
    ) {
      this.handleCloseSnackbar()
    } else {
      this.setState({
        quantityStatus: 'increase'
      })
      this.props.incrementCartItemLoading(this.props.cartState, cartItem)
    }
  }

  openCheckout (cartState) {
    openRazorpayCheckout(
      cartState,
      this.props.customerState,
      this.verifyPayment,
      this.onModalDismiss
    )
  }

  onModalDismiss () {
    const isPaymentFailure = true

    this.props.updatePaymentFailureFlag(this.props.cartState, isPaymentFailure)
  }

  verifyPayment (response) {
    this.props.verifyPaymentLoading(
      this.props.cartState,
      response,
      this.props.cartState.payment_gateway.order_id
    )
  }

  componentDidUpdate (prevProps) {
    if (
      this.props.cartState.isOrderSubmitted !==
        prevProps.cartState.isOrderSubmitted &&
      this.props.cartState.isOrderSubmitted &&
      this.props.cartState.orderResponse.payload.order_type !== COD
    ) {
      this.openCheckout(this.props.cartState)
    } else if (
      this.props.cartState.payment.isPaymentSuccessful !==
        prevProps.cartState.payment.isPaymentSuccessful &&
      this.props.cartState.payment.isPaymentSuccessful
    ) {
      this.props.resetCartState()
      const url = getReplacedString(THANK_YOU)
      const as = `${url}?payment-status=success`
      const href = `${url}?payment-status=success`
      Router.push(href, as)
    } else if (
      this.props.cartState.payment.isPaymentFailure !==
        prevProps.cartState.payment.isPaymentFailure &&
      this.props.cartState.payment.isPaymentFailure
    ) {
      this.props.resetCartState()
      const url = getReplacedString(THANK_YOU)
      const as = `${url}?payment-status=failed`
      const href = `${url}?payment-status=failed`
      Router.push(href, as)
    } else if (
      this.props.cartState.orderResponse.payload.order_number !==
        prevProps.cartState.orderResponse.payload.order_number &&
      this.props.cartState.orderResponse.payload.order_type === COD
    ) {
      this.props.resetCartState()
      const url = getReplacedString(THANK_YOU)
      const as = `${url}?payment-status=success`
      const href = `${url}?payment-status=success`
      Router.push(href, as)
    }
  }

  render () {
    return (
      <Card elevation={'1'} className={this.props.classes.card}>
        <CardContent
          className={this.props.classes.cardContent}
          classes={{
            root: this.props.classes.cartWrapper
          }}
        >
          <div className={this.props.classes.myCartWrapper}>
            <Typography className={this.props.classes.myCartText}>
              MY CART
            </Typography>
          </div>
          <ActivityIndicator
            isLoading={this.props.cartState.isLoading}
            LoaderComp={<CartItemLoader />}
          >
            <div className={this.props.classes.scrollWrapper}>
              {this.props.cartState.payload.patient_details.payload.patient_id
                ? <div>
                  <Avatar cartState={this.props.cartState} />
                  <Divider />
                </div>
                : null}
              {this.props.cartState.payload.cart_items.payload.length
                ? <MedicineList
                  cartState={this.props.cartState}
                  decrementCartItem={this.decrementCartItem.bind(this)}
                  incrementCartItem={this.incrementCartItem.bind(this)}
                  checkPincodeState={this.props.checkPincodeState}
                  quantityStatus={this.state.quantityStatus}
                  />
                : <div>
                  <Typography
                    className={this.props.classes.medicineListWrapper}
                    >
                    {NO_MEDICINES}
                  </Typography>
                  <Divider />
                </div>}
              {this.props.cartState.payload.patient_details.payload.patient_id
                ? <Coupon
                  applyCouponCodeLoading={this.props.applyCouponCodeLoading}
                  updateCouponCode={this.props.updateCouponCode}
                  cartState={this.props.cartState}
                  resetCouponDetail={this.props.resetCouponDetail}
                  />
                : null}
              <PriceDetails cartState={this.props.cartState} />
            </div>
          </ActivityIndicator>
          {!this.props.cartState.isLoading &&
            <TotalAmount cartState={this.props.cartState} />}
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            open={this.state.openSnackbar}
            autoHideDuration={SNACK_BAR_DURATION}
            onClose={this.handleCloseSnackbar}
            ContentProps={{
              'aria-describedby': 'message-id'
            }}
            message={<span id='message-id'>{MEDICINE_QUANTITY_ALERT}</span>}
          />
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(CartDetails)
