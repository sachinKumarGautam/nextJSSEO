import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

import {formatDateWithMonth} from '../../utils/FormatDate'

const styles = theme => {
  return {
    wrapperStyle: {
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    labelStyle: {
      ...theme.typography.body4,
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.customGrey.grey700
    },
    valueStyle: {
      ...theme.typography.body3,
      color: theme.palette.customGrey.grey500
    }
  }
}

const OrderFooter = (props) => {
  return (
    <div className={props.classes.wrapperStyle}>
      <div>
        <Typography
          variant="caption"
          className={props.classes.labelStyle}
        >
          Placed On
        </Typography>
        <Typography
          variant="caption"
          className={props.classes.valueStyle}
        >
          {formatDateWithMonth(props.orderDetails.created_at)}
        </Typography>
      </div>
      <div>
        <Typography
          variant="caption"
          className={props.classes.labelStyle}
        >
          Delivery Date
        </Typography>
        <Typography
          variant="caption"
          className={props.classes.valueStyle}
        >
          {formatDateWithMonth(props.orderDetails.delivery_date)}
        </Typography>
      </div>
      <div>
        <Typography
          variant="caption"
          className={props.classes.labelStyle}
        >
          Payment
        </Typography>
        <Typography
          variant="caption"
          className={props.classes.valueStyle}
        >
          {props.orderDetails.payment_method}
        </Typography>
      </div>
      <div>
        <Typography
          variant="caption"
          className={props.classes.labelStyle}
        >
          Total Amount
        </Typography>
        <Typography
          variant="caption"
          className={props.classes.valueStyle}
        >
          {props.orderDetails.total_payable_amount}
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(OrderFooter)
