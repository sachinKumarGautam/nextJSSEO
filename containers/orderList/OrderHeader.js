import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Location from '@material-ui/icons/LocationOn'

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
      color: theme.palette.customGrey.grey500
    },
    orderIdStyle: {
      color: theme.palette.customGreen.green300,
      marginLeft: theme.spacing.unit
    },
    orderWrapper: {
      display: 'flex'
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
      <div className={props.classes.orderWrapper}>
        <Typography
          variant='caption'
          className={props.classes.orderNoStyle}
        >
          Order No.
        </Typography>
        <Typography
          variant='caption'
          className={props.classes.orderIdStyle}
        >
          {props.orderDetails.id}
        </Typography>
      </div>
      <div>
        <a className={props.classes.trackWrapper}>
          <Location className={props.classes.iconButtonStyle} />Track Order
        </a>
      </div>
    </div>
  )
}

export default withStyles(styles)(OrderHeader)
