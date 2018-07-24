import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  paymentStatus: {
    float: 'right'
  }
})

const AddressDetails = (props) => {
  return (
    <Typography
    >
      Home
    </Typography>
  )
}

export default withStyles(styles)(AddressDetails)
