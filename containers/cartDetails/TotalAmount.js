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
    textAlign: 'right'
  },
  totalAmountText: {
    fontSize: theme.spacing.unit * 2.25
  }
})

class Avatar extends Component {
  render () {
    return (
      <Grid
        container
        spacing={24}
        className={this.props.classes.totalAmountWrapper}
      >
        <Grid item xs={8}>
          <Typography className={this.props.classes.totalAmountText}>
            TOTAL AMOUNT
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={this.props.classes.totalAmount}>
            Rs. {this.props.cartState.payload.total_sale_price}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Avatar)
