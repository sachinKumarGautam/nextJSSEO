import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Location from '@material-ui/icons/LocationOn'
import IconButton from '@material-ui/core/IconButton'

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
    orderNoStyle: {
      ...theme.typography.caption,
      color: theme.palette.customGrey.grey500,
    },
    orderIdStyle: {
      ...theme.typography.caption,
      color: theme.palette.customGreen.green300,
      marginLeft: theme.spacing.unit
    },
    iconButtonStyle: {
      color: theme.palette.customGreen.green300,
      height: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit / 4
    },
    trackWrapper: {
      ...theme.typography.caption,
      color: theme.palette.customGrey.grey500,
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'row'
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
      <span className={props.classes.trackWrapper}>
        <Location className={props.classes.iconButtonStyle}/><u>Track Order</u>
      </span>
    </div>
  )
}

export default withStyles(styles)(OrderHeader)
