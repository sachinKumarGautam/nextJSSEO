import React from 'react'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    label: {
      ...theme.typography.body3,
      color: theme.palette.customGrey.grey600,
      marginLeft: theme.spacing.unit
    },
    expressDeliveryWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing.unit
    }
  }
}

const ExpressDeliveryInfo = (props) => (
  <div className={props.classes.expressDeliveryWrapper}>
    <img src={'/static/images/express-delivery-icon.svg'} />
    <Typography component='caption' className={props.classes.label}>
      Express Delivery Available
    </Typography>
  </div>
)

export default withStyles(styles)(ExpressDeliveryInfo)
