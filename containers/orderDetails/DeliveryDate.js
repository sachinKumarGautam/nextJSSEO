import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  deliveryDateWrapper: {
    paddingLeft: theme.spacing.unit * 2.5
  },
  deliveryDateText: {
    fontSize: theme.spacing.unit * 2.25
  },
  deliveryDate: {
    fontSize: theme.spacing.unit * 2.25,
    fontWeight: theme.typography.fontWeightBold,
    marginTop: theme.spacing.unit * 1.25
  }
})

const DeliveryDate = (props) => {
  return (
    <div className={props.classes.deliveryDateWrapper}>
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
