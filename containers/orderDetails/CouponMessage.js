import React, { Component } from 'react'

import {COUPON_MESSAGE} from '../messages/couponMessage'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  messageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    border: `1px dashed ${theme.palette.customGrey.grey200}`,
    paddingLeft: theme.spacing.unit * 2.125,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 1.5,
    marginLeft: theme.spacing.unit * 2.5
  },
  couponMessage: {
    ...theme.typography.body3,
    color: theme.palette.customGrey.grey600,
    textAlign: 'left',
    marginLeft: theme.spacing.unit * 1.5,
    fontSize: theme.spacing.unit * 1.75,
    marginTop: theme.spacing.unit * 1.875
  },
  image: {
    marginTop: theme.spacing.unit * 1.25
  }
})

class CouponMessage extends Component {
  render () {
    return (
      <div className={this.props.classes.messageWrapper}>
        <img
          src='/static/images/drugs-discount-copy.svg'
          className={this.props.classes.image}
        />
        <Typography
          varaint='caption'
          className={this.props.classes.couponMessage}
        >
          {COUPON_MESSAGE}
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(CouponMessage)
