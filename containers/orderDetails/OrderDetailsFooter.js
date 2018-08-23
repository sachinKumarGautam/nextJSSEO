import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  orderNoWrapper: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row'
  },
  orderWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    fontSize: theme.spacing.unit * 1.75,
    paddingLeft: theme.spacing.unit * 2.5,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey200
  },
  orderId: {
    fontSize: theme.spacing.unit * 1.75,
    marginLeft: theme.spacing.unit * 3.75,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey200
  },
  cancelOrder: {
    fontSize: theme.spacing.unit * 1.75,
    color: theme.palette.customGrey.grey500,
    paddingRight: theme.spacing.unit * 5,
    fontWeight: theme.typography.fontWeightBold
  }
})

const OrderDetailsFooter = (props) => {
  return (
    <div className={props.classes.orderNoWrapper}>
      <div className={props.classes.orderWrapper}>
        <Typography
          className={props.classes.title}
        >
          Write a review
        </Typography>
        <Typography
          className={props.classes.orderId}
        >
          Need Help?
        </Typography>
      </div>
      <div>
        <Typography
          className={props.classes.cancelOrder}
        >
          Cancel Order
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(OrderDetailsFooter)
