import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ReactTooltip from 'react-tooltip'

import {
  CARE_POINT_DESCRIPTION,
  CARE_POINT_PLUS_DESCRIPTION
} from '../messages/commonMsg'

const styles = theme => ({
  priceDetailsWrapper: {
    padding: theme.spacing.unit * 2.5,
    borderBottom: `1px solid ${theme.palette.customGrey.grey800}`
  },
  itemTotal: {
    fontSize: theme.spacing.unit * 1.75,
    paddingTop: theme.spacing.unit * 1.25,
    marginLeft: theme.spacing.unit * 2
  },
  itemTotalAmount: {
    fontSize: theme.spacing.unit * 1.75,
    paddingTop: theme.spacing.unit * 1.25,
    textAlign: 'right',
    paddingRight: theme.spacing.unit * 3
  },
  discount: {
    fontSize: theme.spacing.unit * 1.75,
    color: theme.palette.customGreen.green300,
    paddingTop: theme.spacing.unit * 1.25,
    marginLeft: theme.spacing.unit * 2
  },
  discountAmount: {
    fontSize: theme.spacing.unit * 1.75,
    color: theme.palette.customGreen.green300,
    paddingTop: theme.spacing.unit * 1.25,
    textAlign: 'right',
    paddingRight: theme.spacing.unit * 3
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  iconStyle: {
    width: theme.spacing.unit * 1.75,
    height: theme.spacing.unit * 1.75,
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit * 1.75
  },
  paper: {
    padding: theme.spacing.unit,
    width: theme.spacing.unit * 25,
    backgroundColor: `${theme.palette.customGrey.grey50} !important`,
    pointerEvents: 'auto !important',
    '&:after': {
      borderRightColor: `${theme.palette.customGrey.grey50} !important`
    },
    '&:hover': {
      visibility: 'visible !important',
      opacity: '1 !important'
    },
    opacity: '1 !important',
    borderRadius: '4px'
  },
  description: {
    fontSize: theme.typography.pxToRem(10),
    color: theme.palette.customGrey.grey500,
    marginBottom: theme.spacing.unit
  }
})

class PriceDetails extends Component {
  render () {
    return (
      <div className={this.props.classes.priceDetailsWrapper}>
        <Grid container>
          <Grid item xs={8}>
            <Typography className={this.props.classes.itemTotal}>
              ITEM TOTAL
            </Typography>
            <Typography className={this.props.classes.discount}>
              Discount
            </Typography>
            <div className={this.props.classes.infoWrapper} id='care_point'>
              <Typography className={this.props.classes.discount}>
                Care Points
              </Typography>
              <a href='#' data-tip data-for='care_point'>
                <img
                  src='/static/images/info-outline.svg'
                  className={this.props.classes.iconStyle}
                />
                <ReactTooltip
                  id='care_point'
                  effect='solid'
                  place='right'
                  className={this.props.classes.paper}
                  // delayHide={1000}
                  delayShow={500}
                >
                  <Typography
                    variant='caption'
                    className={this.props.classes.popoverContent}
                  >
                    {CARE_POINT_DESCRIPTION}
                  </Typography>
                </ReactTooltip>
              </a>
            </div>
            <div className={this.props.classes.infoWrapper}>
              <Typography className={this.props.classes.discount}>
                Care Points Plus
              </Typography>
              <a href='#' data-tip data-for='care_point_plus'>
                <img
                  src='/static/images/info-outline.svg'
                  className={this.props.classes.iconStyle}
                />
                <ReactTooltip
                  id='care_point_plus'
                  effect='solid'
                  place='right'
                  className={this.props.classes.paper}
                  // delayHide={1000}
                  delayShow={500}
                >
                  <Typography
                    variant='caption'
                    className={this.props.classes.popoverContent}
                  >
                    {CARE_POINT_PLUS_DESCRIPTION}
                  </Typography>
                </ReactTooltip>
              </a>
            </div>
            {this.props.cartState.payload.coupon_code &&
              <Typography className={this.props.classes.discount}>
                Coupon Discount
              </Typography>}
            {
              this.props.cartState.payload.urgent_delivery_charge
                ? (
                  <Typography className={this.props.classes.discount}>
                  Express Delivery Charges
                  </Typography>
                )
                : null
            }
          </Grid>
          <Grid item xs={4}>
            <Typography className={this.props.classes.itemTotalAmount}>
            ₹{this.props.cartState.payload.total_mrp}
            </Typography>
            <Typography className={this.props.classes.discountAmount}>
              - ₹ {this.props.cartState.payload.discount}
            </Typography>
            <Typography className={this.props.classes.discountAmount}>
              - ₹ {this.props.cartState.payload.redeemed_care_points}
            </Typography>
            <Typography className={this.props.classes.discountAmount}>
              - ₹ {this.props.cartState.payload.redeemable_care_points}
            </Typography>
            {this.props.cartState.payload.coupon_code &&
              <Typography className={this.props.classes.discountAmount}>
                - ₹ {this.props.cartState.payload.coupon_discount}
              </Typography>}
            {
              this.props.cartState.payload.urgent_delivery_charge
                ? (
                  <Typography className={this.props.classes.discountAmount}>
                    {this.props.cartState.payload.urgent_delivery_charge}
                  </Typography>
                )
                : null
            }
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(PriceDetails)
