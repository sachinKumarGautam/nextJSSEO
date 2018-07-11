import React, { Component } from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

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
    marginLeft: theme.spacing.unit * 6
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
      this.props.cartState.orderResponse.order_number !==
      prevProps.cartState.orderResponse.order_number
    ) {
      Router.push({ pathname: THANK_YOU})

      this.props.resetCartState()

      this.props.getAnonymousCartIdLoading(
        this.props.cartState,
        this.props.checkPincodeState.payload.source,
        this.props.checkPincodeState.payload.id,
        ''
      )
    }
  }

  render () {
    return (
      <Card elevation={'1'} className={this.props.classes.card}>
        <CardContent className={this.props.classes.cardContent}>
          <div className={this.props.classes.myCartWrapper}>
            <Typography className={this.props.classes.myCartText}>
              MY CART
            </Typography>
          </div>
          <div className={this.props.classes.cartWrapper}>
            {
              this.props.cartState.payload.patient_id.payload
                ? (
                  <Avatar
                    cartState={this.props.cartState}
                  />
                ) : null
            }
            <MedicineList
              cartState={this.props.cartState}
              decrementCartItem={this.decrementCartItem.bind(this)}
              incrementCartItem={this.incrementCartItem.bind(this)}
            />
            {
              // <Coupon />
            }
            <PriceDetails
              cartState={this.props.cartState}
            />
            <TotalAmount
              cartState={this.props.cartState}
            />
          </div>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(CartDetails)
