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

import {
  THANK_YOU
} from '../../routes/RouteConstant'

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
    overflowY: 'scroll'
  },
  cartWrapper: {
    '&:last-child': {
      paddingBottom: 0
    }
  }
})

class CartDetails extends Component {
  decrementCartItem (cartItem) {
    if (cartItem.quantity === 1) {
      this.props.deleteCartItemLoading(this.props.cartState, cartItem)
    } else {
      this.props.decrementCartItemLoading(this.props.cartState, cartItem)
    }
  }

  incrementCartItem (cartItem) {
    this.props.incrementCartItemLoading(this.props.cartState, cartItem)
  }

  componentDidUpdate (prevProps) {
    if (
      this.props.cartState.orderResponse.payload.order_number !==
      prevProps.cartState.orderResponse.payload.order_number
    ) {
      Router.push({ pathname: THANK_YOU})

      this.props.resetCartState()
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
          <div className={this.props.classes.scrollWrapper}>
            {
              this.props.cartState.payload.patient_id.payload
                ? (
                  <div>
                    <Avatar
                      cartState={this.props.cartState}
                    />
                    <Divider />
                  </div>
                ) : null
            }
            <MedicineList
              cartState={this.props.cartState}
              decrementCartItem={this.decrementCartItem.bind(this)}
              incrementCartItem={this.incrementCartItem.bind(this)}
            />
            {
              this.props.cartState.payload.patient_id.payload
                ? (
                  <Coupon
                    applyCouponCodeLoading={this.props.applyCouponCodeLoading}
                    updateCouponCode={this.props.updateCouponCode}
                    cartState={this.props.cartState}
                  />
                ) : null
            }
            <PriceDetails
              cartState={this.props.cartState}
            />
          </div>
          <TotalAmount
            cartState={this.props.cartState}
          />
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(CartDetails)
