import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

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
          06 Apr 2018
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
          08 Apr 2018
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
          Credit Card
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
          Rs. 741.6
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(OrderFooter)
