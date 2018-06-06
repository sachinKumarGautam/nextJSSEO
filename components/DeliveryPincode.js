import React from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    deliveryPincodeWrapper: {
      marginTop: theme.spacing.unit
    },
    deliveryLabel: {
      ...theme.typography.body1,
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.customGrey.grey600
    },
    deliveryPincode: {
      ...theme.typography.body1,
      color: theme.palette.customGrey.grey500
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
    <span className={props.classes.deliveryLabel}>Delivery </span>
    <span className={props.classes.deliveryPincode}>to pincode 110056</span>
    <a href='' className={props.classes.deliveryChangeLabel}>Change</a>
  </div>
)

export default withStyles(styles)(DeliveryPincode)
