import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Avatar from './Avatar'
import MedicineList from './MedicineList'
import Coupon from './Coupon'
import CarePoints from './CarePoints'
import CarePointsPlus from './CarePointsPlus'
import PriceDetails from './PriceDetails'
import TotalAmount from './TotalAmount'

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
  cartWrapper: {
    boxshadow: '0 1px 3px 0 rgba(63, 63, 68, 0.15), 0 0 0 1px rgba(63, 63, 68, 0.05)'
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
  render () {
    return (
      <div>
        <div className={this.props.classes.myCartWrapper}>
          <Typography className={this.props.classes.myCartText}>
            MY CART
          </Typography>
        </div>
        <div className={this.props.classes.cartWrapper}>
          <Avatar />
          <MedicineList />
          <Coupon />
          <CarePoints />
          <CarePointsPlus />
          <PriceDetails />
          <TotalAmount />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(CartDetails)
