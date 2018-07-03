import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  couponWrapper: {
    padding: theme.spacing.unit * 2.5,
    textAlign: 'center'
  },
  borderStyle: {
    border: '1px dotted #979797',
    padding: theme.spacing.unit * 1.25,
    borderRadius: theme.spacing.unit * 0.25
  },
  couponText: {
    fontSize: theme.spacing.unit * 2.25
  }
})

class Coupon extends Component {
  render () {
    return (
      <div className={this.props.classes.couponWrapper}>
        <div className={this.props.classes.borderStyle}>
          <Typography className={this.props.classes.couponText}>
            Have a coupon code?
          </Typography>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Coupon)
