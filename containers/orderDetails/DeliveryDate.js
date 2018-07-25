import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  deliveryDateText: {
    fontSize: theme.spacing.unit * 2.25
  },
  deliveryDate: {
    fontSize: theme.spacing.unit * 2.25,
    fontWeight: theme.typography.fontWeightBold
  }
})

const DeliveryDate = (props) => {
  return (
    <div>
      <Typography
        className={props.classes.deliveryDateText}
      >
        Estimated Delivery
      </Typography>
      <Typography
        className={props.classes.deliveryDate}
      >
        08 Apr 2018
      </Typography>
    </div>
  )
}

export default withStyles(styles)(DeliveryDate)
