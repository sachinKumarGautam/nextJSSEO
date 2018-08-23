import React from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  paymentStatus: {
    float: 'right'
  },
  paymentWrapper: {
    padding: theme.spacing.unit * 2.5,
    paddingRight: 0
  },
  placedOnText: {
    fontSize: theme.spacing.unit * 1.75,
    marginLeft: theme.spacing.unit * 2.5,
    color: theme.palette.customGrey.grey500
  },
  placeOn: {
    fontSize: theme.spacing.unit * 1.75,
    fontWeight: theme.typography.fontWeightBold
  },
  paymentStatusText: {
    textAlign: 'right',
    color: theme.palette.customYellow.yellow400,
    fontWeight: theme.typography.fontWeightBold
  },
  placedOnWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  paymentText: {
    fontSize: theme.spacing.unit * 1.75,
    marginLeft: theme.spacing.unit * 3.75,
    color: theme.palette.customGrey.grey500
  }
})

const PaymentDetails = (props) => {
  return (
    <Grid container spacing={24} className={props.classes.paymentWrapper}>
      <Grid item xs={9}>
        <div className={props.classes.placedOnWrapper}>
          <Typography
            className={props.classes.placeOn}
          >
            Placed On
          </Typography>
          <Typography
            className={props.classes.placedOnText}
          >
            {props.createdAt}
          </Typography>
        </div>
        <div className={props.classes.placedOnWrapper}>
          <Typography
            className={props.classes.placeOn}
          >
            Payment
          </Typography>
          <Typography
            className={props.classes.paymentText}
          >
            {props.paymentMethod}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={3}>
        <Typography
          className={props.classes.paymentStatusText}
        >
          Status: {props.paymentStatus}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(PaymentDetails)
