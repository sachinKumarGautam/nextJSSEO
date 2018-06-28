import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    wrapperStyle: {
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit,
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    orderNoStyle: {
      ...theme.typography.body1,
      color: theme.palette.customGrey.grey500,
    },
    orderIdStyle: {
      ...theme.typography.body1,
      color: theme.palette.customGreen.green300,
    }
  }
}

const OrderHeader = (props) => {
  return (
    <div className={props.classes.wrapperStyle}>
      <span className={props.classes.orderNoStyle}>
        Order No.
        <span className={props.classes.orderIdStyle}>100787317</span>
      </span>
      <span className={props.classes.orderNoStyle}>Track Order</span>
    </div>
  )
}

export default withStyles(styles)(OrderHeader)
