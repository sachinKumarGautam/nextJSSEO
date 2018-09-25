import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import Button from '../../components/button'

const styles = theme => ({
  couponDetailWrapper: {
    marginTop: theme.spacing.unit * 2.25,
    marginBottom: theme.spacing.unit * 3,
    border: `1px dashed ${theme.palette.customGrey.grey200}`,
    textAlign: 'left',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  couponButtonRoot: {
    border: 'none',
    borderRadius: 0
  },
  couponCodeStyle: {
    ...theme.typography.body2,
    color: theme.palette.customGrey.grey500,
    fontWeight: theme.typography.fontWeightBold,
    paddingLeft: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit
  },
  couponDescriptionStyle: {
    ...theme.typography.caption,
    color: theme.palette.customGrey.grey300,
    paddingLeft: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit
  },
  editButton: {
    textAlign: 'center',
    marginRight: theme.spacing.unit * 2
  },
  editButtonLabel: {
    ...theme.typography.caption,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey500
  }
})

class EditCoupon extends Component {
  render () {
    return (
      <div className={this.props.classes.couponDetailWrapper}>
        <div>
          <Typography
            variant='caption'
            className={this.props.classes.couponCodeStyle}
          >
            {this.props.cartState.couponDetail.payload.coupon_code}
          </Typography>
          <Typography
            variant='caption'
            className={this.props.classes.couponDescriptionStyle}
          >
            {this.props.cartState.couponDetail.payload.short_coupon_description}
          </Typography>
        </div>
        <Button
          size='small'
          color='primary'
          className={this.props.classes.editButton}
          onClick={this.props.onClickOfCoupon}
          classes={{
            root: this.props.classes.couponButtonRoot,
            label: this.props.classes.editButtonLabel
          }}
          label={'EDIT'}
        />
      </div>
    )
  }
}

export default withStyles(styles)(EditCoupon)
