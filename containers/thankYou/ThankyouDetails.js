import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import {formatDate} from '../../utils/FormatDate'

const styles = theme => ({
  imageStyle: {
    marginLeft: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit * 3.5,
    marginBottom: theme.spacing.unit * 2.25
  },
  thankyou: {
    fontSize: theme.typography.pxToRem(32),
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit * 4
  },
  order: {
    fontSize: theme.typography.pxToRem(18),
    marginLeft: theme.spacing.unit * 5,
    color: theme.palette.customGrey.grey500,
    marginBottom: theme.spacing.unit
  },
  orderNumber: {
    fontSize: theme.typography.pxToRem(18),
    color: theme.palette.customGrey.grey500,
    marginBottom: theme.spacing.unit,
    fontWeight: theme.typography.fontWeightBold
  },
  orderWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  deliveryDate: {
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 1.5
  },
  deliveryDateValue: {
    color: theme.palette.customGrey.grey500,
    marginBottom: theme.spacing.unit * 1.5
  },
  description: {
    color: theme.palette.customGrey.grey500,
    paddingBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 12.12
  }
})

const ThankyouDetails = (props) => {
  return (
    <div>
      <div className={props.classes.orderWrapper}>
        <img
          src= '../../static/images/bg-chk.svg'
          alt='check'
          className={props.classes.imageStyle}
        />
        <Typography
          variant='display1'
          className={props.classes.thankyou}
        >
          Thankyou for your order
        </Typography>
      </div>
      <div className={props.classes.orderWrapper}>
        <Typography
          variant='subheading'
          className={props.classes.order}
        >
          Order No
        </Typography>
        <Typography
          variant='subheading'
          className={props.classes.orderNumber}
        >
          : {props.cartState.orderResponse.order_number}
        </Typography>
      </div>
      <div className={props.classes.orderWrapper}>
        <Typography
          variant='body2'
          className={props.classes.deliveryDate}
        >
          Estimated Delivery Date
        </Typography>
        <Typography
          variant='body2'
          className={props.classes.deliveryDateValue}
        >
          : {
            props.cartState.orderResponse.promised_delivery_date ?
            formatDate(props.cartState.orderResponse.promised_delivery_date) : ''
          }
        </Typography>
      </div>
      <Typography
        variant='body2'
        className={props.classes.description}
      >
        Your order is under process and is promised is promised for same day Express delivery*. We will call you shortly to confirm medicines and quantities
      </Typography>
    </div>
  )
}

export default withStyles(styles)(ThankyouDetails)
