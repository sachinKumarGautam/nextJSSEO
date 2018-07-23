import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    deliveryPincodeWrapper: {
      marginTop: theme.spacing.unit * 1.25,
      display: 'inline-block',
      marginLeft: theme.spacing.unit * 1.5
    },
    deliveryLabel: {
      ...theme.typography.caption,
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.customGrey.grey600,
      display: 'inherit'
    },
    deliveryPincode: {
      ...theme.typography.caption,
      color: theme.palette.customGrey.grey500,
      marginLeft: theme.spacing.unit * 0.75,
      display: 'inherit',
      marginRight: theme.spacing.unit * 2.25
    },
    deliveryChangeLabel: {
      ...theme.typography.caption,
      marginLeft: theme.spacing.unit * 2,
      color: theme.palette.primary.main,
      cursor: 'pointer'
    }
  }
}

const DeliveryPincode = props => (
  <div className={props.classes.deliveryPincodeWrapper}>
    <Typography component={'span'} className={props.classes.deliveryLabel}>
      Delivery{' '}
    </Typography>
    <Typography component={'span'} className={props.classes.deliveryPincode}>
      to pincode {props.pincode}
      <a
        onClick={props.openPincodeDialog.bind(
          this,
          props.checkPincodeState,
          true
        )}
        className={props.classes.deliveryChangeLabel}
      >
        Change
      </a>
    </Typography>
  </div>
)

export default withStyles(styles)(DeliveryPincode)
