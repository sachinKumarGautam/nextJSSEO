import React from 'react'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    deliveryTATWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing.unit
    },
    deliveryTATLabel: {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.customGrey.grey500,
      marginLeft: theme.spacing.unit
    }
  }
}

const DeliveryTAT = (props) => (
  <div className={props.classes.deliveryTATWrapper}>
    <img src={'/static/images/delivery-tat.svg'} />
    <Typography variant='caption' className={props.classes.deliveryTATLabel}>
      Delivered within {props.delivery_day} day
    </Typography>
  </div>
)

export default withStyles(styles)(DeliveryTAT)
