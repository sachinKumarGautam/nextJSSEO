import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  priceDetailsWrapper: {
    padding: theme.spacing.unit * 2.5,
    borderBottom: '1px solid #eee'
  },
  itemTotal: {
    fontSize: theme.spacing.unit * 1.75
  },
  discount: {
    fontSize: theme.spacing.unit * 1.75,
    color: theme.palette.customGreen.green300
  }
});

class PriceDetails extends Component {
  render () {
    return (
      <div className={this.props.classes.priceDetailsWrapper}>
        <Grid container spacing={24}>
          <Grid item xs={8}>
            <Typography className={this.props.classes.itemTotal}>
              ITEM TOTAL
            </Typography>
            <Typography className={this.props.classes.discount}>
              Discount
            </Typography>
            <Typography className={this.props.classes.discount}>
              Redeemed Care Points
            </Typography>
            <Typography className={this.props.classes.discount}>
              Care Points Plus
            </Typography>
            <Typography className={this.props.classes.itemTotal}>
              Amount Payable
            </Typography>
            <Typography className={this.props.classes.itemTotal}>
              Amount Paid
            </Typography>
            <Typography className={this.props.classes.itemTotal}>
              Remaining Amount Payable
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={this.props.classes.itemTotal}>
              Rs. 870.00
            </Typography>
            <Typography className={this.props.classes.discount}>
              - Rs. 70.00
            </Typography>
            <Typography className={this.props.classes.discount}>
              - Rs. 0.00
            </Typography>
            <Typography className={this.props.classes.discount}>
              - Rs. 0.00
            </Typography>
            <Typography className={this.props.classes.itemTotal}>
              Rs. 800.00
            </Typography>
            <Typography className={this.props.classes.itemTotal}>
              Rs. 0.00
            </Typography>
            <Typography className={this.props.classes.itemTotal}>
              Rs. 800.00
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(PriceDetails)
