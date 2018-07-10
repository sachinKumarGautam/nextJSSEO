import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    deliveryPincodeWrapper: {
      marginTop: theme.spacing.unit,
      display: 'inline-block'
    },
    deliveryLabel: {
      ...theme.typography.body1,
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.customGrey.grey600,
      display: 'inherit'
    },
    deliveryPincode: {
      ...theme.typography.body1,
      color: theme.palette.customGrey.grey500,
      marginLeft: theme.spacing.unit,
      display: 'inherit'
    },
    deliveryChangeLabel: {
      ...theme.typography.caption,
      marginLeft: theme.spacing.unit * 2,
      color: theme.palette.primary.main
    }
  }
}

const DeliveryPincode = (props) => (
  <div className={props.classes.deliveryPincodeWrapper}>
    <Typography component={'span'} className={props.classes.deliveryLabel}>Delivery </Typography>
    <Typography component={'span'} className={props.classes.deliveryPincode}>
      to pincode {props.pincode}
      <a onClick={props.openPincodeDialog.bind(this)} className={props.classes.deliveryChangeLabel}>Change</a>
    </Typography>
  </div>
)

export default withStyles(styles)(DeliveryPincode)
