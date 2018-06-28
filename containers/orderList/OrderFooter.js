import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

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
      <span className={props.classes.labelStyle}>
        Placed On <br/><span className={props.classes.valueStyle}>06 Apr 2018</span>
      </span>
      <span className={props.classes.labelStyle}>
        Delivery Date <br/><span className={props.classes.valueStyle}>08 Apr 2018</span>
      </span>
      <span className={props.classes.labelStyle}>
        Payment <br/><span className={props.classes.valueStyle}>Credit Card</span>
      </span>
      <span className={props.classes.labelStyle}>
        Total Amount <br/><span className={props.classes.valueStyle}>Rs. 741.6</span>
      </span>
    </div>
  )
}

export default withStyles(styles)(OrderFooter)
