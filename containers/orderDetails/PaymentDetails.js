import React from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  paymentStatus: {
    float: 'right'
  }
})

const PaymentDetails = (props) => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={9}>
        <Typography
        >
          Placed On 06 Apr 2018
        </Typography>
        <Typography
        >
          Payment Credit Card
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography
          className={props.classes.paymentStatus}
        >
          Status: Payment Pending
        </Typography>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(PaymentDetails)
