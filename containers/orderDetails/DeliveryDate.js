import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  deliveryDateWrapper: {
    paddingLeft: theme.spacing.unit * 2.5,
    display: 'flex',
    flexDirection: 'row',
    fontSize: theme.spacing.unit * 2
  },
  deliveryDateText: {
    color: theme.palette.customGrey.grey700
  },
  deliveryDate: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit
  }
})

const DeliveryDate = (props) => {
  return (
    <div className={props.classes.deliveryDateWrapper}>
      <Typography
        className={props.classes.deliveryDateText}
      >
        Estimated Delivery:
      </Typography>
      <Typography
        className={props.classes.deliveryDate}
      >
        {props.promisedDeliveryDate}
      </Typography>
    </div>
  )
}

export default withStyles(styles)(DeliveryDate)
