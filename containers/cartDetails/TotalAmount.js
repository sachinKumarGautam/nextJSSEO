import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  totalAmountWrapper: {
    padding: theme.spacing.unit * 2.5
  },
  totalAmount: {
    fontSize: theme.spacing.unit * 2.25,
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'right',
    paddingRight: theme.spacing.unit * 4.125
  },
  totalAmountText: {
    fontSize: theme.spacing.unit * 2.25,
    paddingLeft: theme.spacing.unit * 2
  }
})

class TotalAmount extends Component {
  render () {
    return (
      <Grid container className={this.props.classes.totalAmountWrapper}>
        <Grid item xs={8}>
          <Typography className={this.props.classes.totalAmountText}>
            TOTAL AMOUNT
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={this.props.classes.totalAmount}>
            ₹ {this.props.cartState.payload.total_sale_price}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(TotalAmount)
