import React from 'react'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    deliveryTATWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing.unit,
      marginLeft: theme.spacing.unit * 1.5
    },
    deliveryTATLabel: {
      ...theme.typography.caption,
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.customGrey.grey500,
      marginLeft: theme.spacing.unit * 1.25
    }
  }
}

const DeliveryTAT = props => (
  <div className={props.classes.deliveryTATWrapper}>
    <img src={'/static/images/delivery-tat.svg'} />
    <Typography variant='caption' className={props.classes.deliveryTATLabel}>
      Delivery by {props.delivery_day} day{props.delivery_day > 1 ? 's' : null}
    </Typography>
  </div>
)

export default withStyles(styles)(DeliveryTAT)
