import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  paymentStatus: {
    float: 'right'
  }
})

const DeliveryDate = (props) => {
  return (
    <div>
      <Typography
      >
        Estimated Delivery
      </Typography>
      <Typography
      >
        08 Apr 2018
      </Typography>
    </div>
  )
}

export default withStyles(styles)(DeliveryDate)
