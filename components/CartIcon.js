import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import ReactTooltip from 'react-tooltip'

import Button from './button'

// import Link from 'next/link'
import Router from 'next/router'

import { CART_DETAILS } from '../routes/RouteConstant'
import { NO_CART_ITEM } from '../containers/messages/cartMessages'

import { getReplacedString } from '../utils/replaceConstants'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  menuPaperProps: {
    width: theme.spacing.unit * 32
  },
  menuStyle: {
    top: theme.spacing.unit * 5
  },
  summaryStyle: {
    ...theme.typography.body3,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGreen.green300
  },
  itemStyle: {
    ...theme.typography.body3,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGreen.green300
  },
  summaryMenuWrapper: {
    justifyContent: 'space-between',
    paddingTop: 0,
    paddingBottom: theme.spacing.unit,
    display: 'flex'
  },
  medicineNameStyle: {
    ...theme.typography.body3,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey700
  },
  priceStyle: {
    ...theme.typography.body4,
    color: theme.palette.customGrey.grey700
  },
  medicineDetailWrapper: {
    justifyContent: 'space-between',
    display: 'flex',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingRight: theme.spacing.unit / 2
  },
  noItemTextStyle: {
    ...theme.typography.body4,
    color: theme.palette.customGrey.grey200
  },
  buttonRoot: {
    border: `1px solid ${theme.palette.primary.main}`
  },
  buttonLabel: {
    ...theme.typography.caption,
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4
  },
  buttonStyle: {
    textAlign: 'center',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  paper: {
    padding: theme.spacing.unit,
    width: theme.spacing.unit * 25,
    backgroundColor: `${theme.palette.secondary.main} !important`,
    pointerEvents: 'auto !important',
    '&:after': {
      borderBottomColor: `${theme.palette.secondary.main} !important`
    },
    '&:hover': {
      visibility: 'visible !important',
      opacity: '1 !important'
    },
    borderRadius: '4px',
    boxShadow: '0 4px 4px 2px rgba(0, 0, 0, 0.14)'
  },
  moleculeTag: {
    textDecoration: 'none'
  },
  badge: {
    width: theme.spacing.unit * 2,
    height: theme.spacing.unit * 2,
    top: theme.typography.pxToRem(-8),
    right: 0,
    left: theme.spacing.unit * 2,
    color: theme.palette.common.white,
    padding: theme.typography.pxToRem(9),
    fontSize: theme.typography.pxToRem(10)
  },
  badgeRoot: {
    // padding: theme.spacing.unit * 2
  },
  iconStyle: {
    fontSize: theme.spacing.unit * 3.25,
    color: theme.palette.customGrey.grey600
  }
})

class CartIcon extends Component {
  state = {
    quantity: 4
  }

  redirectToPath (path) {
    const url = getReplacedString(path)
    Router.push(url)
  }

  render () {
    const { classes } = this.props
    const cartItems = this.props.cartState.payload.cart_items.payload
    return (
      <div>
        <a className={classes.moleculeTag} data-tip data-for='cartIcon'>
          <IconButton
            className={classes.button}
            color={'primary'}
            aria-label='Add to shopping cart'
          >
            <Badge
              badgeContent={cartItems.length}
              color='primary'
              classes={{
                root: classes.badgeRoot,
                badge: classes.badge
              }}
            >
              <ShoppingCartIcon classes={{ root: classes.iconStyle }} />
            </Badge>
          </IconButton>
        </a>
        <ReactTooltip
          id='cartIcon'
          effect='solid'
          place='bottom'
          className={classes.paper}
          delayHide={500}
          delayShow={100}
        >
          <div className={classes.summaryMenuWrapper}>
            <Typography variant='caption' className={classes.summaryStyle}>
              Order Summary
            </Typography>
            <Typography variant='caption' className={classes.itemStyle}>
              {cartItems.length} item(s)
            </Typography>
          </div>
          <Divider />
          <div className={classes.medicineDetailWrapper}>
            <Typography
              variant='caption'
              className={
                this.state.quantity
                  ? classes.medicineNameStyle
                  : classes.noItemTextStyle
              }
            >
              {cartItems.length
                ? cartItems[cartItems.length - 1].name
                : NO_CART_ITEM}
            </Typography>
            {cartItems.length
              ? <Typography variant='caption' className={classes.priceStyle}>
                  ₹{' '}
                {cartItems.length && cartItems[cartItems.length - 1].mrp}
              </Typography>
              : null}
          </div>
          <div className={classes.buttonStyle}>
            {/* <Link prefetch href={}> */}
            <Button
              size='small'
              variant='outlined'
              color='primary'
              classes={{
                root: classes.buttonRoot,
                label: classes.buttonLabel
              }}
              label={'Proceed to Cart'}
              onClick={this.redirectToPath.bind(this, CART_DETAILS)}
            />
            {/* </Link> */}
          </div>
        </ReactTooltip>
      </div>
    )
  }
}

export default withStyles(styles)(CartIcon)
