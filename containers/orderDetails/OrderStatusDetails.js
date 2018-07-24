import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Location from '@material-ui/icons/LocationOn'

const styles = theme => ({
  orderNoWrapper: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    fontSize: theme.spacing.unit * 2.5
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
})

const OrderStatusDetails = (props) => {
  return (
    <div className={props.classes.orderNoWrapper}>
      <Typography
        className={props.classes.title}
      >
        Order No. 100787317
      </Typography>
      <div>
        <a className={props.classes.trackWrapper}>
          <Location className={props.classes.iconButtonStyle} />Track Order
        </a>
      </div>
    </div>
  )
}

export default withStyles(styles)(OrderStatusDetails)
