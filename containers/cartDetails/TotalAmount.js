import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
});

class Avatar extends Component {
  render () {
    return (
      <div className={this.props.classes.totalAmountWrapper}>
        <Grid container spacing={24}>
          <Grid item xs={8}>
            <Typography className={this.props.classes.totalAmountText}>
              TOTAL AMOUNT
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={this.props.classes.totalAmount}>
              Rs. 800
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Avatar)
