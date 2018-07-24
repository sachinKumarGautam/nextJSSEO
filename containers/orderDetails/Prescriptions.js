import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  paymentStatus: {
    float: 'right'
  }
})

const Prescriptions = (props) => {
  return (
    <div>
      <Typography
      >
        Attached Prescription
      </Typography>
      <Typography
      >
        08 Apr 2018
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Prescriptions)
